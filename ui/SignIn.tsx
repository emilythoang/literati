'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function SignIn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Link href="api/auth/signout">Sign Out</Link>
        <p>Signed in as {JSON.stringify(session)}</p>
      </>
    );
  } else {
    return (
      <>
        <Link href="/api/auth/signin">Sign In</Link>
      </>
    );
  }
}
