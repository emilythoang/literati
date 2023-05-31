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

export default function NavBar() {
  return (
    <>
      <MobileNav />
      <MainNav />
    </>
  );
}

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between min-w-screen mx-4 mt-4 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <LuMenu className="w-10 h-10" />
        </SheetTrigger>
        <SheetContent position="left" size="full">
          <SheetHeader>
            <SheetTitle>Literati</SheetTitle>
          </SheetHeader>
          <div className=" flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/discover">Discover</Link>
            <Link href="/profile">Profile</Link>
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

const MainNav = () => {
  return (
    <nav className="hidden justify-between mx-16 mt-4 md:flex">
      <div className="flex">
        <Link href="/">Home</Link>
        <Link href="/discover">Discover</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <div className="flex justify-between">
        <SearchBar />
        <User />
      </div>
    </nav>
  );
};
