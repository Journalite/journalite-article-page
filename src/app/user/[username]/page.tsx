import ProfileClient from '@/components/ProfileClient';

// For dynamic routing, return empty array to allow on-demand generation
export async function generateStaticParams() {
  return []
}

// Server component
export default function UserProfilePage({ params }: { params: { username: string } }) {
  return <ProfileClient username={params.username} />;
} 