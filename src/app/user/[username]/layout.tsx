import { Metadata, Viewport } from 'next'

// Export metadata for better SEO
export const metadata: Metadata = {
  title: 'User Profile | Oriteria',
  description: 'View user profile and articles',
}

// Export viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 