"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { updateProfile } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/clientApp';
import { getUserProfile, isUsernameTaken, createUserProfile, UserProfile as UserProfileData } from '../../../services/userService';
import Link from 'next/link';

const MAX_BIO_LENGTH = 250;

export default function EditMyProfilePage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [originalUsername, setOriginalUsername] = useState('');
  const [bio, setBio] = useState('');
  const [bioCharCount, setBioCharCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
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
        try {
          const profile = await getUserProfile(user.uid);
          if (profile) {
            setFirstName(profile.firstName || '');
            setLastName(profile.lastName || '');
            setUsername(profile.username || '');
            setOriginalUsername(profile.username || '');
            setBio(profile.bio || '');
            setBioCharCount(profile.bio?.length || 0);
            setUsernameAvailable(true); // Initially, their own username is available to them
          } else {
            // Pre-fill from auth if no profile exists (though less likely for an edit page)
            const displayName = user.displayName || '';
            const nameParts = displayName.split(' ');
            setFirstName(nameParts[0] || '');
            setLastName(nameParts.slice(1).join(' ') || '');
            const initialUsername = user.email?.split('@')[0] || '';
            setUsername(initialUsername);
            setOriginalUsername(initialUsername);
            if (initialUsername) await checkUsernameAvailability(initialUsername, true);
          }
        } catch (err) {
          console.error('Error fetching user profile:', err);
          setError('Failed to load your profile. Please try refreshing the page.');
        } finally {
          setIsLoading(false);
        }
      } else {
        router.push('/login?redirect=/my-profile/edit');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
    setValidationErrors({ ...validationErrors, [name]: '' });
    setError('');
    setSuccessMessage('');

    if (name === 'firstName') setFirstName(value);
    if (name === 'lastName') setLastName(value);
    if (name === 'username') {
      setUsername(value);
      // Reset username availability until checked
      if (value !== originalUsername) {
        setUsernameAvailable(null); 
      }
    }
    if (name === 'bio') {
      if (value.length <= MAX_BIO_LENGTH) {
        setBio(value);
        setBioCharCount(value.length);
      }
    }
  };

  const handleBlur = async (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
    if (name === 'username' && value !== originalUsername && value.length >= 2) {
      await checkUsernameAvailability(value);
    }
  };
  
  const validateField = (name: string, value: string) => {
    let errMsg = '';
    if (!value.trim() && (name === 'firstName' || name === 'lastName' || name === 'username')) {
      errMsg = `Please enter your ${name === 'firstName' ? 'first name' : name === 'lastName' ? 'last name' : 'username'}.`;
    }
    if (name === 'username' && value.trim().length > 0 && value.trim().length < 2) {
      errMsg = 'Username must be at least 2 characters.';
    }
    setValidationErrors(prev => ({ ...prev, [name]: errMsg }));
    return !errMsg;
  };

  const checkUsernameAvailability = async (currentUsername: string, isInitialLoad = false) => {
    if (currentUsername.length < 2) {
      setUsernameAvailable(null);
      return;
    }
    if (currentUsername === originalUsername && !isInitialLoad) {
      setUsernameAvailable(true);
      return;
    }
    setIsCheckingUsername(true);
    try {
      const taken = await isUsernameTaken(currentUsername);
      setUsernameAvailable(!taken);
    } catch (error) {
      console.error('Error checking username:', error);
      setUsernameAvailable(null); // Error state
      setValidationErrors(prev => ({ ...prev, username: 'Could not verify username. Try again.' }));
    } finally {
      setIsCheckingUsername(false);
    }
  };

  // Debounced username check on change
  useEffect(() => {
    if (username === originalUsername || username.length < 2) {
      if (username === originalUsername) setUsernameAvailable(true);
      else setUsernameAvailable(null);
      return;
    }
    const handler = setTimeout(() => {
      checkUsernameAvailability(username);
    }, 600);
    return () => clearTimeout(handler);
  }, [username, originalUsername]);

  const validateForm = () => {
    const newValidationErrors: Record<string, string> = {};
    let isValid = true;

    if (!validateField('firstName', firstName)) isValid = false;
    if (!validateField('lastName', lastName)) isValid = false;
    if (!validateField('username', username)) isValid = false;

    if (username.length >=2 && username !== originalUsername && usernameAvailable === false) {
      newValidationErrors.username = 'This username is already taken.';
      isValid = false;
    }
    
    setValidationErrors(prev => ({ ...prev, ...newValidationErrors }));
    // Mark all fields as touched to show errors on submit
    setTouchedFields({ firstName: true, lastName: true, username: true, bio: true });
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!validateForm() || !currentUserUid) return;
    if (username !== originalUsername && usernameAvailable === false) {
        setValidationErrors(prev => ({ ...prev, username: 'This username is already taken.' }));
        return;
    }

    setIsSaving(true);
    try {
      const profileData: Partial<UserProfileData> = {
        firstName,
        lastName,
        username: username.toLowerCase(),
        email: userEmail, // Email is generally not editable by user directly
        bio
      };

      await createUserProfile(currentUserUid, profileData as Omit<UserProfileData, 'uid' | 'createdAt'>); 
      
      if (auth.currentUser && auth.currentUser.displayName !== username) {
        await updateProfile(auth.currentUser, { displayName: username });
      }
      
      setOriginalUsername(username); // Update original username after successful save
      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      // No redirect, or redirect to /my-profile
      // router.push('/my-profile'); 
    } catch (err: unknown) {
      console.error('Error updating profile:', err);
      let errorMessage = 'Failed to update profile. Please try again.';
      if (err instanceof Error && err.message.includes('Username is already taken')) {
        errorMessage = 'This username is already taken.';
        setValidationErrors(prev => ({ ...prev, username: errorMessage }));
      }
      setError(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  const getInputClasses = (fieldName: string, hasError: boolean, isValid?: boolean | null) => {
    let base = "w-full px-4 py-3 bg-white border border-stone-300 rounded-lg shadow-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-amber-500 focus:border-amber-500 placeholder-stone-400 text-stone-700";
    if (hasError) return `${base} border-red-400 focus:ring-red-400 bg-red-50 text-red-700 placeholder-red-400`;
    if (isValid === true && fieldName === 'username' && username !== originalUsername) return `${base} border-green-400 focus:ring-green-400 bg-green-50 text-green-700`;
    return `${base} hover:border-stone-400`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-100 flex items-center justify-center font-sans">
        <div className="animate-spin h-10 w-10 border-4 border-amber-500 rounded-full border-t-transparent"></div>
        <p className="ml-3 text-stone-700">Loading profile editor...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-100 flex flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-2xl">
        <div className="mb-8 flex justify-start">
          <Link href="/my-profile" className="text-amber-700 hover:text-amber-800 font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Profile
          </Link>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-stone-800">Edit Your Profile</h1>
            <p className="mt-3 text-stone-600">Keep your information up to date.</p>
          </div>

          {error && (
            <div className="mb-6 p-3.5 bg-red-100 text-red-700 border border-red-200 rounded-lg transition-all duration-300 ease-in-out animate-fadeIn">
              {error}
            </div>
          )}
          {successMessage && (
            <div className="mb-6 p-3.5 bg-green-100 text-green-700 border border-green-200 rounded-lg transition-all duration-300 ease-in-out animate-fadeIn">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-stone-600 mb-1.5">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getInputClasses('firstName', !!validationErrors.firstName)}
                  required
                  aria-describedby="firstName-error"
                />
                {touchedFields.firstName && validationErrors.firstName && (
                  <p id="firstName-error" className="mt-1.5 text-xs text-red-500">{validationErrors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-stone-600 mb-1.5">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getInputClasses('lastName', !!validationErrors.lastName)}
                  required
                  aria-describedby="lastName-error"
                />
                {touchedFields.lastName && validationErrors.lastName && (
                  <p id="lastName-error" className="mt-1.5 text-xs text-red-500">{validationErrors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-stone-600 mb-1.5">Username</label>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={getInputClasses('username', !!validationErrors.username, usernameAvailable)}
                  required
                  aria-describedby="username-error username-availability"
                />
                {isCheckingUsername && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <div className="animate-spin h-4 w-4 border-2 border-stone-400 rounded-full border-t-transparent"></div>
                    </div>
                )}
              </div>
              {touchedFields.username && validationErrors.username && (
                <p id="username-error" className="mt-1.5 text-xs text-red-500">{validationErrors.username}</p>
              )}
              {!validationErrors.username && username.length >= 2 && username !== originalUsername && (
                <p id="username-availability" className={`mt-1.5 text-xs ${usernameAvailable === true ? 'text-green-600' : usernameAvailable === false ? 'text-red-500' : 'text-stone-500'}`}>
                  {isCheckingUsername ? 'Checking...' : usernameAvailable === true ? 'Username is available' : usernameAvailable === false ? 'Username is taken' : 'Enter username to check availability'}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={userEmail} // Email is usually not editable by the user
                disabled // Make it disabled
                className="w-full px-4 py-3 bg-stone-100 border border-stone-300 rounded-lg shadow-sm text-stone-500 cursor-not-allowed"
              />
               <p className="mt-1.5 text-xs text-stone-500">Your email address cannot be changed here.</p>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-stone-600 mb-1.5">Bio</label>
              <textarea
                name="bio"
                id="bio"
                rows={4}
                value={bio}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={getInputClasses('bio', !!validationErrors.bio)}
                maxLength={MAX_BIO_LENGTH}
                aria-describedby="bio-char-count"
              ></textarea>
              <p id="bio-char-count" className="mt-1.5 text-xs text-stone-500 text-right">{bioCharCount}/{MAX_BIO_LENGTH} characters</p>
              {touchedFields.bio && validationErrors.bio && (
                  <p className="mt-1.5 text-xs text-red-500">{validationErrors.bio}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-end items-center gap-4 pt-4">
                <Link href="/my-profile" className="w-full sm:w-auto order-2 sm:order-1 px-6 py-3 text-center text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-lg transition-colors duration-200 ease-in-out font-medium">
                    Cancel
                </Link>
                <button
                    type="submit"
                    disabled={isSaving || isCheckingUsername}
                    className="w-full sm:w-auto order-1 sm:order-2 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isSaving ? (
                        <>
                            <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent mr-2.5"></div>
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