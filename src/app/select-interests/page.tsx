"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../firebase/clientApp'; // Assuming firebase clientApp is in this path
import { onAuthStateChanged } from 'firebase/auth';
// We'll need a service to update user interests, e.g., updateUserInterests
import { updateUserInterests } from '../../services/userService'; 
// import styles from '@/styles/selectInterests.module.css'; // Removed CSS module import

// Placeholder interests - replace with actual interests
const ALL_INTERESTS = [
  'Technology', 'Science', 'Art & Design', 'Books & Literature', 'Travel', 
  'Food & Cooking', 'Health & Wellness', 'Sports', 'Music', 'Movies & TV',
  'Gaming', 'Fashion', 'Business & Finance', 'History', 'Politics', 'Photography'
];

export default function SelectInterestsPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // Renamed from isLoading for clarity
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        // If no user is logged in, redirect to login or home
        router.push('/login');
      }
      setIsLoadingUser(false);
    });
    return () => unsubscribe();
  }, [router]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async () => {
    if (!currentUser) {
      setError('No user logged in. Please log in again.');
      return;
    }
    if (selectedInterests.length < 3) { // Example: require at least 3 interests
      setError('Please select at least 3 interests to continue.');
      return;
    }

    setIsSubmitting(true);
    setError('');
    try {
      // Replace with actual service call:
      await updateUserInterests(currentUser.uid, selectedInterests);
      // console.log('User UID:', currentUser.uid, 'Selected Interests:', selectedInterests);
      // alert('Interests saved (simulated)!'); // Placeholder
      router.push('/'); // Redirect to home page or dashboard after saving
    } catch (err) {
      console.error('Failed to save interests:', err);
      setError('Failed to save interests. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-100 flex items-center justify-center font-sans">
        <div className="animate-spin h-10 w-10 border-4 border-amber-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-stone-800 mb-3">What sparks your curiosity?</h1>
        <p className="text-stone-600 text-lg sm:text-xl mb-8 md:mb-12">Select at least 3 interests to personalize your Journalite experience.</p>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 md:mb-14">
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
          <p className="mb-6 p-3.5 bg-red-100 text-red-700 text-sm rounded-lg border border-red-200 animate-fadeIn">
            {error}
          </p>
        )}
        
        <button 
          className="w-full max-w-xs mx-auto flex items-center justify-center px-6 py-3.5 bg-stone-800 text-white rounded-lg shadow-md hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 ease-in-out transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={isSubmitting || selectedInterests.length < 3}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Saving preferences...
            </>
          ) : (
            'Continue to Journalite'
          )}
        </button>
      </div>
    </div>
  );
} 