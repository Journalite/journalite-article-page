"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';

function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [actionCode, setActionCode] = useState('');
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [customValidation, setCustomValidation] = useState<Record<string, string>>({});
  
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the oobCode (action code) and mode from the URL
    const oobCode = searchParams?.get('oobCode');
    const mode = searchParams?.get('mode');
    
    // Also check for apiKey and other parameters Firebase might send
    if (!oobCode) {
      setVerifying(false);
      setError('Invalid password reset link. Please request a new one.');
      return;
    }

    // Verify the action code
    const verifyCode = async () => {
      try {
        setActionCode(oobCode);
        // Verify the password reset code is valid
        const email = await verifyPasswordResetCode(auth, oobCode);
        setEmail(email);
        setVerifying(false);
      } catch (err) {
        console.error('Error verifying reset code:', err);
        setVerifying(false);
        setError('This password reset link has expired or is invalid. Please request a new one.');
      }
    };

    verifyCode();
  }, [searchParams]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, validity } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
    
    // Clear previous validation message
    setCustomValidation({ ...customValidation, [name]: '' });
    
    // Add a custom validation message if empty
    if (validity.valueMissing) {
      setCustomValidation({ 
        ...customValidation, 
        [name]: name === 'newPassword' ? 'Please enter a new password' : 'Please confirm your password'
      });
    }
  };

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
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
          newValidation[el.name] = el.name === 'newPassword' 
            ? 'Please enter a new password' 
            : 'Please confirm your password';
          isValid = false;
        }
      }
    });
    
    // Check if passwords match
    if (newPassword !== confirmPassword) {
      newValidation.confirmPassword = 'Passwords do not match';
      isValid = false;
    }
    
    // Check password length
    if (newPassword && newPassword.length < 6) {
      newValidation.newPassword = 'Password must be at least 6 characters';
      isValid = false;
    }
    
    setTouchedFields({ ...touchedFields, ...newTouchedFields });
    setCustomValidation({ ...customValidation, ...newValidation });
    
    if (!isValid) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      // Reset the password
      await confirmPasswordReset(auth, actionCode, newPassword);
      setSuccess(true);
    } catch (err: any) {
      console.error('Error resetting password:', err);
      setError('Failed to reset password. The link may have expired. Please try requesting a new link.');
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

          {/* Loading state */}
          {verifying && (
            <div className="text-slate-800">
              Verifying your reset link...
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-700 text-sm rounded-md">
              {error}
            </div>
          )}

          {/* Success message */}
          {success ? (
            <div className="w-full">
              <div className="mb-8 text-slate-800">
                <p className="mb-2 font-medium">Password successfully reset!</p>
                <p>Your password has been updated. You can now sign in with your new password.</p>
              </div>
              <Link 
                href="/login" 
                className="inline-flex items-center px-5 py-3.5 bg-[#1a1a19] text-white rounded-md hover:bg-[#2a2a29] focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <span className="mr-2">→</span>
                <span>Go to login</span>
              </Link>
            </div>
          ) : !verifying && !error && (
            <>
              {/* Reset form */}
              <form onSubmit={handleResetPassword} className="space-y-4 w-full" noValidate>
                {email && (
                  <div className="mb-4 text-slate-800">
                    Reset password for: <span className="font-medium">{email}</span>
                  </div>
                )}
                
                <div>
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    className={getInputClasses('newPassword')}
                    placeholder="New password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    onBlur={handleBlur}
                    required
                  />
                  {touchedFields.newPassword && customValidation.newPassword && (
                    <p className="mt-1 text-sm text-red-500">{customValidation.newPassword}</p>
                  )}
                </div>

                <div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className={getInputClasses('confirmPassword')}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={handleBlur}
                    required
                  />
                  {touchedFields.confirmPassword && customValidation.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">{customValidation.confirmPassword}</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-3.5 bg-[#1a1a19] text-white rounded-md hover:bg-[#2a2a29] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Resetting password..."
                    ) : (
                      <div className="flex items-center">
                        <span className="mr-2">→</span>
                        <span>Reset password</span>
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

// Wrap the component with Suspense boundary
export default function ResetPassword() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f5efe0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-normal text-slate-900 mb-4">Journalite</h1>
          <p className="text-slate-700">Loading reset password page...</p>
        </div>
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  );
} 