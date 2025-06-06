'use client'

import React, { useState } from 'react';
import { auth, db } from '@/firebase/clientApp';
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const FirestoreTest: React.FC = () => {
  const [user] = useAuthState(auth);
  const [testResult, setTestResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const testFirestore = async () => {
    setIsLoading(true);
    setTestResult('');
    
    try {
      console.log('🧪 Starting Firestore test...');
      console.log('👤 Current user:', user?.uid);
      
      if (!user) {
        setTestResult('❌ No user logged in');
        return;
      }

      // Test reading a document
      const testDocRef = doc(db, 'articles', 'test-doc-id');
      console.log('📄 Testing document read...');
      
      const docSnap = await getDoc(testDocRef);
      console.log('📖 Document exists:', docSnap.exists());
      
      if (docSnap.exists()) {
        console.log('📋 Document data:', docSnap.data());
        setTestResult(`✅ Document read successful. Data: ${JSON.stringify(docSnap.data(), null, 2)}`);
        
        // Test updating the document
        console.log('✏️ Testing document update...');
        await updateDoc(testDocRef, { 
          testLikes: arrayUnion(user.uid),
          lastTested: new Date().toISOString()
        });
        console.log('✅ Document update successful');
        setTestResult(prev => prev + '\n✅ Document update successful');
        
      } else {
        setTestResult('❌ Test document does not exist');
      }
      
    } catch (error: any) {
      console.error('💥 Firestore test failed:', error);
      setTestResult(`❌ Test failed: ${error.message}\nCode: ${error.code}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #ccc', 
      borderRadius: '8px',
      margin: '20px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>🧪 Firestore Connection Test</h3>
      <p>User: {user ? user.email : 'Not logged in'}</p>
      
      <button 
        onClick={testFirestore}
        disabled={isLoading || !user}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '10px'
        }}
      >
        {isLoading ? 'Testing...' : 'Test Firestore'}
      </button>
      
      {testResult && (
        <pre style={{ 
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          whiteSpace: 'pre-wrap',
          fontSize: '12px'
        }}>
          {testResult}
        </pre>
      )}
    </div>
  );
};

export default FirestoreTest; 