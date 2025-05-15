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
  const [bio, setBio] = useState('');
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
  const [bioCharCount, setBioCharCount] = useState(0);
  
  const router = useRouter();
  const MAX_BIO_LENGTH = 250;

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
            setBio(profile.bio || '');
            setBioCharCount(profile.bio?.length || 0);
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, validity } = e.target as HTMLInputElement;
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

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_BIO_LENGTH) {
      setBio(value);
      setBioCharCount(value.length);
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
        email: userEmail,
        bio
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
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First name field */}
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-slate-700">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={handleBlur}
                className={getInputClasses('firstName')}
              />
              {touchedFields.firstName && customValidation.firstName && (
                <p className="mt-1 text-sm text-red-500">{customValidation.firstName}</p>
              )}
            </div>
            
            {/* Last name field */}
            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-slate-700">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onBlur={handleBlur}
                className={getInputClasses('lastName')}
              />
              {touchedFields.lastName && customValidation.lastName && (
                <p className="mt-1 text-sm text-red-500">{customValidation.lastName}</p>
              )}
            </div>
            
            {/* Username field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="username" className="block text-sm font-medium text-slate-700">
                  Username
                </label>
                {isCheckingUsername && (
                  <div className="text-xs text-slate-500 flex items-center">
                    <div className="mr-1 w-3 h-3 border-2 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
                    Checking...
                  </div>
                )}
              </div>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={handleUsernameChange}
                onBlur={handleBlur}
                className={getInputClasses('username')}
              />
              {touchedFields.username && customValidation.username ? (
                <p className="mt-1 text-sm text-red-500">{customValidation.username}</p>
              ) : username && username.length >= 2 && usernameAvailable === true ? (
                <p className="mt-1 text-sm text-green-600">Username is available</p>
              ) : username && username.length >= 2 && usernameAvailable === false ? (
                <p className="mt-1 text-sm text-red-500">Username is already taken</p>
              ) : null}
            </div>
            
            {/* Bio field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="bio" className="block text-sm font-medium text-slate-700">
                  Bio
                </label>
                <span className={`text-xs ${bioCharCount >= MAX_BIO_LENGTH * 0.9 ? 'text-amber-600' : 'text-slate-500'}`}>
                  {bioCharCount}/{MAX_BIO_LENGTH}
                </span>
              </div>
              <textarea
                id="bio"
                name="bio"
                value={bio}
                onChange={handleBioChange}
                onBlur={handleBlur}
                placeholder="Tell us a little about yourself..."
                rows={4}
                maxLength={MAX_BIO_LENGTH}
                className="w-full px-5 py-3.5 bg-[#f8f5ec] border border-[#e8e1d1] rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 resize-none"
              />
              <p className="mt-1 text-xs text-slate-500">
                Your bio will be displayed on your public profile and articles
              </p>
            </div>
            
            {/* Status messages */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-600">
                {error}
              </div>
            )}
            
            {success && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-md text-sm text-green-600">
                Your profile has been updated successfully!
              </div>
            )}
            
            {/* Form actions */}
            <div className="flex justify-between items-center mt-8">
              <Link
                href="/"
                className="inline-flex justify-center py-3 px-5 border border-slate-300 rounded-md bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                Back to Home
              </Link>
              <button
                type="submit"
                disabled={isSaving}
                className={`inline-flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                  ${isSaving ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-800 hover:bg-slate-700'} 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500`}
              >
                {isSaving ? (
                  <>
                    <span className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 