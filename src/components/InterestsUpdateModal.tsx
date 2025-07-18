"use client";

import { useState } from 'react';
import { updateUserInterests, dismissInterestsUpdatePrompt } from '@/services/userService';

// Consistent list of interests
const ALL_INTERESTS = [
  'Technology', 'Science', 'Art & Design', 'Books & Literature', 'Travel',
  'Food & Cooking', 'Health & Wellness', 'Sports', 'Music', 'Movies & TV',
  'Gaming', 'Fashion', 'Business & Finance', 'History', 'Politics', 'Photography'
];

interface InterestsUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentInterests: string[];
  userUid: string;
  userName?: string;
}

export default function InterestsUpdateModal({ 
  isOpen, 
  onClose, 
  currentInterests, 
  userUid,
  userName 
}: InterestsUpdateModalProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(currentInterests);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
    setError(''); // Clear error when user makes changes
  };

  const handleUpdateInterests = async () => {
    if (selectedInterests.length < 3) {
      setError('Please select at least 3 interests to continue.');
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    try {
      await updateUserInterests(userUid, selectedInterests);
      onClose();
    } catch (err) {
      console.error('Failed to update interests:', err);
      setError('Failed to update interests. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = async () => {
    try {
      await dismissInterestsUpdatePrompt(userUid);
      onClose();
    } catch (err) {
      console.error('Failed to dismiss prompt:', err);
      // Still close the modal even if dismiss fails
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-800 mb-2">
              Welcome back{userName ? `, ${userName}` : ''}!
            </h2>
            <p className="text-stone-600 text-lg">
              We've made some exciting updates to Oriteria. Let's refresh your interests to get you the best personalized content.
            </p>
          </div>

          {/* Current interests display */}
          {currentInterests.length > 0 && (
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-stone-800 mb-2">Your Current Interests:</h3>
              <div className="flex flex-wrap gap-2">
                {currentInterests.map(interest => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Interest selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-stone-800 mb-3">
              Select your interests (minimum 3):
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ALL_INTERESTS.map(interest => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    selectedInterests.includes(interest)
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md transform scale-105' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Selected count */}
          <div className="mb-6 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-800">
                {selectedInterests.length} / 3 minimum selected
              </span>
              {selectedInterests.length >= 3 && (
                <span className="text-green-600 text-sm">✓ Ready to continue</span>
              )}
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg border border-red-200">
              {error}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleUpdateInterests}
              disabled={isSubmitting || selectedInterests.length < 3}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Updating...
                </div>
              ) : (
                'Update My Interests'
              )}
            </button>
            
            <button
              onClick={handleSkip}
              className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-300 transition-all duration-200"
            >
              Skip for Now
            </button>
          </div>

          {/* Info text */}
          <p className="text-xs text-gray-500 text-center mt-4">
            You can always update your interests later in Settings
          </p>
        </div>
      </div>
    </div>
  );
} 