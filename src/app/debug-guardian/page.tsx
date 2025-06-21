'use client'

import React, { useState, useEffect } from 'react';
import { guardianService } from '@/services/guardianService';

export default function DebugGuardianPage() {
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSampleArticle = async () => {
    try {
      setLoading(true);
      setError('');
      
      const data = await guardianService.searchArticles('', 'sport', 1, 1);
      if (data.results.length > 0) {
        setArticle(data.results[0]);
      } else {
        setError('No articles found');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (guardianService.isConfigured()) {
      fetchSampleArticle();
    }
  }, []);

  if (!guardianService.isConfigured()) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Guardian API Debug</h1>
        <p className="text-red-600">Guardian API not configured. Please add your API key.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Guardian API Debug</h1>
      
      <button 
        onClick={fetchSampleArticle}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch Sample Article'}
      </button>

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded">
          Error: {error}
        </div>
      )}

      {article && (
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Article Title:</h2>
            <p>{article.webTitle}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Available Fields:</h2>
            <pre className="text-sm overflow-auto">
              {JSON.stringify(Object.keys(article.fields || {}), null, 2)}
            </pre>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Body Content (first 500 chars):</h2>
            <pre className="text-sm overflow-auto whitespace-pre-wrap">
              {article.fields?.body ? article.fields.body.substring(0, 500) + '...' : 'No body content'}
            </pre>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Main Image:</h2>
            <p>{article.fields?.main || 'No main image'}</p>
            {article.fields?.main && (
              <img src={article.fields.main} alt="Main" className="mt-2 max-w-xs" />
            )}
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Elements:</h2>
            <pre className="text-sm overflow-auto">
              {JSON.stringify(article.elements || [], null, 2)}
            </pre>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Full Article Object:</h2>
            <pre className="text-xs overflow-auto max-h-96">
              {JSON.stringify(article, null, 2)}
            </pre>
          </div>

          <div className="bg-blue-100 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Rendered HTML Preview:</h2>
            <div className="border p-4 bg-white">
              <div dangerouslySetInnerHTML={{ 
                __html: guardianService.convertToArticleFormat(article).html 
              }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 