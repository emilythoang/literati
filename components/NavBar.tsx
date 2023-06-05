'use client';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import SearchBar from './SearchBar';
import Link from 'next/link';
import User from './User';
import { useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { GiBookshelf } from 'react-icons/gi';

export default function NavBar() {
  return (
    <>
      <MobileNav />
      <MainNav />
    </>
  );
}

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const navigate = () => {
    setOpen(false);
  };
  return (
    <div className="min-w-screen mx-4 my-2 flex justify-between md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <LuMenu className="h-10 w-10" />
        </SheetTrigger>
        <SheetContent position="left" size="full">
          <SheetHeader className="p-4">
            <GiBookshelf className="h-10 w-10 " />
            <SheetTitle className="text-left text-6xl font-bold">
              Literati
            </SheetTitle>
          </SheetHeader>
          <div className=" flex flex-col">
            <Link
              href="/"
              className="p-4 text-2xl text-gray-600 underline-offset-4 hover:underline"
              onClick={navigate}
            >
              Home
            </Link>
            <Link
              href="/discover"
              className="p-4 text-2xl text-gray-600 underline-offset-4 hover:underline"
              onClick={navigate}
            >
              Discover
            </Link>
            <Link
              href="/profile"
              className="p-4 text-2xl text-gray-600 underline-offset-4 hover:underline"
              onClick={navigate}
            >
              Profile
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex">
        <SearchBar />
        <User />
      </div>
    </div>
  );
};

export const MainNav = () => {
  return (
    <nav className="mx-8 my-3 hidden items-center justify-between md:flex lg:mx-12">
      <div className="flex items-center gap-8 lg:gap-10">
        <Link
          href="/"
          className="flex items-center text-lg font-bold underline-offset-4 hover:underline"
        >
          <GiBookshelf className="mr-2 h-10 w-10 " />
          Literati
        </Link>
        <Link
          href="/discover"
          className="text-lg text-gray-600 underline-offset-4 hover:underline"
        >
          Discover
        </Link>
        <Link
          href="/profile"
          className="text-lg text-gray-600 underline-offset-4 hover:underline"
        >
          Profile
        </Link>
      </div>
      <div className="flex items-center gap-8 lg:gap-10">
        <SearchBar />
        <User />
      </div>
    </nav>
  );
};
