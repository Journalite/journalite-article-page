'use client'

import React, { useState, useEffect } from 'react';
import { guardianService } from '@/services/guardianService';

export default function TestGuardianPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    async function testAPI() {
      try {
        if (!guardianService.isConfigured()) {
          setStatus('error');
          setMessage('Guardian API key not configured. Please add NEXT_PUBLIC_GUARDIAN_API_KEY to your .env.local file.');
          return;
        }

        // Test with a simple search
        const data = await guardianService.searchArticles('technology', undefined, 1, 5);
        
        setStatus('success');
        setMessage(`✅ Guardian API working! Found ${data.total} articles.`);
        setArticles(data.results.slice(0, 3)); // Show first 3 for testing
        
      } catch (error) {
        setStatus('error');
        setMessage(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    testAPI();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Guardian API Test</h1>
        
        <div className={`p-6 rounded-lg mb-8 ${
          status === 'loading' ? 'bg-blue-100 text-blue-800' :
          status === 'success' ? 'bg-green-100 text-green-800' :
          'bg-red-100 text-red-800'
        }`}>
          {status === 'loading' && '🔄 Testing Guardian API connection...'}
          <p className="font-semibold">{message}</p>
        </div>

        {status === 'success' && articles.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sample Articles:</h2>
            <div className="space-y-4">
              {articles.map((article) => (
                <div key={article.id} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {article.fields?.headline || article.webTitle}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Section: {article.sectionName} | Published: {new Date(article.webPublicationDate).toLocaleDateString()}
                  </p>
                  {article.fields?.standfirst && (
                    <p className="text-gray-700 text-sm">{article.fields.standfirst}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Troubleshooting Steps:</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Make sure you've created a <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code> file in your project root</li>
              <li>Add your API key: <code className="bg-gray-100 px-2 py-1 rounded">NEXT_PUBLIC_GUARDIAN_API_KEY=your_key_here</code></li>
              <li>Restart your development server: <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code></li>
              <li>Make sure your API key is valid (test it at <a href="https://open-platform.theguardian.com/" target="_blank" className="text-blue-600 hover:underline">Guardian Open Platform</a>)</li>
            </ol>
          </div>
        )}

        <div className="mt-8 text-center">
          <a 
            href="/guardian-news" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Guardian News Page
          </a>
        </div>
      </div>
    </div>
  );
} 