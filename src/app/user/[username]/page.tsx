import { generateUserStaticParams } from '@/utils/staticParamsUtils';
import ProfileClient from '@/components/ProfileClient';

// Forcing dynamic rendering for this route
export const dynamic = 'force-dynamic';

// This generates the static paths for pre-rendering
export async function generateStaticParams() {
  return generateUserStaticParams('profile');
}

// Server component
export default function UserProfilePage({ params }: { params: { username: string } }) {
  return <ProfileClient username={params.username} />;
} 