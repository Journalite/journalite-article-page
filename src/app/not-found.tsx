import Link from 'next/link'
import styles from '@/styles/home.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.errorAlert}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p>This could be because the user profile doesn&apos;t exist or the URL is incorrect.</p>
        <Link href="/" className={styles.backLink}>
          Back to home
        </Link>
      </div>
    </div>
  )
} 