'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FaUserCircle } from 'react-icons/fa';

export default function User() {
  const { data: session } = useSession();
  if (session) {
    const image = session.user.image;
    return (
      <>
        <Link href="api/auth/signout">Sign Out</Link>
        <Avatar>
          <AvatarImage
            className="h-full w-full rounded-[inherit] object-cover"
            src={image}
            alt="avatar"
          />
          <AvatarFallback>
            <FaUserCircle className="h-full w-full rounded-[inherit] object-cover" />
          </AvatarFallback>
        </Avatar>
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
