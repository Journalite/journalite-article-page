"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type AuthLayoutProps = {
  children: React.ReactNode;
  showLogo?: boolean;
  title?: string;
  description?: string;
};

export default function AuthLayout({ children, showLogo = true, title, description }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-blue-100 animate-gradient">
      {/* Top navigation */}
      <nav className="px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-xl font-bold text-blue-900">Oriteria</span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link 
            href="/login" 
            className="text-sm text-blue-900 hover:text-blue-700 font-medium"
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="text-sm bg-white px-4 py-1.5 rounded-lg shadow-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Sign Up
          </Link>
        </div>
      </nav>
      
      {/* Main content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {showLogo && (
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                <span className="text-2xl font-bold">O</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">Oriteria</h1>
              <p className="text-slate-600 mt-1">Your trusted source for news</p>
            </div>
          )}
          
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h1 className="text-2xl font-bold text-slate-900">Oriteria</h1>
              </div>
              <h2 className="text-xl font-semibold text-slate-700 mb-2">{title}</h2>
              <p className="text-slate-600">{description}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="p-4 text-center text-sm text-slate-600">
        <div className="mb-2">
          <Link href="/terms" className="hover:text-blue-700 mx-2">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-blue-700 mx-2">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-blue-700 mx-2">Contact Us</Link>
        </div>
        <p>© {new Date().getFullYear()} Oriteria. All rights reserved.</p>
      </footer>
    </div>
  );
} 