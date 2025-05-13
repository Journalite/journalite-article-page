import { ReactNode } from 'react';
import { auth } from '../firebase/clientApp';

interface FirebaseComponentProps {
  children?: ReactNode;
}

export default function FirebaseComponent({ children }: FirebaseComponentProps) {
  return <>{children}</>;
} 