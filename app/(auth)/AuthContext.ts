'use client';

import { SessionProvider } from 'next-auth/react';

export default function AuthContext({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
