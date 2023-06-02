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
    <div className="flex justify-between min-w-screen mx-4 my-2 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <LuMenu className="w-10 h-10" />
        </SheetTrigger>
        <SheetContent position="left" size="full">
          <SheetHeader className="p-4">
            <GiBookshelf className="w-10 h-10 " />
            <SheetTitle className="text-6xl text-left font-bold">
              Literati
            </SheetTitle>
          </SheetHeader>
          <div className=" flex flex-col">
            <Link
              href="/"
              className="text-2xl text-gray-600 p-4"
              onClick={navigate}
            >
              Home
            </Link>
            <Link
              href="/discover"
              className="text-2xl text-gray-600 p-4"
              onClick={navigate}
            >
              Discover
            </Link>
            <Link
              href="/profile"
              className="text-2xl text-gray-600 p-4"
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
    <nav className="hidden justify-between items-center mx-8 my-3 md:flex lg:mx-12">
      <div className="flex items-center gap-8 lg:gap-10">
        <Link href="/" className="flex items-center text-lg font-bold">
          <GiBookshelf className="w-10 h-10 mr-2 " />
          Literati
        </Link>
        <Link href="/discover" className="text-gray-600 text-lg">
          Discover
        </Link>
        <Link href="/profile" className="text-gray-600 text-lg">
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
