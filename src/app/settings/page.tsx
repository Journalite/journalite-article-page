"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '../../firebase/clientApp';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { updateUserInterests, getUserProfile, UserProfile, isUsernameTaken, createUserProfile, deleteUserAccount } from '../../services/userService';

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
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  // General Page States
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [error, setError] = useState(''); // General errors for the page or interest section
  const [profileError, setProfileError] = useState(''); // Specific errors for profile section
  const [successMessage, setSuccessMessage] = useState(''); // For interest updates
  const [profileSuccessMessage, setProfileSuccessMessage] = useState(''); // For profile updates
  
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

  // --- Delete Account Logic ---
  const handleDeleteAccountClick = () => {
    setProfileError(''); // Clear other errors
    setError('');
    setShowDeleteConfirmModal(true);
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <p>This is the settings page. Content will be loaded dynamically.</p>
      <div className="mt-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 