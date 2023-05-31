'use client';
import { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SearchInput } from './SearchInput';

export default function SearchBar() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <div className="md:hidden">
        <Sheet open={showSearch} onOpenChange={setShowSearch}>
          <SheetTrigger asChild>
            <LuSearch className=" mr-2 h-10 w-10 md:hidden" />
          </SheetTrigger>
          <SheetContent position="top">
            <SearchInput setShowSearch={setShowSearch} />
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:block">
        <SearchInput setShowSearch={() => setShowSearch(false)} />
      </div>
    </>
  );
}
