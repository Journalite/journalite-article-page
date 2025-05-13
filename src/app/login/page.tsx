"use client";

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the component that uses Firebase with no SSR
const LoginForm = dynamic(
  () => import('@/components/LoginForm'),
  { ssr: false }
);

export default function Login() {
  return (
    <div className="min-h-screen bg-[#f5efe0] flex">
      {/* Left content area */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="w-full max-w-sm mx-auto px-6 md:px-0 md:ml-20 xl:ml-32">
          {/* Logo and tagline */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-normal text-slate-900">Journalite</h1>
            <div className="mt-4 text-lg md:text-xl text-slate-800 italic">
              <p>Every thought has a doorway.</p>
              <p>This is yours.</p>
            </div>
          </div>

          <LoginForm />

          {/* Registration link */}
          <div className="flex justify-center pt-8 text-slate-700 text-sm">
            <span className="mr-2">Don't have an account?</span>
            <Link href="/register" className="hover:text-slate-900">
              Sign up
            </Link>
          </div>

          {/* Bottom tagline */}
          <div className="mt-20 mb-8 text-slate-700 italic">
            <p>Words are the threads of thought.</p>
          </div>
        </div>
      </div>

      {/* Right image area - converted to background div */}
      <div className="hidden md:block w-1/2 relative bg-[#f5efe0]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: 'url("/images/login.png")',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
} 