import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css";
import "../styles/highlight.css";
import { ConsoleSuppressionScript } from "../components/ConsoleSuppressionScript";
import { buildMetadata } from "../lib/buildMeta";
import { getDefaultMetadata } from "../lib/seoDefaults";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Generate comprehensive metadata with Open Graph and Twitter Cards
export const metadata: Metadata = {
  ...buildMetadata(getDefaultMetadata()),
  
  // Favicon and app icons
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  
  // PWA manifest
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" />
      </head>
      <body>
        <ConsoleSuppressionScript />
        {children}
      </body>
    </html>
  );
}
