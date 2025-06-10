'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import { UserProfile, getFollowing } from '@/services/userService';
import styles from '@/styles/home.module.css';
import FollowButton from '@/components/FollowButton';
import LeftSidebar from '@/components/LeftSidebar';

interface FollowingClientProps {
  username: string;
}

export default function FollowingClient({ username }: FollowingClientProps) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [following, setFollowing] = useState<UserProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserAndFollowing = async () => {
      setIsLoading(true);
      try {
        // First find the user by username
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('username', '==', username));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          setError(`User @${username} not found`);
          setIsLoading(false);
          return;
        }

        // Get the user data
        const userData = querySnapshot.docs[0].data() as UserProfile;
        setUser(userData);

        // Get all users that the user is following
        const followingList = await getFollowing(userData.uid, 100);
        setFollowing(followingList);
      } catch (err) {
        console.error('Error fetching following:', err);
        setError('Failed to load following');
      } finally {
        setIsLoading(false);
      }
    };

    if (username) {
      fetchUserAndFollowing();
    }
  }, [username]);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading following...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.errorAlert}>
          <p>{error}</p>
          <Link href="/" className={styles.backLink}>
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.container}>
        <div className={styles.errorAlert}>
          <p>User not found</p>
          <Link href="/" className={styles.backLink}>
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles['three-column-layout']}>
      {/* LEFT SIDEBAR */}
      <LeftSidebar 
        isAuthenticated={false}
        handleLogout={() => {}}
        toggleSidebar={() => {}}
        isSidebarCollapsed={false}
      />

      {/* CENTER COLUMN */}
      <main className={styles['center-column']}>
        <div className="mb-8">
          <Link href={`/user/${username}`} className={styles.backLink}>
            &larr; Back to {user.firstName}'s profile
          </Link>
          <h1 className={styles.sectionHeading}>Accounts {user.firstName} follows</h1>
          <p className="text-gray-500 mb-6">
            {following.length} {following.length === 1 ? 'account' : 'accounts'}
          </p>
        </div>

        {following.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Not following anyone yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {following.map((followedUser) => (
              <div key={followedUser.uid} className="flex items-center justify-between p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-100 max-w-3xl">
                <Link href={`/user/${followedUser.username}`} className="flex items-center group flex-1 min-w-0 mr-2 sm:mr-4 overflow-hidden">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium flex-shrink-0">
                    {followedUser.firstName.charAt(0)}{followedUser.lastName.charAt(0)}
                  </div>
                  <div className="ml-2 sm:ml-4 overflow-hidden max-w-[calc(100%-60px)]">
                    <div className="font-medium text-gray-900 group-hover:underline truncate">
                      {followedUser.firstName} {followedUser.lastName}
                    </div>
                    <div className="text-sm text-gray-500 truncate">@{followedUser.username}</div>
                    {followedUser.bio && (
                      <div className="mt-1 text-sm text-gray-600 line-clamp-1">
                        {followedUser.bio}
                      </div>
                    )}
                  </div>
                </Link>
                <FollowButton 
                  targetUserId={followedUser.uid} 
                  targetUsername={followedUser.username}
                  className="flex-shrink-0 min-w-[80px] px-3 py-1.5 sm:px-4 sm:py-2 text-sm"
                />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className={styles['right-sidebar']}>
        <h2 className={styles['sidebar-heading']}>About {user.firstName}</h2>
        <div className={styles.sidebarSection}>
          {user.bio && <p className="mb-4">{user.bio}</p>}
          <div className="flex space-x-4">
            <Link 
              href={`/user/${username}/followers`} 
              className="text-gray-600 hover:text-blue-600"
            >
              {user.followersCount || 0} Followers
            </Link>
            <Link 
              href={`/user/${username}/following`} 
              className="text-blue-600 font-medium"
            >
              {user.followingCount || 0} Following
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
} 