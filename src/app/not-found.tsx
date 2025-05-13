import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5efe0] flex items-center justify-center">
      <div className="max-w-lg px-6 py-12 text-center">
        <h1 className="text-6xl font-serif font-normal text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
        <p className="text-slate-700 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center px-5 py-3.5 bg-[#1a1a19] text-white rounded-md hover:bg-[#2a2a29] focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
          <span className="mr-2">→</span>
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
} 