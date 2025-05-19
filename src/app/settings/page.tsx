"use client";

import { useState, useEffect } from 'react';
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
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-100 flex flex-col items-center p-4 sm:p-6 md:p-8 font-sans relative">
      {/* Back to Home Link */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
        <Link href="/" className="flex items-center text-stone-600 hover:text-amber-600 transition-colors duration-200 group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </div>

      <div className="w-full max-w-3xl bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl mt-12 sm:mt-16">
        <h1 className="text-3xl sm:text-4xl font-serif font-medium text-stone-800 mb-3 text-center">Account Settings</h1>
        <p className="text-stone-600 text-lg mb-8 md:mb-10 text-center">Manage your preferences and profile details.</p>

        {/* Profile Information Section */}
        <section id="profile-info" className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-stone-700 mb-2">Profile Information</h2>
          <p className="text-stone-500 text-sm mb-6">Update your name, username, and bio.</p>
          
          <form onSubmit={(e) => { e.preventDefault(); handleProfileSubmit(); }} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-stone-600 mb-1">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={handleProfileInputChange}
                  onBlur={handleProfileBlur}
                  className={getInputClasses('firstName', !!profileValidation.firstName)}
                  required
                />
                {profileTouchedFields.firstName && profileValidation.firstName && (
                  <p className="mt-1 text-xs text-red-500">{profileValidation.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-stone-600 mb-1">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={handleProfileInputChange}
                  onBlur={handleProfileBlur}
                  className={getInputClasses('lastName', !!profileValidation.lastName)}
                  required
                />
                {profileTouchedFields.lastName && profileValidation.lastName && (
                  <p className="mt-1 text-xs text-red-500">{profileValidation.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-stone-600 mb-1">Username</label>
              <div className="relative">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={handleProfileInputChange}
                  onBlur={handleProfileBlur}
                  className={getInputClasses('username', !!profileValidation.username, usernameAvailable)}
                  required
                />
                {isCheckingUsername && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin h-4 w-4 border-2 border-stone-400 rounded-full border-t-transparent"></div>
                  </div>
                )}
                {!isCheckingUsername && username.length >= 2 && usernameAvailable === true && username !== userProfile?.username && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                )}
              </div>
              {profileTouchedFields.username && profileValidation.username && (
                <p className="mt-1 text-xs text-red-500">{profileValidation.username}</p>
              )}
              {!profileValidation.username && username.length >= 2 && usernameAvailable === true && username !== userProfile?.username && (
                <p className="mt-1 text-xs text-green-500">Username is available</p>
              )}
              {!profileValidation.username && username.length >= 2 && usernameAvailable === false && username !== userProfile?.username && (
                <p className="mt-1 text-xs text-red-500">Username is already taken</p>
              )}
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-stone-600 mb-1">Bio</label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                value={bio}
                onChange={handleProfileInputChange}
                onBlur={handleProfileBlur}
                className={getInputClasses('bio', !!profileValidation.bio)}
                placeholder="Tell us a little about yourself..."
              />
              {profileTouchedFields.bio && profileValidation.bio && (
                <p className="mt-1 text-xs text-red-500">{profileValidation.bio}</p>
              )}
            </div>

            {profileError && (
              <p className="my-2 p-3 bg-red-100 text-red-700 text-sm rounded-lg border border-red-200 animate-fadeIn text-center">
                {profileError}
              </p>
            )}
            {profileSuccessMessage && (
              <p className="my-2 p-3 bg-green-100 text-green-700 text-sm rounded-lg border border-green-200 animate-fadeIn text-center">
                {profileSuccessMessage}
              </p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-stone-800 text-white rounded-lg shadow-md hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 ease-in-out transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmittingProfile}
              >
                {isSubmittingProfile ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving Profile...
                  </>
                ) : (
                  'Save Profile Changes'
                )}
              </button>
            </div>
          </form>
        </section>
        
        <hr className="my-10 border-stone-300" />

        {/* Interests Section */}
        <section id="interests" className="mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-700 mb-2">Your Interests</h2>
            <p className="text-stone-500 text-sm mb-6">Select topics that you care about to help us personalize your experience. Choose at least 3.</p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {ALL_INTERESTS.map(interest => (
                <button
                key={interest}
                className={`
                    px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 
                    ${selectedInterests.includes(interest)
                    ? 'bg-amber-500 text-white shadow-md scale-105' 
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50 hover:border-stone-400 hover:shadow-sm active:scale-95'
                    }`}
                onClick={() => toggleInterest(interest)}
                >
                {interest}
                </button>
            ))}
            </div>
            
            {error && (
            <p className="my-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg border border-red-200 animate-fadeIn text-center">
                {error} {/* This error state is for interest section errors */}
            </p>
            )}
            {successMessage && (
                <p className="my-4 p-3 bg-green-100 text-green-700 text-sm rounded-lg border border-green-200 animate-fadeIn text-center">
                {successMessage} {/* This successMessage is for interest section */}
                </p>
            )}
            
            <div className="flex justify-center">
                <button 
                className="w-full max-w-xs flex items-center justify-center px-6 py-3.5 bg-stone-800 text-white rounded-lg shadow-md hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 ease-in-out transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                onClick={handleInterestsSubmit} // Renamed from handleSubmit
                disabled={isSubmittingInterests || selectedInterests.length < 3}
                >
                {isSubmittingInterests ? (
                    <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving Interests...
                    </>
                ) : (
                    'Save Interest Changes' // Clarified button text
                )}
                </button>
            </div>
        </section>

        <hr className="my-10 border-stone-300" />
        <section id="account-management">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-700 mb-4">Account Management</h2>
            <p className="text-stone-600 text-sm mb-6">Manage your account settings or take critical actions.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-md font-medium text-stone-700">Change Email or Password</h3>
                <p className="text-xs text-stone-500 mb-2">Functionality to update your email or password will be available here soon.</p>
                {/* Placeholder for future inputs/buttons */}
              </div>

              <div>
                <h3 className="text-md font-medium text-red-600">Delete Account</h3>
                <p className="text-xs text-stone-500 mb-3">Permanently delete your account and all associated data. This action cannot be undone.</p>
                <button 
                  onClick={handleDeleteAccountClick}
                  className="px-5 py-2.5 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 ease-in-out transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                  disabled={isSubmittingInterests || isSubmittingProfile || isLoadingPage}
                >
                  Delete My Account
                </button>
              </div>
            </div>
        </section>
      </div>

      {/* Delete Account Confirmation Modal */}
      {showDeleteConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-out scale-100 opacity-100">
            <h3 className="text-2xl font-semibold text-stone-800 mb-4 text-center">Confirm Account Deletion</h3>
            <p className="text-stone-600 mb-1 text-center">Are you absolutely sure you want to delete your account?</p>
            <p className="text-sm text-red-600 mb-6 text-center font-medium">This action is permanent and cannot be undone. All your data, including articles, profile information, and interactions, will be removed.</p>
            
            {error && ( // Display errors specific to deletion process within the modal
              <p className="my-3 p-2.5 bg-red-100 text-red-700 text-sm rounded-md border border-red-200 text-center">
                {error}
              </p>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6">
              <button
                onClick={handleCancelDelete}
                disabled={isDeletingAccount}
                className="w-full sm:w-auto px-6 py-3 bg-stone-200 text-stone-700 rounded-lg hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-400 transition-colors duration-200 ease-in-out order-2 sm:order-1"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={isDeletingAccount}
                className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 ease-in-out order-1 sm:order-2 disabled:opacity-70"
              >
                {isDeletingAccount ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Deleting...
                  </>
                ) : (
                  'Yes, Delete My Account'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 