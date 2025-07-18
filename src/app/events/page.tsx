"use client";

import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// Theme toggle component
const ThemeToggle = ({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 p-3 bg-white/90 dark:bg-stone-800/90 backdrop-blur-sm border border-stone-200 dark:border-stone-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      style={{ 
        top: 'max(1rem, env(safe-area-inset-top))', 
        right: 'max(1rem, env(safe-area-inset-right))' 
      }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        // Sun icon for light mode
        <svg
          className="w-5 h-5 text-amber-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          className="w-5 h-5 text-stone-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
};

const EventsPage: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let initialTheme = false;
    if (savedTheme) {
      initialTheme = savedTheme === 'dark';
    } else {
      initialTheme = systemPrefersDark;
    }
    
    setIsDark(initialTheme);
    
    // Apply theme immediately to prevent flash
    if (initialTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDark, mounted]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    console.log('Theme toggled to:', newTheme ? 'dark' : 'light');
  };

  return (
    <>
      <Head>
        <title>Events | Oriteria</title>
        <meta name="description" content="A note on what's to come with Oriteria Events." />
      </Head>
      <div className="min-h-screen">
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        <div className="min-h-screen flex items-center justify-center py-4 md:py-8 px-4 bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800 transition-colors duration-500">
        <div className="w-full max-w-2xl bg-white dark:bg-stone-900 ring-1 ring-stone-200/50 dark:ring-stone-800 shadow-xl rounded-sm p-4 md:p-8 font-serif transition-colors duration-500">
                    <div className="prose prose-sm md:prose-base prose-stone dark:prose-invert mx-auto max-w-none">
            <p className="text-right text-xs md:text-sm text-stone-500 dark:text-stone-400 font-sans mb-4">
              July 5, 2025
            </p>
            <h1 className="text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4 font-serif">
              A Note on What's to Come,
            </h1>
            <p className="text-base leading-relaxed mt-4">
              We wanted to share a glimpse into a new dimension we're building for
              Oriteria—something we call Events. It's a feature born from a
              simple idea: that stories shouldn't just end on the page. They
              should be a starting point for connection, discussion, and
              real-world action.
            </p>
            <p>
              Imagine reading an article about a breakthrough in science and then
              being able to RSVP for a live Q&A with the author. Or finishing a
              piece on local history and joining a guided walking tour event right
              from the app. That's the world we're building.
            </p>
            <p>Events will be a space for:</p>
                         <ul className="list-disc list-inside space-y-1 my-3 ml-4">
               <li>Campus talks and debates</li>
               <li>Community reading groups</li>
               <li>Interactive workshops and webinars</li>
               <li>Live story drops from your favorite writers</li>
             </ul>
            <p>
              This is more than just a feature; it's our commitment to making
              Oriteria a place where the lines between reading, learning, and
              living are beautifully blurred.
            </p>
            <p>
              For now, this is just a placeholder for what's to come. We're hard
              at work bringing it to life and can't wait to share it with you.
            </p>
                         <p className="mt-6">
               Warmly,
               <br />
               <br />
               The Oriteria Team At Dovrel & Company
             </p>
           </div>
           <div className="text-left mt-8">
             <Link href="/" className="font-sans text-sm font-semibold text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-300 inline-flex items-center group">
               <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
               Back to Home
             </Link>
                      </div>
         </div>
       </div>
       </div>
     </>
   );
 };

export default EventsPage;
