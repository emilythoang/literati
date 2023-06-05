'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LuUser, LuLogOut } from 'react-icons/lu';
import { FaUserCircle } from 'react-icons/fa';

export default function User() {
  const { data: session } = useSession();
  if (session) {
    const image = session.user.image;
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage
                className="h-full w-full rounded-[inherit] object-cover"
                src={image ? image : ''}
                alt="avatar"
              />
              <AvatarFallback>
                <FaUserCircle className="h-full w-full rounded-[inherit] object-cover" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile" className="flex w-full">
                <LuUser className="mr-2 h-4 w-4" /> <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="api/auth/signout" className="flex w-full">
                <LuLogOut className="mr-2 h-4 w-4" /> <span>Sign Out</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        <Link href="/signin">Sign In</Link>
      </div>
    );
  }
}
