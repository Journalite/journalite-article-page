"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { updateProfile } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/clientApp';
import { getUserProfile, isUsernameTaken, createUserProfile } from '../../services/userService';
import Link from 'next/link';

export default function MyProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [originalUsername, setOriginalUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [customValidation, setCustomValidation] = useState<Record<string, string>>({});
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [currentUserUid, setCurrentUserUid] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string>('');
  
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUserUid(user.uid);
        setUserEmail(user.email || '');
        
        // Try to get existing profile
        try {
          const profile = await getUserProfile(user.uid);
          if (profile) {
            setFirstName(profile.firstName);
            setLastName(profile.lastName);
            setUsername(profile.username);
            setOriginalUsername(profile.username);
            // No need to check username initially as user already owns this username
            setUsernameAvailable(true);
          } else {
            // No profile exists, set default values from auth
            const displayName = user.displayName || '';
            const nameParts = displayName.split(' ');
            setFirstName(nameParts[0] || '');
            setLastName(nameParts.slice(1).join(' ') || '');
            setUsername(user.email?.split('@')[0] || '');
            setOriginalUsername(user.email?.split('@')[0] || '');
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
          setError('Failed to load your profile. Please try refreshing the page.');
        } finally {
          setIsLoading(false);
        }
      } else {
        // Not signed in, redirect to login
        router.push('/login');
      }
    });
    
    return () => unsubscribe();
  }, [router]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value, validity } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
    
    // Clear previous validation message
    setCustomValidation({ ...customValidation, [name]: '' });
    
    // Add a custom validation message if empty
    if (validity.valueMissing) {
      let message = 'This field is required';
      if (name === 'firstName') message = 'Please enter your first name';
      if (name === 'lastName') message = 'Please enter your last name';
      if (name === 'username') message = 'Please choose a username';
      
      setCustomValidation({ ...customValidation, [name]: message });
    }
  };

  const checkUsername = async (username: string) => {
    // If username hasn't changed, it's still available
    if (username === originalUsername) {
      setUsernameAvailable(true);
      return;
    }
    
    if (username.length < 2) {
      setUsernameAvailable(null);
      return;
    }
    
    try {
      setIsCheckingUsername(true);
      const taken = await isUsernameTaken(username);
      setUsernameAvailable(!taken);
    } catch (error) {
      console.error('Error checking username:', error);
    } finally {
      setIsCheckingUsername(false);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    
    // If the username is the same as the original, it's available
    if (value === originalUsername) {
      setUsernameAvailable(true);
      return;
    }
    
    // Debounce the username check
    const timeoutId = setTimeout(() => {
      if (value.length >= 2) {
        checkUsername(value);
      } else {
        setUsernameAvailable(null);
      }
    }, 500);
    
    return () => clearTimeout(timeoutId);
  };

  const validateForm = () => {
    const newValidation: Record<string, string> = {};
    const newTouchedFields: Record<string, boolean> = {};
    let isValid = true;
    
    // First name validation
    newTouchedFields.firstName = true;
    if (!firstName.trim()) {
      newValidation.firstName = 'Please enter your first name';
      isValid = false;
    }
    
    // Last name validation
    newTouchedFields.lastName = true;
    if (!lastName.trim()) {
      newValidation.lastName = 'Please enter your last name';
      isValid = false;
    }
    
    // Username validation
    newTouchedFields.username = true;
    if (!username.trim()) {
      newValidation.username = 'Please choose a username';
      isValid = false;
    } else if (username.length < 2) {
      newValidation.username = 'Username must be at least 2 characters';
      isValid = false;
    } else if (username !== originalUsername && usernameAvailable === false) {
      newValidation.username = 'This username is already taken';
      isValid = false;
    }
    
    setTouchedFields({ ...touchedFields, ...newTouchedFields });
    setCustomValidation({ ...customValidation, ...newValidation });
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm() || !currentUserUid) return;
    
    setIsSaving(true);
    setError('');
    setSuccess(false);
    
    try {
      // Update the user profile in Firestore
      await createUserProfile(currentUserUid, {
        firstName,
        lastName,
        username,
        email: userEmail
      });
      
      // Update the display name in Firebase Auth
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: username
        });
      }
      
      // Update the original username to reflect the new value
      setOriginalUsername(username);
      
      setSuccess(true);
      
      // Hide success message after a few seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err: unknown) {
      let errorMessage = 'Failed to update your profile';
      if (err instanceof Error) {
        if (err.message.includes('Username is already taken')) {
          errorMessage = 'This username is already taken';
          setCustomValidation({ ...customValidation, username: 'This username is already taken' });
        }
      }
      setError(errorMessage);
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  // Show validation styling only if field is touched
  const getInputClasses = (fieldName: string) => {
    const baseClasses = "w-full px-5 py-3.5 bg-[#f8f5ec] border border-[#e8e1d1] rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500";
    
    if (touchedFields[fieldName] && customValidation[fieldName]) {
      return `${baseClasses} border-red-300 bg-red-50`;
    }
    
    // Add green border for valid username
    if (fieldName === 'username' && username.length >= 2 && usernameAvailable === true) {
      return `${baseClasses} border-green-300 bg-green-50`;
    }
    
    return baseClasses;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f5efe0] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-slate-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5efe0] flex flex-col">
      <div className="py-12 px-6 flex-1 flex flex-col items-center">
        <div className="w-full max-w-lg mx-auto">
          {/* Page header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-normal text-slate-900">My Profile</h1>
            <p className="mt-2 text-slate-700">Update your personal information</p>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm rounded-md">
              {error}
            </div>
          )}

          {/* Success message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 text-sm rounded-md">
              Your profile has been updated successfully
            </div>
          )}

          {/* Profile form */}
          <form onSubmit={handleSubmit} className="space-y-6 w-full bg-white rounded-xl p-8 shadow-sm" noValidate>
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-slate-700">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className={getInputClasses('firstName')}
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={handleBlur}
                  required
                />
                {touchedFields.firstName && customValidation.firstName && (
                  <p className="mt-1 text-sm text-red-500">{customValidation.firstName}</p>
                )}
              </div>
              
              <div className="w-full md:w-1/2">
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-slate-700">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className={getInputClasses('lastName')}
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onBlur={handleBlur}
                  required
                />
                {touchedFields.lastName && customValidation.lastName && (
                  <p className="mt-1 text-sm text-red-500">{customValidation.lastName}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-slate-700">Username</label>
              <div className="relative">
                <input
                  id="username"
                  name="username"
                  type="text"
                  className={getInputClasses('username')}
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                  onBlur={handleBlur}
                  required
                />
                {isCheckingUsername && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin h-5 w-5 border-2 border-slate-500 rounded-full border-t-transparent"></div>
                  </div>
                )}
                {!isCheckingUsername && username.length >= 2 && usernameAvailable === true && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                    ✓
                  </div>
                )}
              </div>
              {touchedFields.username && customValidation.username && (
                <p className="mt-1 text-sm text-red-500">{customValidation.username}</p>
              )}
              {!customValidation.username && username.length >= 2 && usernameAvailable === true && username !== originalUsername && (
                <p className="mt-1 text-sm text-green-500">Username is available</p>
              )}
              {!customValidation.username && username.length >= 2 && usernameAvailable === false && (
                <p className="mt-1 text-sm text-red-500">Username is already taken</p>
              )}
            </div>

            <div className="pt-4">
              <label className="block mb-2 text-sm font-medium text-slate-700">Email Address</label>
              <div className="w-full px-5 py-3.5 bg-[#f8f5ec] border border-[#e8e1d1] rounded-md text-slate-500">
                {userEmail}
              </div>
              <p className="mt-2 text-xs text-slate-600">Email address cannot be changed</p>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-3.5 bg-[#1a1a19] text-white rounded-md hover:bg-[#2a2a29] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition duration-200"
                disabled={isSaving}
              >
                {isSaving ? (
                  <span className="flex items-center">
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white rounded-full border-t-transparent"></div>
                    Saving changes...
                  </span>
                ) : (
                  <span>Save changes</span>
                )}
              </button>
            </div>
          </form>

          {/* Back link */}
          <div className="mt-6 text-center">
            <Link href="/" className="text-slate-700 hover:text-slate-900 text-sm">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 