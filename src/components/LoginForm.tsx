"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/clientApp';
import { getUserProfile } from '../services/userService';

export default function LoginForm() {
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
    if (!auth) {
      setError('Authentication is not initialized');
      return;
    }

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
    
    if (!auth) {
      setError('Authentication is not initialized');
      return;
    }
    
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
    const baseClasses = "w-full px-5 py-3.5 bg-[#f8f5ec] border border-[#e8e1d1] rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500";
    
    if (touchedFields[fieldName] && customValidation[fieldName]) {
      return `${baseClasses} border-red-300 bg-red-50`;
    }
    
    return baseClasses;
  };

  return (
    <>
      {/* Error message */}
      {error && (
        <div className="mb-6 p-3 bg-red-50 text-red-700 text-sm rounded-md">
          {error}
        </div>
      )}

      {/* Login form */}
      <form onSubmit={handleSubmit} className="space-y-4 w-full" noValidate>
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
            className="w-full flex items-center justify-center px-4 py-3.5 bg-[#1a1a19] text-white rounded-md hover:bg-[#2a2a29] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            disabled={isLoading}
          >
            {isLoading ? (
              "Signing in..."
            ) : (
              <div className="flex items-center">
                <span className="mr-2">→</span>
                <span>Enter the Thoughtspace</span>
              </div>
            )}
          </button>
        </div>

        <div className="flex justify-between pt-2 text-slate-700 text-sm">
          <Link href="/forgot-password" className="hover:text-slate-900">
            Forgot password?
          </Link>
          <Link href="/register" className="hover:text-slate-900">
            Create account
          </Link>
        </div>
      </form>

      {/* Social login options */}
      <div className="mt-8 space-y-3">
        <button 
          className="w-full flex items-center justify-center px-4 py-3 border border-[#e8e1d1] bg-[#f8f5ec] rounded-md hover:bg-[#f0ece3] transition-colors"
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
      </div>
    </>
  );
} 