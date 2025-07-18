"use client";

import Link from 'next/link';

export default function EmailVerified() {
  return (
    <div className="min-h-screen bg-[#f5efe0] flex">
      {/* Left content area */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="w-full max-w-sm mx-auto px-6 md:px-0 md:ml-20 xl:ml-32">
          {/* Logo and tagline */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-normal text-slate-900">Journalite</h1>
            <div className="mt-4 text-lg md:text-xl text-slate-800 italic">
              <p>Your email has been verified.</p>
              <p>Welcome to Oriteria.</p>
            </div>
          </div>

          {/* Success message */}
          <div className="w-full">
            <div className="mb-8 text-slate-800">
              <p className="mb-2 font-medium">Email verified successfully!</p>
              <p>Your email address has been confirmed. You can now use all features of your Journalite account.</p>
            </div>
            <Link 
              href="/login" 
              className="inline-flex items-center px-5 py-3.5 bg-[#1a1a19] text-white rounded-md hover:bg-[#2a2a29] focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              <span className="mr-2">→</span>
              <span>Go to login</span>
            </Link>
          </div>

          {/* Bottom tagline */}
          <div className="mt-20 mb-8 text-slate-700 italic">
            <p>Words are the threads of thought.</p>
          </div>
        </div>
      </div>

      {/* Right image area - converted to background div */}
      <div className="hidden md:block w-1/2 relative bg-gradient-to-br from-amber-50 to-stone-100">
        {/* Custom SVG Pattern Background */}
        <svg
          className="absolute inset-0 w-full h-full object-cover"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fefbf3" />
              <stop offset="100%" stopColor="#f5f5f0" />
            </linearGradient>
            <pattern id="gridPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e7e5e4" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          
          {/* Background */}
          <rect width="800" height="600" fill="url(#bgGradient)" />
          <rect width="800" height="600" fill="url(#gridPattern)" />
          
          {/* Abstract geometric shapes representing creativity and writing */}
          <circle cx="150" cy="120" r="60" fill="#f59e0b" opacity="0.1" />
          <circle cx="650" cy="480" r="80" fill="#d97706" opacity="0.08" />
          
          {/* Floating writing elements */}
          <g opacity="0.15">
            <rect x="200" y="200" width="180" height="6" rx="3" fill="#92400e" />
            <rect x="200" y="220" width="120" height="4" rx="2" fill="#92400e" />
            <rect x="200" y="235" width="160" height="4" rx="2" fill="#92400e" />
            <rect x="200" y="250" width="90" height="4" rx="2" fill="#92400e" />
          </g>
          
          <g opacity="0.12">
            <rect x="450" y="150" width="200" height="6" rx="3" fill="#78716c" />
            <rect x="450" y="170" width="140" height="4" rx="2" fill="#78716c" />
            <rect x="450" y="185" width="180" height="4" rx="2" fill="#78716c" />
            <rect x="450" y="200" width="110" height="4" rx="2" fill="#78716c" />
          </g>
          
          {/* Feather pen illustration */}
          <g transform="translate(300, 350)" opacity="0.1">
            <path d="M0 0 Q10 -5 20 0 Q15 10 10 20 Q5 15 0 10 Z" fill="#a16207" />
            <path d="M20 0 L80 -40 Q85 -45 90 -40 L85 -35 L25 5 Z" fill="#d97706" />
            <line x1="25" y1="5" x2="40" y2="-15" stroke="#92400e" strokeWidth="1" />
            <line x1="35" y1="-5" x2="50" y2="-25" stroke="#92400e" strokeWidth="1" />
            <line x1="45" y1="-15" x2="60" y2="-35" stroke="#92400e" strokeWidth="1" />
          </g>
          
          {/* Decorative dots */}
          <circle cx="100" cy="300" r="3" fill="#d97706" opacity="0.2" />
          <circle cx="120" cy="320" r="2" fill="#f59e0b" opacity="0.3" />
          <circle cx="700" cy="100" r="4" fill="#92400e" opacity="0.15" />
          <circle cx="720" cy="130" r="2" fill="#a16207" opacity="0.25" />
          
          {/* Abstract book/journal shapes */}
          <g transform="translate(500, 350)" opacity="0.08">
            <rect x="0" y="0" width="80" height="100" rx="4" fill="#78716c" />
            <rect x="10" y="10" width="60" height="80" rx="2" fill="#a8a29e" />
            <rect x="15" y="20" width="50" height="3" rx="1.5" fill="#78716c" />
            <rect x="15" y="30" width="35" height="2" rx="1" fill="#78716c" />
            <rect x="15" y="37" width="40" height="2" rx="1" fill="#78716c" />
          </g>
        </svg>
        
        {/* Overlay gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-stone-100/40"></div>
      </div>
    </div>
  );
} 