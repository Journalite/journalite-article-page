"use client";

import React, { useState } from "react";
import styles from "./events.module.css";

// Define SVG icons directly in the component file for reliability
const SunIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const EventsPage: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`${styles.pageWrapper} ${
        theme === "dark" ? styles.darkMode : ""
      }`}
    >
      <div className={styles.themeToggleContainer}>
        <button onClick={toggleTheme} className={styles.themeToggleButton}>
          <SunIcon className={`${styles.toggleIcon} ${styles.sunIcon}`} />
          <MoonIcon className={`${styles.toggleIcon} ${styles.moonIcon}`} />
          <div className={styles.toggleThumb}></div>
        </button>
      </div>
      <div className={styles.letterContainer}>
        <div className={styles.letterContent}>
          <p className={styles.date}>July 5, 2025</p>
          <h1 className={styles.salutation}>A Note on What’s to Come,</h1>
          <p className={styles.paragraph}>
            We wanted to share a glimpse into a new dimension we're building for
            Journalite—something we call Events. It’s a feature born from a
            simple idea: that stories shouldn’t just end on the page. They
            should be a starting point for connection, discussion, and
            real-world action.
          </p>
          <p className={styles.paragraph}>
            Imagine reading an article about a breakthrough in science and then
            being able to RSVP for a live Q&A with the author. Or finishing a
            piece on local history and joining a guided walking tour event right
            from the app. That’s the world we’re building.
          </p>
          <p className={styles.paragraph}>Events will be a space for:</p>
          <ul className={styles.list}>
            <li>
              <span className={styles.listItem}>Campus talks and debates</span>
            </li>
            <li>
              <span className={styles.listItem}>Community reading groups</span>
            </li>
            <li>
              <span className={styles.listItem}>
                Interactive workshops and webinars
              </span>
            </li>
            <li>
              <span className={styles.listItem}>
                Live story drops from your favorite writers
              </span>
            </li>
          </ul>
          <p className={styles.paragraph}>
            This is more than just a feature; it’s our commitment to making
            Journalite a place where the lines between reading, learning, and
            living are beautifully blurred.
          </p>
          <p className={styles.paragraph}>
            For now, this is just a placeholder for what’s to come. We’re hard
            at work bringing it to life and can’t wait to share it with you.
          </p>
          <div className={styles.closing}>
            <p>Warmly,</p>
            <p className={styles.signature}>
              The Journalite Team At Dovrel & Company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
