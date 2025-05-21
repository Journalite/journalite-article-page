import { generateUserStaticParams } from '@/utils/staticParamsUtils';
import FollowingClient from '@/components/FollowingClient';

// Forcing dynamic rendering for this route
export const dynamic = 'force-dynamic';

// This generates the static paths for pre-rendering
export async function generateStaticParams() {
  return generateUserStaticParams('following');
}

// Server component
export default function FollowingPage({ params }: { params: { username: string } }) {
  return <FollowingClient username={params.username} />;
} 