"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '../../firebase/clientApp';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { updateUserInterests, getUserProfile, UserProfile, isUsernameTaken, createUserProfile, deleteUserAccount } from '../../services/userService';
import TopLeftLogo from '@/components/TopLeftLogo';
import styles from '@/styles/home.module.css';

// Consistent list of interests (can be moved to a shared constants file later)
const ALL_INTERESTS = [
  'Technology', 'Science', 'Art & Design', 'Books & Literature', 'Travel',
  'Food & Cooking', 'Health & Wellness', 'Sports', 'Music', 'Movies & TV',
  'Gaming', 'Fashion', 'Business & Finance', 'History', 'Politics', 'Photography'
];

export default function SettingsPage() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  
  // States for Interest Management
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmittingInterests, setIsSubmittingInterests] = useState(false);
  
  // States for Profile Information Management
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [isSubmittingProfile, setIsSubmittingProfile] = useState(false);
  const [profileTouchedFields, setProfileTouchedFields] = useState<Record<string, boolean>>({});
  const [profileValidation, setProfileValidation] = useState<Record<string, string>>({});

  // State for Delete Account Modal
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  // General Page States
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [error, setError] = useState(''); // General errors for the page or interest section
  const [profileError, setProfileError] = useState(''); // Specific errors for profile section
  const [successMessage, setSuccessMessage] = useState(''); // For interest updates
  const [profileSuccessMessage, setProfileSuccessMessage] = useState(''); // For profile updates
  const [profileMessage, setProfileMessage] = useState('');
  const [interestsMessage, setInterestsMessage] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingInterests, setIsSavingInterests] = useState(false);
  const [availableInterests] = useState(ALL_INTERESTS);
  
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        try {
          const profile = await getUserProfile(user.uid);
          if (profile) {
            setUserProfile(profile);
            // Populate interest states
            setSelectedInterests(profile.interests || []);
            // Populate profile info states
            setFirstName(profile.firstName || '');
            setLastName(profile.lastName || '');
            setUsername(profile.username || '');
            setBio(profile.bio || '');
            if (profile.username) {
              // Initial check for existing username (it should be available as it's theirs)
              checkUsernameAvailability(profile.username, true);
            }
          } else {
            setError('Could not load your profile. Please try again.');
          }
        } catch (err) {
          console.error("Error fetching profile:", err);
          setError('Failed to load profile data.');
        }
      } else {
        router.push('/login');
      }
      setIsLoadingPage(false);
    });
    return () => unsubscribe();
  }, [router]);

  // --- Interest Management Logic ---
  const toggleInterest = (interest: string) => {
    setSuccessMessage(''); 
    setError('');
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleInterestsSubmit = async () => {
    if (!currentUser) {
      setError('User not authenticated. Please log in again.');
      return;
    }
    if (selectedInterests.length < 3) {
      setError('Please select at least 3 interests.');
      setSuccessMessage('');
      return;
    }
    setIsSubmittingInterests(true);
    setError('');
    setSuccessMessage('');
    try {
      await updateUserInterests(currentUser.uid, selectedInterests);
      setSuccessMessage('Your interests have been updated successfully!');
      if(userProfile) setUserProfile({...userProfile, interests: selectedInterests });
    } catch (err) {
      console.error('Failed to update interests:', err);
      setError('Failed to update interests. Please try again.');
    } finally {
      setIsSubmittingInterests(false);
    }
  };

  // --- Profile Information Management Logic ---
  const checkUsernameAvailability = async (currentUsername: string, isInitialLoad = false) => {
    if (currentUsername.length < 2) {
      setUsernameAvailable(null);
      return;
    }
    setIsCheckingUsername(true);
    try {
      const taken = await isUsernameTaken(currentUsername);
      // If it's the initial load and the username is the user's current one, it's considered "available" for them.
      // Otherwise (or if it's not their current username), it's available if not taken by someone else.
      if (isInitialLoad && userProfile && currentUsername === userProfile.username) {
        setUsernameAvailable(true);
      } else {
        setUsernameAvailable(!taken);
      }
    } catch (error) {
      console.error('Error checking username:', error);
      setUsernameAvailable(null); // Error state
      setProfileError('Could not verify username. Please try again.');
    } finally {
      setIsCheckingUsername(false);
    }
  };

  // Debounced username check
  useEffect(() => {
    // Skip if username hasn't changed from initial profile or if it's empty
    if (!userProfile || username === userProfile.username || username.length < 2) {
        if(username.length < 2 && username !== (userProfile?.username || '')) setUsernameAvailable(null);
        return;
    }
    const handler = setTimeout(() => {
        checkUsernameAvailability(username);
    }, 500);
    return () => clearTimeout(handler);
  }, [username, userProfile]); // Add userProfile to dependencies


  const handleProfileInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileSuccessMessage('');
    setProfileError('');

    if (name === 'firstName') setFirstName(value);
    if (name === 'lastName') setLastName(value);
    if (name === 'username') setUsername(value);
    if (name === 'bio') setBio(value);

    setProfileTouchedFields({ ...profileTouchedFields, [name]: true });
    // Basic required validation on change for immediate feedback if desired, or keep for blur/submit
    if (!value.trim() && (name === 'firstName' || name === 'lastName' || name ==='username')) {
        setProfileValidation({ ...profileValidation, [name]: `Your ${name.replace(/([A-Z])/g, ' $1').toLowerCase()} is required.` });
    } else {
        const newValidation = { ...profileValidation };
        delete newValidation[name];
        setProfileValidation(newValidation);
    }
  };
  
  const handleProfileBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileTouchedFields({ ...profileTouchedFields, [name]: true });
    if (!value.trim() && (name === 'firstName' || name === 'lastName' || name ==='username')) {
      setProfileValidation({ ...profileValidation, [name]: `Your ${name.replace(/([A-Z])/g, ' $1').toLowerCase()} is required.` });
    } else if (name === 'username' && value.length < 2) {
      setProfileValidation({ ...profileValidation, [name]: 'Username must be at least 2 characters.' });
    } else {
      const newValidation = { ...profileValidation };
      delete newValidation[name];
      setProfileValidation(newValidation);
    }
  };

  const validateProfileForm = (): boolean => {
    const errors: Record<string, string> = {};
    let isValid = true;
    if (!firstName.trim()) { errors.firstName = 'First name is required.'; isValid = false; }
    if (!lastName.trim()) { errors.lastName = 'Last name is required.'; isValid = false; }
    if (!username.trim()) { 
        errors.username = 'Username is required.'; 
        isValid = false; 
    } else if (username.length < 2) {
        errors.username = 'Username must be at least 2 characters.';
        isValid = false;
    } else if (usernameAvailable === false && username !== userProfile?.username) { // only error if username is taken AND it's not their current one
        errors.username = 'This username is already taken.';
        isValid = false;
    }
    // Bio is optional, no validation needed unless specific rules apply (e.g., length)
    setProfileValidation(errors);
    // Mark all as touched to show errors
    setProfileTouchedFields({ firstName: true, lastName: true, username: true, bio: true });
    return isValid;
  };

  const handleProfileSubmit = async () => {
    if (!currentUser || !userProfile) {
      setProfileError('User data not available. Please try again.');
      return;
    }
    if (!validateProfileForm()) {
      return;
    }
    setIsSubmittingProfile(true);
    setProfileError('');
    setProfileSuccessMessage('');
    try {
      await createUserProfile(currentUser.uid, {
        // uid is not part of the Omit type, it's passed as first arg
        firstName,
        lastName,
        username,
        email: userProfile.email, // Use existing email, don't allow change here for now
        bio,
        interests: selectedInterests, // Pass existing interests, or they might be overwritten if not included by createUserProfile
        // Ensure createUserProfile handles existing fields like followers, followingCount etc., correctly
        // or fetch them and pass them if the function expects the full profile minus uid/createdAt for an update.
        // For now, assuming createUserProfile is smart enough for partial updates based on provided fields.
      });
      setProfileSuccessMessage('Profile information updated successfully!');
      // Update local userProfile state to reflect changes immediately
      setUserProfile(prev => prev ? { ...prev, firstName, lastName, username, bio } : null);
    } catch (err: any) {
      console.error('Failed to update profile:', err);
      if (err.message?.includes('Username is already taken')) {
        setProfileValidation({...profileValidation, username: 'This username is already taken.'});
        setProfileError('This username is already taken. Please choose another.');
      } else {
        setProfileError('Failed to update profile information. Please try again.');
      }
    } finally {
      setIsSubmittingProfile(false);
    }
  };
  
  // --- Input Styling --- (Can be refactored into a shared utility if used on more pages)
  const getInputClasses = (fieldName: string, errorState: boolean, availableState: boolean | null = null) => {
    const baseClasses = "w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg shadow-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-amber-500 focus:border-amber-500 placeholder-neutral-400 text-neutral-700";
    if (errorState) {
      return `${baseClasses} border-red-400 focus:ring-red-400 focus:border-red-400 bg-red-50 text-red-700 placeholder-red-400`;
    }
    if (fieldName === 'username' && username.length >= 2 && availableState === true) {
      return `${baseClasses} border-green-400 focus:ring-green-400 focus:border-green-400 bg-green-50 text-green-700 placeholder-green-400`;
    }
    return `${baseClasses} hover:border-neutral-400`;
  };

  // --- Helper Functions ---
  const handleSaveProfile = async () => {
    setIsSaving(true);
    setProfileMessage('');
    try {
      await handleProfileSubmit();
      setProfileMessage('Profile saved successfully!');
    } catch (error) {
      setProfileMessage('Error saving profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveInterests = async () => {
    setIsSavingInterests(true);
    setInterestsMessage('');
    try {
      await handleInterestsSubmit();
      setInterestsMessage('Interests saved successfully!');
    } catch (error) {
      setInterestsMessage('Error saving interests. Please try again.');
    } finally {
      setIsSavingInterests(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmation !== 'DELETE') return;
    setIsDeletingAccount(true);
    try {
      await handleConfirmDelete();
    } catch (error) {
      console.error('Error deleting account:', error);
    } finally {
      setIsDeletingAccount(false);
    }
  };

  // --- Delete Account Logic ---
  const handleDeleteAccountClick = () => {
    setProfileError(''); // Clear other errors
    setError('');
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmModal(false);
  };

  const handleConfirmDelete = async () => {
    if (!currentUser) {
      setError("User not authenticated. Please re-login.");
      setShowDeleteConfirmModal(false);
      return;
    }
    setIsDeletingAccount(true);
    setError(''); // Clear previous errors
    setProfileError('');

    try {
      await deleteUserAccount(currentUser.uid);
      // If successful, sign out the user and redirect
      await signOut(auth);
      router.push('/login?accountDeleted=true'); 
    } catch (err: any) {
      console.error("Failed to delete account:", err);
      // Display specific error messages to the user
      if (err.message.includes('requires recent authentication')) {
        setError("This action requires you to have signed in recently. Please sign out, sign back in, and try again.");
      } else {
        setError("Failed to delete your account. Please try again or contact support.");
      }
    } finally {
      setIsDeletingAccount(false);
      // Keep modal open if error, otherwise it will close upon navigation
      if (error) { // Check if error was set in the catch block
        // setShowDeleteConfirmModal(true); // User might want to keep it open on error
      } else {
        setShowDeleteConfirmModal(false); // Close on success if not navigating away
      }
    }
  };

  // --- Render Logic --- 
  if (isLoadingPage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-100 flex items-center justify-center font-sans">
        <div className="animate-spin h-10 w-10 border-4 border-amber-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }
  
  if (!currentUser || !userProfile) {
     // Handles cases where user is null after load or profile failed to load but auth check passed
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-100 flex flex-col items-center justify-center p-4 font-sans">
        <p className="text-red-600">{error || 'Could not load user data. Please try refreshing.'}</p>
        <Link href="/" className="mt-4 px-4 py-2 bg-stone-700 text-white rounded-md hover:bg-stone-600">
          Go to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className={`${styles['three-column-layout']}`}>
      <TopLeftLogo />
      
      <main className={styles['center-column']}>
        <div className={`${styles['glass-container']} mb-8 p-8`}>
          <div className={styles['glass-highlight']} />
          
          <div className={styles['glass-content']}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-stone-800 mb-2 font-serif">Settings</h1>
                <p className="text-stone-600 text-lg">Customize your Journalite experience</p>
              </div>
              <Link 
                href="/" 
                className={`${styles['glass-button']} text-stone-600 hover:text-stone-800 flex items-center gap-2 px-4 py-2`}
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className={`${styles['glass-container']} p-8`}>
            <div className={styles['glass-highlight']} />
            
            <div className={styles['glass-content']}>
              <h2 className="text-2xl font-bold text-stone-800 mb-6 font-serif">Profile Information</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                      style={{ background: 'rgba(255, 255, 255, 0.8)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                      style={{ background: 'rgba(255, 255, 255, 0.8)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                      style={{ background: 'rgba(255, 255, 255, 0.8)' }}
                    />
                    {isCheckingUsername && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                  {usernameAvailable === false && (
                    <p className="text-red-500 text-sm mt-1">Username not available</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Bio (Optional)
                  </label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    style={{ background: 'rgba(255, 255, 255, 0.8)' }}
                    placeholder="Tell us a bit about yourself..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleProfileSubmit}
                  disabled={isSubmittingProfile || isCheckingUsername}
                  className={`${styles['glass-button']} ${styles['glass-button-primary']} w-full py-4 font-semibold disabled:opacity-50`}
                >
                  {isSubmittingProfile ? 'Saving...' : 'Save Profile'}
                </button>

                {profileSuccessMessage && (
                  <div className={`p-4 rounded-xl ${styles['glass-button-success']}`}>
                    {profileSuccessMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className={`${styles['glass-container']} p-8`}>
            <div className={styles['glass-highlight']} />
            
            <div className={styles['glass-content']}>
              <h2 className="text-2xl font-bold text-stone-800 mb-6 font-serif">Your Interests</h2>
              
              <p className="text-stone-600 mb-6">
                Select at least 3 interests to personalize your experience
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {ALL_INTERESTS.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`p-3 rounded-xl text-sm font-medium transition-all ${
                      selectedInterests.includes(interest)
                        ? `${styles['glass-button-primary']}`
                        : `${styles['glass-button']}`
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <div className={`${styles['glass-tag']} inline-flex items-center gap-2`}>
                  <span className="text-sm font-medium">
                    {selectedInterests.length} / 3 minimum selected
                  </span>
                </div>
              </div>

              <button
                onClick={handleInterestsSubmit}
                disabled={selectedInterests.length < 3 || isSubmittingInterests}
                className={`${styles['glass-button']} ${styles['glass-button-success']} w-full py-4 font-semibold disabled:opacity-50`}
              >
                {isSubmittingInterests ? 'Saving...' : 'Save Interests'}
              </button>

              {successMessage && (
                <div className={`mt-4 p-4 rounded-xl ${styles['glass-button-success']}`}>
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={`${styles['glass-container']} mt-8 p-8`} style={{
          borderColor: 'rgba(239, 68, 68, 0.2)',
          background: 'rgba(239, 68, 68, 0.05)'
        }}>
          <div className={styles['glass-highlight']} />
          
          <div className={styles['glass-content']}>
            <h2 className="text-2xl font-bold text-red-700 mb-4 font-serif">Danger Zone</h2>
            <p className="text-stone-600 mb-6">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            
            <button
              onClick={handleDeleteAccountClick}
              className={`${styles['glass-button']} ${styles['glass-button-danger']} px-6 py-3 font-semibold`}
            >
              Delete Account
            </button>
          </div>
        </div>
      </main>

      {showDeleteModal && (
        <div className={styles['glass-modal-overlay']}>
          <div className={`${styles['glass-modal']} p-8`}>
            <h3 className="text-xl font-bold text-red-700 mb-4 font-serif">Delete Account</h3>
            <p className="text-stone-700 mb-6">
              Are you absolutely sure? This action cannot be undone. This will permanently delete your account and remove all of your data from our servers.
            </p>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Type "DELETE" to confirm:
              </label>
              <input
                type="text"
                value={deleteConfirmation}
                onChange={(e) => setDeleteConfirmation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
                style={{ background: 'rgba(255, 255, 255, 0.9)' }}
                placeholder="Type DELETE"
              />
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false)
                  setDeleteConfirmation('')
                }}
                className={`${styles['glass-button']} flex-1 py-3 font-medium`}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                disabled={deleteConfirmation !== 'DELETE' || isDeletingAccount}
                className={`${styles['glass-button']} ${styles['glass-button-danger']} flex-1 py-3 font-medium disabled:opacity-50`}
              >
                {isDeletingAccount ? 'Deleting...' : 'Delete Account'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 