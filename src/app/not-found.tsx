import Link from 'next/link'
import styles from '@/styles/home.module.css'

export default function NotFound() {
  return (
    <div className={`${styles.container} min-h-screen flex items-center justify-center`}>
      <div className={`${styles.errorAlert} max-w-md text-center p-8 bg-white rounded-lg shadow-lg`}>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-4">The page you are looking for does not exist.</p>
        <p className="text-gray-500 text-sm mb-6">
          This could be because the user profile doesn&apos;t exist, the URL is incorrect, 
          or you may have been redirected here due to an authentication issue.
        </p>
        
        <div className="space-y-3">
          <Link 
            href="/" 
            className="block w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
          
          <Link 
            href="/login" 
            className="block w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
        
        <p className="text-xs text-gray-400 mt-4">
          If you continue to see this page unexpectedly, try refreshing or clearing your browser cache.
        </p>
      </div>
    </div>
  )
} 