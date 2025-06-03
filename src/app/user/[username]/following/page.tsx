import React from 'react';
import FollowingClient from '@/components/FollowingClient';

// For dynamic routing, return empty array to allow on-demand generation
export async function generateStaticParams() {
  return []
}

// Server component that renders client component
export default function FollowingPage({ params }: { params: { username: string } }) {
  return <FollowingClient username={params.username} />;
} 