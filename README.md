# Journalite

## Environment Variables and Security

For security reasons, API keys and other sensitive information should never be committed to version control. Instead, use environment variables as follows:

### Setting Up Environment Variables

1. Create a `.env.local` file in the root directory (this file is already ignored by git)
2. Add your Firebase configuration as follows:

```
# Firebase Config
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

3. For production environments, set these same environment variables on your hosting platform (Vercel, Netlify, etc.)

**IMPORTANT: Never commit files containing API keys or secrets to your repository.**

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

## Firebase Emulators

For local development, use Firebase emulators:

```bash
npx firebase emulators:start --only auth
```