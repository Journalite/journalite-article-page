import { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function MyProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 