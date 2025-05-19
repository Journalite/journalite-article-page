"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/clientApp';
import { getUserProfile } from '../../services/userService';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [customValidation, setCustomValidation] = useState<Record<string, string>>({});
  
  const router = useRouter();

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
      console.log('Google sign-in successful', result.user);
      
      // Check if user has a profile
      const profile = await getUserProfile(result.user.uid);
      
      // If no profile exists, redirect to profile setup
      if (!profile) {
        router.push('/profile-setup');
        return;
      }
      
      // User has a profile, redirect to home
      router.push('/');
    } catch (err: any) {
      console.error('Google sign-in failed', err);
      
      // Handle specific errors with user-friendly messages
      if (err.code === 'auth/account-exists-with-different-credential') {
        setError('An account already exists with the same email address but different sign-in credentials. Please sign in using the original method.');
      } else if (err.code === 'auth/popup-closed-by-user') {
        setError('Sign-in was cancelled. Please try again.');
      } else if (err.code === 'auth/network-request-failed') {
        setError('Network error. Please check your internet connection and try again.');
      } else {
        setError('Google sign-in failed. Please try again or use email sign-in.');
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
              onClick={() => console.log('Instagram login')}
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
      <div className="hidden md:block w-1/2 relative bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("/images/login.png")',
        }}
        aria-hidden="true"
      >
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30"></div> */}
      </div>
    </div>
  );
} 