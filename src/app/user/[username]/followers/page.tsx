import { generateUserStaticParams } from '@/utils/staticParamsUtils';
import FollowersClient from '@/components/FollowersClient';

// This generates the static paths for pre-rendering
export async function generateStaticParams() {
  return generateUserStaticParams('followers');
}

// Server component
export default function FollowersPage({ params }: { params: { username: string } }) {
  return <FollowersClient username={params.username} />;
} 