"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [customValidation, setCustomValidation] = useState<Record<string, string>>({});
  
  const router = useRouter();

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, validity } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
    
    // Clear previous validation message
    setCustomValidation({ ...customValidation, [name]: '' });
    
    // Add a custom validation message if empty
    if (validity.valueMissing) {
      setCustomValidation({ 
        ...customValidation, 
        [name]: 'Please enter your email address'
      });
    }
  };

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Mark all fields as touched on submit
    const form = e.currentTarget;
    const formElements = Array.from(form.elements) as HTMLInputElement[];
    
    const newTouchedFields: Record<string, boolean> = {};
    const newValidation: Record<string, string> = {};
    
    let isValid = true;
    
    formElements.forEach(el => {
      if (el.name && el.required) {
        newTouchedFields[el.name] = true;
        
        if (!el.value.trim()) {
          newValidation[el.name] = 'Please enter your email address';
          isValid = false;
        }
      }
    });
    
    setTouchedFields({ ...touchedFields, ...newTouchedFields });
    setCustomValidation({ ...customValidation, ...newValidation });
    
    if (!isValid) return;
    
    setIsLoading(true);
    setError('');
    setSuccess(false);
    
    try {
      // Configure action code settings for custom UI
      const actionCodeSettings = {
        // URL you want to redirect back to after password reset
        url: `${window.location.origin}/reset-password`,
        // Handle the link in the mobile app if installed
        handleCodeInApp: true
      };

      // Send password reset email using Firebase with actionCodeSettings
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      
      // Show success message
      setSuccess(true);
    } catch (err: any) {
      // Extract and display error message
      let errorMessage = 'Failed to send reset email. Please try again.';
      if (err.message) {
        if (err.message.includes('user-not-found')) {
          errorMessage = 'No account found with this email address.';
        } else if (err.message.includes('invalid-email')) {
          errorMessage = 'Please enter a valid email address.';
        }
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Show validation styling only if field is touched
  const getInputClasses = (fieldName: string) => {
    const baseClasses = "w-full px-5 py-3.5 bg-[#f8f5ec] border border-[#e8e1d1] rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500";
    
    if (touchedFields[fieldName] && customValidation[fieldName]) {
      return `${baseClasses} border-red-300 bg-red-50`;
    }
    
    return baseClasses;
  };

  return (
    <div className="min-h-screen bg-[#f5efe0] flex">
      {/* Left content area */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="w-full max-w-sm mx-auto px-6 md:px-0 md:ml-20 xl:ml-32">
          {/* Logo and tagline */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-normal text-slate-900">Journalite</h1>
            <div className="mt-4 text-lg md:text-xl text-slate-800 italic">
              <p>Reset your password to</p>
              <p>return to your Thoughtspace.</p>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-700 text-sm rounded-md">
              {error}
            </div>
          )}

          {success ? (
            <div className="w-full">
              <div className="mb-8 text-slate-800">
                We've sent a password reset link to <span className="font-medium">{email}</span>.
                Please check your inbox and follow the instructions.
              </div>
              <Link 
                href="/login" 
                className="inline-flex items-center px-5 py-3.5 bg-[#1a1a19] text-white rounded-md hover:bg-[#2a2a29] focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <span className="mr-2">→</span>
                <span>Return to login</span>
              </Link>
              
              {/* Admin note - only visible during development */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-8 p-4 bg-blue-50 text-blue-800 text-sm rounded-md">
                  <p className="font-medium mb-1">Note for Developers/Admins:</p>
                  <p className="mb-2">
                    To customize the email template design, go to the Firebase Console:
                  </p>
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>Navigate to Authentication &gt; Templates</li>
                    <li>Select "Password reset" template</li>
                    <li>Customize the email design, colors, and content</li>
                    <li>Update the action URL to point to your custom domain</li>
                  </ol>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Reset form */}
              <form onSubmit={handlePasswordReset} className="space-y-4 w-full" noValidate>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={getInputClasses('email')}
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleBlur}
                    required
                  />
                  {touchedFields.email && customValidation.email && (
                    <p className="mt-1 text-sm text-red-500">{customValidation.email}</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-3.5 bg-[#1a1a19] text-white rounded-md hover:bg-[#2a2a29] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Sending reset link..."
                    ) : (
                      <div className="flex items-center">
                        <span className="mr-2">→</span>
                        <span>Send password reset link</span>
                      </div>
                    )}
                  </button>
                </div>

                <div className="flex justify-center pt-2 text-sm text-slate-700">
                  <Link href="/login" className="hover:text-slate-900">
                    Return to login
                  </Link>
                </div>
              </form>
            </>
          )}

          {/* Bottom tagline */}
          <div className="mt-20 mb-8 text-slate-700 italic">
            <p>Words are the threads of thought.</p>
          </div>
        </div>
      </div>

      {/* Right image area - Custom SVG Background */}
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