import FollowersClient from '@/components/FollowersClient';

// For dynamic routing, return empty array to allow on-demand generation
export async function generateStaticParams() {
  return []
}

// Server component
export default function FollowersPage({ params }: { params: { username: string } }) {
  return <FollowersClient username={params.username} />;
} 