"use client";

import { useState } from 'react';
import Link from 'next/link';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/clientApp';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [customValidation, setCustomValidation] = useState<Record<string, string>>({});

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
      // Send password reset email using Firebase
      if (!auth) {
        throw new Error('Firebase auth is not initialized');
      }
      await sendPasswordResetEmail(auth, email);
      
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
    <>
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
          </form>
        </>
      )}
    </>
  );
} 