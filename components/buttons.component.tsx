'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './buttons.component.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return (
      <>
        <Link href={'/profile'}>
          <Image src={session.user?.image ?? '/vercel.svg'}
            width={40} height={40} alt={session.user?.name ?? ''} className="rounded ml-2"
          />
        </Link>
        <SignOutButton />
      </>
    );
  }

  return (
    <>
      <button type="button" className={styles.btn} onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}

export function SignOutButton() {
  return <>
    <button type="button" className={styles.btn} onClick={() => signOut()}>
      Sign out
    </button>
  </>;
}