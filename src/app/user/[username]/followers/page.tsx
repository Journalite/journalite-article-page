import { generateUserStaticParams } from '@/utils/staticParamsUtils';
import FollowersClient from '@/components/FollowersClient';

// Forcing dynamic rendering for this route
export const dynamic = 'force-dynamic';

// This generates the static paths for pre-rendering
export async function generateStaticParams() {
  return generateUserStaticParams('followers');
}

// Server component
export default function FollowersPage({ params }: { params: { username: string } }) {
  return <FollowersClient username={params.username} />;
} 