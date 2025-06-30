'use client'

import { auth, db } from '@/firebase/clientApp';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import nacl from 'tweetnacl';
import { encodeBase64, decodeBase64 } from 'tweetnacl-util';
import { ENABLE_E2EE } from '@/config';

// ================== Secret-key wrapping helpers ==================
let wrappingKey: CryptoKey | null = null;

// Obtain (or create) an AES-GCM key that persists across page reloads so that a
// previously wrapped NaCl secret key can still be unwrapped later.
async function getWrappingKey(): Promise<CryptoKey> {
    if (wrappingKey) return wrappingKey;

    // 1. Try to restore a previously-saved raw key from localStorage
    const storedRaw = localStorage.getItem('naclWrappingKey_raw');
    if (storedRaw) {
        try {
            const keyData = decodeBase64(storedRaw);
            wrappingKey = await window.crypto.subtle.importKey(
                'raw',
                keyData,
                'AES-GCM',
                false,
                ['encrypt', 'decrypt']
            );
            return wrappingKey;
        } catch {
            // Corrupted or tampered key – fall through to regeneration path
            console.warn('Failed to import persisted wrapping key – regenerating');
            localStorage.removeItem('naclWrappingKey_raw');
        }
    }

    // 2. Generate a fresh key and persist it for future sessions
    wrappingKey = await window.crypto.subtle.generateKey(
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
    );
    try {
        const exported = await window.crypto.subtle.exportKey('raw', wrappingKey);
        localStorage.setItem('naclWrappingKey_raw', encodeBase64(new Uint8Array(exported)));
    } catch (e) {
        console.warn('Failed to persist wrapping key:', e);
    }
    return wrappingKey;
}

async function wrapSecretKey(secretKey: Uint8Array, uid: string): Promise<void> {
    const key = await getWrappingKey();
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const cipher = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, secretKey);
    localStorage.setItem(`naclSecret_enc_${uid}`, btoa(String.fromCharCode(...new Uint8Array(cipher))));
    localStorage.setItem(`naclSecret_iv_${uid}`, encodeBase64(iv));
}

async function unwrapSecretKey(uid: string): Promise<Uint8Array | null> {
    const enc = localStorage.getItem(`naclSecret_enc_${uid}`);
    const ivB64 = localStorage.getItem(`naclSecret_iv_${uid}`);
    if (!enc || !ivB64) return null;
    try {
        const key = await getWrappingKey();
        const cipher = Uint8Array.from(atob(enc), c => c.charCodeAt(0));
        const iv = decodeBase64(ivB64);
        const plain = await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, cipher);
        return new Uint8Array(plain);
    } catch {
        console.warn('Failed to unwrap NaCl secret key – will regenerate');
        localStorage.removeItem(`naclSecret_enc_${uid}`);
        localStorage.removeItem(`naclSecret_iv_${uid}`);
        return null;
    }
}

// Encryption service for end-to-end encrypted messaging
export class EncryptionService {
    private static instance: EncryptionService;
    private keyPair: CryptoKeyPair | null = null; // Legacy RSA keys (optional)
    private naclKeyPair: nacl.BoxKeyPair | null = null; // Active NaCl keys
    private readonly algorithm: 'nacl' = 'nacl';
    private publicKeyCache = new Map<string, Uint8Array>();

    private constructor() { }

    static getInstance(): EncryptionService {
        if (!EncryptionService.instance) {
            EncryptionService.instance = new EncryptionService();
        }
        return EncryptionService.instance;
    }

    // Generate a new key pair for the current user
    async generateKeyPair(): Promise<void> {
        this.naclKeyPair = nacl.box.keyPair();
    }

    // Export public key to a format that can be stored
    async exportPublicKey(publicKey: Uint8Array): Promise<string> {
        return encodeBase64(publicKey);
    }

    // Import public key from stored format
    async importPublicKey(base64Key: string): Promise<Uint8Array> {
        return decodeBase64(base64Key);
    }

    // Export private key to a format that can be stored locally
    async exportPrivateKey(privateKey: CryptoKey): Promise<string> {
        const exported = await window.crypto.subtle.exportKey('pkcs8', privateKey);
        const exportedAsBase64 = btoa(String.fromCharCode(...new Uint8Array(exported)));
        return exportedAsBase64;
    }

    // Import private key from stored format
    async importPrivateKey(base64Key: string): Promise<CryptoKey> {
        const keyData = Uint8Array.from(atob(base64Key), c => c.charCodeAt(0));

        return await window.crypto.subtle.importKey(
            'pkcs8',
            keyData,
            {
                name: 'RSA-OAEP',
                hash: 'SHA-256'
            },
            false,
            ['decrypt']
        );
    }

    // Initialize encryption for current user (no-op if E2EE is disabled)
    async initializeEncryption(): Promise<boolean> {
        if (!ENABLE_E2EE) {
            return false;
        }

        const user = auth.currentUser;
        if (!user) return false;

        try {
            // Migration: remove legacy clear secret key if it exists
            localStorage.removeItem(`naclSecret_${user.uid}`);

            // Try to load wrapped secret key
            const wrappedSecret = await unwrapSecretKey(user.uid);
            const storedPublic = localStorage.getItem(`naclPublic_${user.uid}`);
            if (wrappedSecret && storedPublic) {
                this.naclKeyPair = {
                    secretKey: wrappedSecret,
                    publicKey: decodeBase64(storedPublic)
                } as any;
                return true;
            }

            // Generate new NaCl keys
            await this.generateKeyPair();
            if (this.naclKeyPair) {
                const pub = encodeBase64(this.naclKeyPair.publicKey);
                localStorage.setItem(`naclPublic_${user.uid}`, pub);
                await wrapSecretKey(this.naclKeyPair.secretKey, user.uid);
                await this.storePublicKeyOnServer(user.uid, pub);
            }
            return true;
        } catch (error) {
            console.error('Error initializing encryption:', error);
            return false;
        }
    }

    // Store user's public key on Firebase
    async storePublicKeyOnServer(userId: string, publicKey: string): Promise<void> {
        const keyDoc = doc(db, 'userKeys', userId);
        await setDoc(keyDoc, {
            publicKey,
            algorithm: 'nacl',
            updatedAt: new Date(),
            userId
        });
    }

    // Get another user's public key from Firebase
    async getPublicKey(userId: string): Promise<Uint8Array | null> {
        if (this.publicKeyCache.has(userId)) {
            return this.publicKeyCache.get(userId)!;
        }
        try {
            const keyDoc = doc(db, 'userKeys', userId);
            const keySnap = await getDoc(keyDoc);
            if (keySnap.exists()) {
                const keyData = keySnap.data();
                const publicKey = await this.importPublicKey(keyData.publicKey);
                this.publicKeyCache.set(userId, publicKey);
                return publicKey;
            }
        } catch (error) {
            console.error('Error getting public key:', error);
        }
        return null;
    }

    // Encrypt a message for a specific recipient
    async encryptMessage(message: string, recipientUserId: string): Promise<string | null> {
        if (!ENABLE_E2EE) return null;
        try {
            const recipientPublicKey = await this.getPublicKey(recipientUserId);
            if (!recipientPublicKey) return null;
            const nonce = nacl.randomBytes(24);
            const cipher = nacl.box(new TextEncoder().encode(message), nonce, recipientPublicKey, this.naclKeyPair!.secretKey);
            const combined = new Uint8Array(nonce.length + cipher.length);
            combined.set(nonce);
            combined.set(cipher, nonce.length);
            return 'nacl:' + encodeBase64(combined);
        } catch (error) {
            console.error('Error encrypting message:', error);
            return null;
        }
    }

    // Decrypt a received message
    async decryptMessage(encryptedMessage: string, senderId?: string): Promise<string | null> {
        if (!ENABLE_E2EE) return null;
        try {
            // Legacy payloads with no recognised prefix are ignored silently
            if (!encryptedMessage.startsWith('nacl:') && !encryptedMessage.startsWith('rsa:')) {
                return null;
            }

            if (encryptedMessage.startsWith('rsa:')) return null; // legacy unsupported

            // Handle nacl prefix
            if (encryptedMessage.startsWith('nacl:')) {
                if (!this.naclKeyPair) {
                    console.error('NaCl keys not available');
                    return null;
                }
                const data = decodeBase64(encryptedMessage.slice(5));
                const nonce = data.slice(0, 24);
                const cipher = data.slice(24);
                let senderPub: Uint8Array;
                if (senderId) {
                    const key = await this.getPublicKey(senderId);
                    if (!key) {
                        console.error('Sender public key not found');
                        return null;
                    }
                    senderPub = key as Uint8Array;
                } else {
                    senderPub = this.naclKeyPair.publicKey;
                }
                const plain = nacl.box.open(cipher, nonce, senderPub, this.naclKeyPair.secretKey);
                if (!plain) return null;
                return new TextDecoder().decode(plain);
            }

            // Assume RSA
            if (!this.keyPair?.privateKey) {
                console.error('Private key not available for decryption');
                return null;
            }
            const encryptedBytes = Uint8Array.from(atob(encryptedMessage), c => c.charCodeAt(0));
            const decrypted = await window.crypto.subtle.decrypt({ name: 'RSA-OAEP' }, this.keyPair.privateKey, encryptedBytes);
            return new TextDecoder().decode(decrypted);
        } catch (error) {
            console.error('Error decrypting message:', error);
            return null;
        }
    }

    // Check if encryption is available and initialized
    isEncryptionAvailable(): boolean {
        return ENABLE_E2EE && this.naclKeyPair !== null;
    }

    // Get current user's public key (for sharing)
    async getCurrentUserPublicKey(): Promise<string | null> {
        const user = auth.currentUser;
        if (!user) return null;
        try {
            if (this.naclKeyPair?.publicKey) {
                return encodeBase64(this.naclKeyPair.publicKey);
            }
            return null;
        } catch (error) {
            console.error('Error exporting current user public key:', error);
            return null;
        }
    }

    // Check if a user has encryption enabled
    async hasEncryptionEnabled(userId: string): Promise<boolean> {
        try {
            const keyDoc = doc(db, 'userKeys', userId);
            const keySnap = await getDoc(keyDoc);
            return keySnap.exists();
        } catch (error) {
            console.error('Error checking encryption status:', error);
            return false;
        }
    }

    // Clear local keys (for logout/security)
    clearLocalKeys(): void {
        const user = auth.currentUser;
        if (user) {
            localStorage.removeItem(`privateKey_${user.uid}`);
            localStorage.removeItem(`publicKey_${user.uid}`);
            localStorage.removeItem(`naclSecret_enc_${user.uid}`);
            localStorage.removeItem(`naclSecret_iv_${user.uid}`);
            localStorage.removeItem(`naclSecret_${user.uid}`);
            localStorage.removeItem(`naclPublic_${user.uid}`);
            localStorage.removeItem('naclWrappingKey_raw');
        }
        this.keyPair = null;
        this.naclKeyPair = null;
        this.publicKeyCache.clear();
    }

    private async getKeyAlgorithm(userId: string): Promise<'rsa' | 'nacl'> {
        const keyDoc = doc(db, 'userKeys', userId);
        const snap = await getDoc(keyDoc);
        if (snap.exists()) {
            const data: any = snap.data();
            return data.algorithm === 'nacl' ? 'nacl' : 'rsa';
        }
        return 'rsa';
    }
}

// Convenience function to get the encryption service instance
export const getEncryptionService = () => EncryptionService.getInstance(); 