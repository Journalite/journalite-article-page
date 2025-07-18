"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/clientApp';
import { createUserProfile, isUsernameTaken, getUserProfile, getUserProfileByEmail } from '../../services/userService';

async function handleEmailSignUp(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
    }
    console.log('Sign-up successful', userCredential.user);
    return userCredential;
  } catch (error) {
    console.error('Sign-up failed', error);
    throw error;
  }
}

async function handleGoogleSignUp(router: any) {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (!user.email) {
      console.error('Google sign-up error: No email associated with the Google account.');
      throw new Error('Google account has no email. Please try a different account or method.');
    }

    // Check if a profile already exists for this email
    const existingProfileByEmail = await getUserProfileByEmail(user.email);

    if (existingProfileByEmail) {
      // User already exists in Firestore (likely signed up via email/password or previously with Google)
      // Simply log them in by redirecting to the homepage.
      // Firebase Auth signInWithPopup would have already signed them into their Firebase Auth account.
      console.log('Google sign-up attempt for existing email. Logging in instead.', user.email);
      router.push('/');
      return; // Stop further processing for new user creation
    }

    // If no profile by email, it's a truly new user to our system.
    // Proceed to create a profile for them.
    console.log('New user via Google sign-up, proceeding with profile creation.');

    // New user needs a profile - prepare data from Google account info
    const userDisplayName = user.displayName || '';
    const nameParts = userDisplayName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    // Generate a username from the email address (before the @ symbol)
    const emailUsername = user.email?.split('@')[0] || '';
    
    // Check if the username is already taken
    const isUsernameAvailable = !(await isUsernameTaken(emailUsername));
    
    if (isUsernameAvailable) {
      // Username is available, create profile with it
      await createUserProfile(user.uid, {
        firstName,
        lastName,
        username: emailUsername,
        email: user.email || ''
      });
      router.push('/select-interests');
    } else {
      // Username is taken, we'll let the user choose a new one in the profile setup page
      // But we still create a temporary profile with a random suffix
      const randomSuffix = Math.floor(Math.random() * 10000);
      await createUserProfile(user.uid, {
        firstName,
        lastName,
        username: `${emailUsername}${randomSuffix}`,
        email: user.email || ''
      });
      router.push('/profile-setup');
    }
    
    console.log('Google sign-up successful', user);
  } catch (error: any) {
    // Check specific Firebase error codes
    if (error.code === 'auth/account-exists-with-different-credential') {
      throw new Error('An account already exists with the same email address but different sign-in credentials. Please sign in using the original method.');
    }
    
    console.error('Google sign-up failed', error);
    throw error;
  }
}

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [customValidation, setCustomValidation] = useState<Record<string, string>>({});
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  
  const router = useRouter();

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value, validity } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
    
    // Clear previous validation message
    setCustomValidation({ ...customValidation, [name]: '' });
    
    // Add a custom validation message if empty
    if (validity.valueMissing) {
      let message = 'This field is required';
      if (name === 'email') message = 'Please enter your email address';
      if (name === 'password') message = 'Please enter a password';
      if (name === 'confirmPassword') message = 'Please confirm your password';
      if (name === 'firstName') message = 'Please enter your first name';
      if (name === 'lastName') message = 'Please enter your last name';
      if (name === 'username') message = 'Please choose a username';
      
      setCustomValidation({ ...customValidation, [name]: message });
    }
  };

  const checkUsername = async (username: string) => {
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
    
    // Email validation
    newTouchedFields.email = true;
    if (!email.trim()) {
      newValidation.email = 'Please enter your email address';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newValidation.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    // Password validation
    newTouchedFields.password = true;
    if (!password) {
      newValidation.password = 'Please enter a password';
      isValid = false;
    } else if (password.length < 6) {
      newValidation.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    
    // Confirm password validation
    newTouchedFields.confirmPassword = true;
    if (password !== confirmPassword) {
      newValidation.confirmPassword = 'Passwords do not match';
      isValid = false;
    }
    
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
    } else if (usernameAvailable === false) {
      newValidation.username = 'This username is already taken';
      isValid = false;
    }
    
    setTouchedFields({ ...touchedFields, ...newTouchedFields });
    setCustomValidation({ ...customValidation, ...newValidation });
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    if (usernameAvailable === false) {
      setCustomValidation({ ...customValidation, username: 'This username is already taken.' });
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await handleEmailSignUp(email, password);
      
      if (userCredential && userCredential.user) {
        await createUserProfile(userCredential.user.uid, { 
          firstName, 
          lastName, 
          username, 
          email 
        });
        router.push('/select-interests');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error: any) {
      let errorMessage = 'Failed to create account';
      if (error instanceof Error) {
        // Handle specific Firebase errors
        if (error.message.includes('email-already-in-use')) {
          errorMessage = 'This email is already registered. Please use a different email or sign in.';
          setCustomValidation({ ...customValidation, email: 'This email is already registered' });
        } else if (error.message.includes('invalid-email')) {
          errorMessage = 'Please enter a valid email address';
          setCustomValidation({ ...customValidation, email: 'Please enter a valid email address' });
        } else if (error.message.includes('weak-password')) {
          errorMessage = 'Password is too weak. Please use at least 6 characters.';
          setCustomValidation({ ...customValidation, password: 'Password is too weak' });
        } else if (error.message.includes('Username is already taken')) {
          errorMessage = 'This username is already taken. Please choose a different username.';
          setCustomValidation({ ...customValidation, username: 'This username is already taken' });
        }
      }
      setError(errorMessage);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Show validation styling only if field is touched
  const getInputClasses = (fieldName: string) => {
    const baseClasses = "w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg shadow-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-amber-500 focus:border-amber-500 placeholder-neutral-400 text-neutral-700";
    
    if (touchedFields[fieldName] && customValidation[fieldName]) {
      return `${baseClasses} border-red-400 focus:ring-red-400 focus:border-red-400 bg-red-50 text-red-700 placeholder-red-400`;
    }
    
    // Add green border for valid username
    if (fieldName === 'username' && username.length >= 2 && usernameAvailable === true) {
      return `${baseClasses} border-green-400 focus:ring-green-400 focus:border-green-400 bg-green-50 text-green-700 placeholder-green-400`;
    }
    
    return `${baseClasses} hover:border-neutral-400`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-100 flex font-sans">
      {/* Left content area */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-12 overflow-y-auto">
        <div className="w-full max-w-lg mx-auto">
          {/* Logo and tagline */}
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-stone-800">Journalite</h1>
            <div className="mt-3 text-lg text-stone-600">
              <p>Every thought has a doorway. This is yours.</p>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-3.5 bg-red-100 text-red-700 text-sm rounded-lg border border-red-200 transition-all duration-300 ease-in-out animate-fadeIn">
              {error}
            </div>
          )}

          {/* Registration form */}
          <form onSubmit={handleSubmit} className="space-y-5 w-full" noValidate>
            <div className="flex gap-4">
              <div className="w-1/2">
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
              
              <div className="w-1/2">
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
              {!customValidation.username && username.length >= 2 && usernameAvailable === true && (
                <p className="mt-1 text-sm text-green-500">Username is available</p>
              )}
              {!customValidation.username && username.length >= 2 && usernameAvailable === false && (
                <p className="mt-1 text-sm text-red-500">Username is already taken</p>
              )}
            </div>

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
              <input
                id="password"
                name="password"
                type="password"
                className={getInputClasses('password')}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handleBlur}
                required
              />
              {touchedFields.password && customValidation.password && (
                <p className="mt-1 text-sm text-red-500">{customValidation.password}</p>
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
                className="w-full flex items-center justify-center px-4 py-3.5 bg-stone-800 text-white rounded-lg shadow-md hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 ease-in-out transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating your account...
                  </>
                ) : (
                  <div className="flex items-center">
                    <span className="mr-2">→</span>
                    <span>Create your account</span>
                  </div>
                )}
              </button>
            </div>

            <div className="pt-2 text-center text-sm text-stone-600">
              <span className="mr-1.5">Already have an account?</span>
              <Link href="/login" className="font-medium text-amber-600 hover:text-amber-700 hover:underline transition-colors duration-150">
                Sign in
              </Link>
            </div>
          </form>

          {/* Social login options */}
          <div className="mt-8 space-y-4">
            <p className="text-center text-xs text-stone-500">OR</p>
            <button 
              className="w-full flex items-center justify-center px-4 py-3 border border-stone-300 bg-white text-stone-700 rounded-lg shadow-sm hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 ease-in-out transform hover:scale-[1.01] active:scale-[0.99]"
              onClick={async () => {
                try {
                  setIsLoading(true);
                  setError('');
                  await handleGoogleSignUp(router);
                } catch (err: any) {
                  console.error('Google sign-up error:', err);
                  
                  // Handle specific errors with user-friendly messages
                  if (err.message?.includes('account already exists')) {
                    setError('An account with this email already exists. Please use the sign-in page or a different email.');
                  } else if (err.code === 'auth/popup-closed-by-user') {
                    setError('Sign-in was cancelled. Please try again.');
                  } else if (err.code === 'auth/network-request-failed') {
                    setError('Network error. Please check your internet connection and try again.');
                  } else {
                    setError('Google sign-up failed. Please try again or use email registration.');
                  }
                } finally {
                  setIsLoading(false);
                }
              }}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-slate-800">Sign up with Google</span>
            </button>
          </div>

          {/* Bottom tagline */}
          <div className="mt-20 mb-8 text-slate-700 italic">
            <p>Words are the threads of thought.</p>
          </div>
        </div>
      </div>

      {/* Right image area - Custom SVG Background */}
      <div className="hidden md:block md:w-1/2 relative bg-gradient-to-br from-amber-50 to-stone-100">
        {/* Custom SVG Pattern Background */}
        <svg
          className="absolute inset-0 w-full h-full object-cover"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fefbf3" />
              <stop offset="100%" stopColor="#f5f5f0" />
            </linearGradient>
            <pattern id="gridPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e7e5e4" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          
          {/* Background */}
          <rect width="800" height="600" fill="url(#bgGradient)" />
          <rect width="800" height="600" fill="url(#gridPattern)" />
          
          {/* Abstract geometric shapes representing creativity and writing */}
          <circle cx="150" cy="120" r="60" fill="#f59e0b" opacity="0.1" />
          <circle cx="650" cy="480" r="80" fill="#d97706" opacity="0.08" />
          
          {/* Floating writing elements */}
          <g opacity="0.15">
            <rect x="200" y="200" width="180" height="6" rx="3" fill="#92400e" />
            <rect x="200" y="220" width="120" height="4" rx="2" fill="#92400e" />
            <rect x="200" y="235" width="160" height="4" rx="2" fill="#92400e" />
            <rect x="200" y="250" width="90" height="4" rx="2" fill="#92400e" />
          </g>
          
          <g opacity="0.12">
            <rect x="450" y="150" width="200" height="6" rx="3" fill="#78716c" />
            <rect x="450" y="170" width="140" height="4" rx="2" fill="#78716c" />
            <rect x="450" y="185" width="180" height="4" rx="2" fill="#78716c" />
            <rect x="450" y="200" width="110" height="4" rx="2" fill="#78716c" />
          </g>
          
          {/* Feather pen illustration */}
          <g transform="translate(300, 350)" opacity="0.1">
            <path d="M0 0 Q10 -5 20 0 Q15 10 10 20 Q5 15 0 10 Z" fill="#a16207" />
            <path d="M20 0 L80 -40 Q85 -45 90 -40 L85 -35 L25 5 Z" fill="#d97706" />
            <line x1="25" y1="5" x2="40" y2="-15" stroke="#92400e" strokeWidth="1" />
            <line x1="35" y1="-5" x2="50" y2="-25" stroke="#92400e" strokeWidth="1" />
            <line x1="45" y1="-15" x2="60" y2="-35" stroke="#92400e" strokeWidth="1" />
          </g>
          
          {/* Decorative dots */}
          <circle cx="100" cy="300" r="3" fill="#d97706" opacity="0.2" />
          <circle cx="120" cy="320" r="2" fill="#f59e0b" opacity="0.3" />
          <circle cx="700" cy="100" r="4" fill="#92400e" opacity="0.15" />
          <circle cx="720" cy="130" r="2" fill="#a16207" opacity="0.25" />
          
          {/* Abstract book/journal shapes */}
          <g transform="translate(500, 350)" opacity="0.08">
            <rect x="0" y="0" width="80" height="100" rx="4" fill="#78716c" />
            <rect x="10" y="10" width="60" height="80" rx="2" fill="#a8a29e" />
            <rect x="15" y="20" width="50" height="3" rx="1.5" fill="#78716c" />
            <rect x="15" y="30" width="35" height="2" rx="1" fill="#78716c" />
            <rect x="15" y="37" width="40" height="2" rx="1" fill="#78716c" />
          </g>
        </svg>
        
        {/* Overlay gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-stone-100/40"></div>
      </div>
    </div>
  );
} 