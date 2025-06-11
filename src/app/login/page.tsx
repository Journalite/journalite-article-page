"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/clientApp';
import { getUserProfile } from '../../services/userService';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/clientApp';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [customValidation, setCustomValidation] = useState<Record<string, string>>({});
  
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value, validity } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
    
    // Clear previous validation message
    setCustomValidation({ ...customValidation, [name]: '' });
    
    // Add a custom validation message if empty
    if (validity.valueMissing) {
      setCustomValidation({ 
        ...customValidation, 
        [name]: name === 'email' ? 'Please enter your email address' : 'Please enter your password' 
      });
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setIsLoading(true);
      setError('');
      
      const result = await signInWithPopup(auth, provider);
      if (process.env.NODE_ENV === 'development') {
        console.log('Google sign-in successful', '[USER_LOGGED_IN]');
      }
      
      // Check if user has a profile setup
      if (result.user) {
        const profileRef = doc(db, 'profiles', result.user.uid);
        const profileSnap = await getDoc(profileRef);
        
        if (!profileSnap.exists()) {
          // Redirect to profile setup
          const redirectUrl = searchParams?.get('redirect') || '/';
          router.push(`/profile-setup?redirect=${encodeURIComponent(redirectUrl)}`);
        } else {
          // Redirect to intended destination
          const redirectUrl = searchParams?.get('redirect') || '/';
          router.push(redirectUrl);
        }
      }
    } catch (err: any) {
      console.error('Google sign-in failed', err);
      
      // Handle specific errors with user-friendly messages
      if (err.code === 'auth/account-exists-with-different-credential') {
        setError('An account already exists with the same email address but different sign-in credentials. Please sign in using the original method.');
      } else if (err.code === 'auth/popup-closed-by-user') {
        setError('Sign-in was cancelled');
      } else if (err.code === 'auth/network-request-failed') {
        setError('Network error. Please check your internet connection and try again.');
      } else {
        setError('Failed to sign in with Google. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          newValidation[el.name] = el.name === 'email' 
            ? 'Please enter your email address' 
            : 'Please enter your password';
          isValid = false;
        }
      }
    });
    
    setTouchedFields({ ...touchedFields, ...newTouchedFields });
    setCustomValidation({ ...customValidation, ...newValidation });
    
    if (!isValid) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      // Firebase Auth login
      await signInWithEmailAndPassword(auth, email, password);
      
      // Redirect to homepage on successful login
      router.push('/');
    } catch (err: unknown) {
      setError('Invalid email or password. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Show validation styling only if field is touched
  const getInputClasses = (fieldName: string) => {
    const baseClasses = "w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg shadow-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-amber-500 focus:border-amber-500 placeholder-neutral-400 text-neutral-700";
    
    if (touchedFields[fieldName] && customValidation[fieldName]) {
      return `${baseClasses} border-red-400 focus:ring-red-400 focus:border-red-400 bg-red-50 text-red-700 placeholder-red-400`;
    }
    
    return `${baseClasses} hover:border-neutral-400`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-100 flex font-sans">
      {/* Left content area */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
        <div className="w-full max-w-md mx-auto">
          {/* Logo and tagline */}
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-stone-800">Journalite</h1>
            <div className="mt-3 text-lg text-stone-600">
              <p>Welcome back. Your thoughts await.</p>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-3.5 bg-red-100 text-red-700 text-sm rounded-lg border border-red-200 transition-all duration-300 ease-in-out animate-fadeIn">
              {error}
            </div>
          )}

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-5 w-full" noValidate>
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
              <input
                id="password"
                name="password"
                type="password"
                className={getInputClasses('password')}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handleBlur}
                required
              />
              {touchedFields.password && customValidation.password && (
                <p className="mt-1 text-sm text-red-500">{customValidation.password}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-3.5 bg-stone-800 text-white rounded-lg shadow-md hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 ease-in-out transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <div className="flex items-center">
                    <span className="mr-2">→</span>
                    <span>Enter the Thoughtspace</span>
                  </div>
                )}
              </button>
            </div>

            <div className="flex justify-between items-center pt-1">
                <Link href="/forgot-password" className="text-sm text-amber-600 hover:text-amber-700 hover:underline transition-colors duration-150">
                    Forgot password?
                </Link>
            </div>

            <div className="pt-2 text-center text-sm text-stone-600">
              <span className="mr-1.5">Don't have an account?</span>
              <Link href="/register" className="font-medium text-amber-600 hover:text-amber-700 hover:underline transition-colors duration-150">
                Create one
              </Link>
            </div>
          </form>

          {/* Social login options */}
          <div className="mt-8 space-y-4">
             <p className="text-center text-xs text-stone-500">OR</p>
            <button 
              className="w-full flex items-center justify-center px-4 py-3 border border-stone-300 bg-white text-stone-700 rounded-lg shadow-sm hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 ease-in-out transform hover:scale-[1.01] active:scale-[0.99]"
              onClick={handleGoogleSignIn}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-slate-800">Continue with Google</span>
            </button>
            
            <button 
              className="w-full flex items-center justify-center px-4 py-3 border border-[#e8e1d1] bg-[#f8f5ec] rounded-md hover:bg-[#f0ece3] transition-colors"
              onClick={() => {
                if (process.env.NODE_ENV === 'development') {
                  console.log('Instagram login');
                }
              }}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" fill="url(#paint0_radial)"/>
                <path d="M12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" fill="#fff"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="#fff"/>
                <defs>
                  <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -23.0951 21.4696 0 12 23.9773)">
                    <stop stopColor="#FFDD55"/>
                    <stop offset=".1" stopColor="#FFDD55"/>
                    <stop offset=".5" stopColor="#FF543E"/>
                    <stop offset="1" stopColor="#C837AB"/>
                  </radialGradient>
                </defs>
              </svg>
              <span className="text-slate-800">Continue with Instagram</span>
            </button>
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