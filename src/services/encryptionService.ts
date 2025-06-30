'use client'

import { auth, db } from '@/firebase/clientApp';
import { doc, setDoc, getDoc, collection, where, query, getDocs } from 'firebase/firestore';

// Encryption service for end-to-end encrypted messaging
export class EncryptionService {
    private static instance: EncryptionService;
    private keyPair: CryptoKeyPair | null = null;
    private publicKeyCache = new Map<string, CryptoKey>();

    private constructor() { }

    static getInstance(): EncryptionService {
        if (!EncryptionService.instance) {
            EncryptionService.instance = new EncryptionService();
        }
        return EncryptionService.instance;
    }

    // Generate a new key pair for the current user
    async generateKeyPair(): Promise<CryptoKeyPair> {
        const keyPair = await window.crypto.subtle.generateKey(
            {
                name: 'RSA-OAEP',
                modulusLength: 2048,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: 'SHA-256'
            },
            true, // extractable
            ['encrypt', 'decrypt']
        );

        this.keyPair = keyPair;
        return keyPair;
    }

    // Export public key to a format that can be stored
    async exportPublicKey(publicKey: CryptoKey): Promise<string> {
        const exported = await window.crypto.subtle.exportKey('spki', publicKey);
        const exportedAsBase64 = btoa(String.fromCharCode(...new Uint8Array(exported)));
        return exportedAsBase64;
    }

    // Import public key from stored format
    async importPublicKey(base64Key: string): Promise<CryptoKey> {
        const keyData = Uint8Array.from(atob(base64Key), c => c.charCodeAt(0));

        return await window.crypto.subtle.importKey(
            'spki',
            keyData,
            {
                name: 'RSA-OAEP',
                hash: 'SHA-256'
            },
            false,
            ['encrypt']
        );
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

    // Initialize encryption for current user
    async initializeEncryption(): Promise<boolean> {
        const user = auth.currentUser;
        if (!user) return false;

        try {
            // Try to load existing keys from localStorage
            const storedPrivateKey = localStorage.getItem(`privateKey_${user.uid}`);
            const storedPublicKey = localStorage.getItem(`publicKey_${user.uid}`);

            if (storedPrivateKey && storedPublicKey) {
                // Load existing keys
                const privateKey = await this.importPrivateKey(storedPrivateKey);
                const publicKey = await this.importPublicKey(storedPublicKey);

                this.keyPair = { privateKey, publicKey };
                return true;
            } else {
                // Generate new keys
                const keyPair = await this.generateKeyPair();

                // Store private key locally (never send to server)
                const exportedPrivateKey = await this.exportPrivateKey(keyPair.privateKey);
                localStorage.setItem(`privateKey_${user.uid}`, exportedPrivateKey);

                // Store public key locally for convenience
                const exportedPublicKey = await this.exportPublicKey(keyPair.publicKey);
                localStorage.setItem(`publicKey_${user.uid}`, exportedPublicKey);

                // Store public key on Firebase for others to use
                await this.storePublicKeyOnServer(user.uid, exportedPublicKey);

                return true;
            }
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
            updatedAt: new Date(),
            userId
        });
    }

    // Get another user's public key from Firebase
    async getPublicKey(userId: string): Promise<CryptoKey | null> {
        // Check cache first
        if (this.publicKeyCache.has(userId)) {
            return this.publicKeyCache.get(userId)!;
        }

        try {
            const keyDoc = doc(db, 'userKeys', userId);
            const keySnap = await getDoc(keyDoc);

            if (keySnap.exists()) {
                const keyData = keySnap.data();
                const publicKey = await this.importPublicKey(keyData.publicKey);

                // Cache the key
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
        try {
            const publicKey = await this.getPublicKey(recipientUserId);
            if (!publicKey) {
                console.error('Public key not found for user:', recipientUserId);
                return null;
            }

            // Convert message to bytes
            const messageBytes = new TextEncoder().encode(message);

            // Encrypt the message
            const encrypted = await window.crypto.subtle.encrypt(
                {
                    name: 'RSA-OAEP'
                },
                publicKey,
                messageBytes
            );

            // Convert to base64 for storage
            const encryptedBase64 = btoa(String.fromCharCode(...new Uint8Array(encrypted)));
            return encryptedBase64;
        } catch (error) {
            console.error('Error encrypting message:', error);
            return null;
        }
    }

    // Decrypt a received message
    async decryptMessage(encryptedMessage: string): Promise<string | null> {
        try {
            if (!this.keyPair?.privateKey) {
                console.error('Private key not available for decryption');
                return null;
            }

            // Convert from base64
            const encryptedBytes = Uint8Array.from(atob(encryptedMessage), c => c.charCodeAt(0));

            // Decrypt the message
            const decrypted = await window.crypto.subtle.decrypt(
                {
                    name: 'RSA-OAEP'
                },
                this.keyPair.privateKey,
                encryptedBytes
            );

            // Convert back to string
            const decryptedMessage = new TextDecoder().decode(decrypted);
            return decryptedMessage;
        } catch (error) {
            console.error('Error decrypting message:', error);
            return null;
        }
    }

    // Check if encryption is available and initialized
    isEncryptionAvailable(): boolean {
        return (
            typeof window !== 'undefined' &&
            'crypto' in window &&
            'subtle' in window.crypto &&
            this.keyPair !== null
        );
    }

    // Get current user's public key (for sharing)
    async getCurrentUserPublicKey(): Promise<string | null> {
        const user = auth.currentUser;
        if (!user || !this.keyPair?.publicKey) return null;

        try {
            return await this.exportPublicKey(this.keyPair.publicKey);
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
        }
        this.keyPair = null;
        this.publicKeyCache.clear();
    }
}

// Convenience function to get the encryption service instance
export const getEncryptionService = () => EncryptionService.getInstance(); 