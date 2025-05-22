import React from 'react';
import FollowingClient from '@/components/FollowingClient';

// This generates the static paths for pre-rendering with fallback
export async function generateStaticParams() {
  // Hardcoded usernames for static generation
  return [
    { username: 'abdullahshittu.work' },
    { username: 'kc' },
    { username: 'abdulmalik' },
    { username: 'default' },
    { username: 'placeholder' },
    // Add more usernames if needed
  ];
}

// Server component that renders client component
export default function FollowingPage({ params }: { params: { username: string } }) {
  return <FollowingClient username={params.username} />;
} 