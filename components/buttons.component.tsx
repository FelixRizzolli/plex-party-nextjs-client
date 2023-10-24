'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './buttons.component.module.scss';

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return <SignOutButton />;
  }

  return <>
    <button type="button" className={styles.btn} onClick={() => signIn()}>
      Sign in
    </button>
  </>;
}

export function SignOutButton() {
  return <>
    <button type="button" className={styles.btn} onClick={() => signOut()}>
      Sign out
    </button>
  </>;
}