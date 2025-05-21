import { generateUserStaticParams } from '@/utils/staticParamsUtils';
import FollowingClient from '@/components/FollowingClient';

// This generates the static paths for pre-rendering
export async function generateStaticParams() {
  return generateUserStaticParams('following');
}

// Server component
export default function FollowingPage({ params }: { params: { username: string } }) {
  return <FollowingClient username={params.username} />;
} 