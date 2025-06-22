"use client";

import { useState, useEffect } from 'react';
import { auth, db } from '@/firebase/clientApp';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, enableNetwork, disableNetwork } from 'firebase/firestore';

export default function TestFirebase() {
  const [status, setStatus] = useState('🔄 Testing Firebase connection...');
  const [authStatus, setAuthStatus] = useState('❓ Checking auth...');
  const [firestoreStatus, setFirestoreStatus] = useState('❓ Checking Firestore...');
  const [networkStatus, setNetworkStatus] = useState('❓ Checking network...');
  const [user, setUser] = useState<any>(null);
  const [isOnline, setIsOnline] = useState(false); // Default to false, will be updated in useEffect

  useEffect(() => {
    console.log('🧪 Starting Firebase tests...');
    
    // Initialize online status (only available in browser)
    if (typeof navigator !== 'undefined') {
      setIsOnline(navigator.onLine);
      setNetworkStatus(navigator.onLine ? '✅ Browser is online' : '❌ Browser is offline');
    }
    
    // Test network connectivity
    const updateOnlineStatus = () => {
      if (typeof navigator !== 'undefined') {
        setIsOnline(navigator.onLine);
        setNetworkStatus(navigator.onLine ? '✅ Browser is online' : '❌ Browser is offline');
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('online', updateOnlineStatus);
      window.addEventListener('offline', updateOnlineStatus);
    }
    
    // Test Auth
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthStatus(`✅ Auth connected - User: ${user.email}`);
        setUser(user);
      } else {
        setAuthStatus('✅ Auth connected - No user signed in');
      }
    });

    // Test Firestore
    testFirestore();

    return () => {
      unsubscribe();
      if (typeof window !== 'undefined') {
        window.removeEventListener('online', updateOnlineStatus);
        window.removeEventListener('offline', updateOnlineStatus);
      }
    };
  }, []);

  const testFirestore = async () => {
    try {
      setFirestoreStatus('🔄 Testing Firestore connection...');
      
      // First, try to enable network
      await enableNetwork(db);
      
      // Try to read a test document
      const testDoc = doc(db, 'test', 'connectivity');
      const docSnap = await getDoc(testDoc);
      
      setFirestoreStatus('✅ Firestore connected successfully');
      setStatus('✅ All Firebase services connected!');
    } catch (error: any) {
      let errorDetails = '';
      
      if (error.code === 'unavailable') {
        errorDetails = 'Firestore service is temporarily unavailable';
      } else if (error.code === 'permission-denied') {
        errorDetails = 'Permission denied - check Firestore rules';
      } else if (error.message?.includes('offline')) {
        errorDetails = 'Firestore client is offline';
      } else {
        errorDetails = error.message || 'Unknown error';
      }
      
      setFirestoreStatus(`❌ Firestore error: ${errorDetails}`);
      setStatus('❌ Firebase connection issues detected');
      console.error('Firestore test error:', error);
    }
  };

  const forceReconnect = async () => {
    setFirestoreStatus('🔄 Forcing Firestore reconnection...');
    try {
      await disableNetwork(db);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await enableNetwork(db);
      testFirestore();
    } catch (error) {
      console.error('Force reconnect failed:', error);
      setFirestoreStatus('❌ Force reconnect failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Firebase Connectivity Test</h1>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Overall Status</h2>
            <p className="text-lg">{status}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Network Status</h2>
            <p className="text-lg">{networkStatus}</p>
            <div className="mt-2 text-sm text-gray-600">
              <p>Browser online: {isOnline ? 'Yes' : 'No'}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Firebase Auth</h2>
            <p className="text-lg">{authStatus}</p>
            {user && (
              <div className="mt-2 text-sm text-gray-600">
                <p>UID: {user.uid}</p>
                <p>Email: {user.email}</p>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Firebase Firestore</h2>
            <p className="text-lg">{firestoreStatus}</p>
            <button 
              onClick={forceReconnect}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Force Reconnect
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Environment Info</h2>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Project ID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}</p>
              <p>Auth Domain: {process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}</p>
              <p>Environment: {process.env.NODE_ENV}</p>
              <p>Current URL: {typeof window !== 'undefined' ? window.location.href : 'Server'}</p>
              <p>User Agent: {typeof navigator !== 'undefined' ? navigator.userAgent.substring(0, 50) + '...' : 'N/A'}</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Instructions:</strong> If you see any ❌ errors, check the browser console for detailed error messages.
              Make sure you're accessing the app on <strong>http://localhost:3000</strong> (not 3001 or other ports).
              If Firestore shows offline errors, try the "Force Reconnect" button or refresh the page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 