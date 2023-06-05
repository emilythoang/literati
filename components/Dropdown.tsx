'use client';
import { Bookshelf } from '@prisma/client';
import { Library } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BookData } from '@/types';
import { CheckedLists } from '@/types';
import { useToast } from '@/components/ui/use-toast';
import { useSession } from 'next-auth/react';

export default function Dropdown({
  shelvesData,
  bookData,
}: {
  shelvesData: Bookshelf[];
  bookData: BookData;
}) {
  const { status } = useSession();

  const getInitialState = async () => {
    const initialShelves: CheckedLists = {};
    const params = new URLSearchParams();
    params.set('isbn', bookData.isbn);
    const urlParams = params.toString();
    for (let shelf of shelvesData) {
      const res = await fetch(
        `/api/bookshelves/${shelf.id}/books?${urlParams}`
      );
      const check = await res.json();
      initialShelves[shelf.id] = check;
    }
    return initialShelves;
  };
  const [bookInclusiveLists, setBookInclusiveLists] = useState<CheckedLists>(
    {}
  );

  useEffect(() => {
    let ignore = false;
    getInitialState().then((result) => {
      if (!ignore) {
        setBookInclusiveLists(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  const { toast } = useToast();

  const handleUnauthenticatedClick = async () => {
    toast({
      description: 'You must have an account to add a book.',
    });
  };

  const handleCheck = async (shelfId: string) => {
    const params = new URLSearchParams();
    params.set('isbn', bookData.isbn);
    const urlParams = params.toString();
    const bookIncluded = bookInclusiveLists[shelfId];
    if (bookIncluded) {
      // remove book from bookshelf
      await fetch(`/api/bookshelves/${shelfId}/books?${urlParams}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast({
        description: 'The book has been successfully removed from your shelf.',
      });
    } else {
      // add book to bookshelf
      await fetch(`/api/bookshelves/${shelfId}/books?${urlParams}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });
      toast({
        description: 'The book has been successfully added to your shelf.',
      });
    }
    const updatedState = { ...bookInclusiveLists, [shelfId]: !bookIncluded };
    setBookInclusiveLists(updatedState);
  };

  const lists = shelvesData.map((shelf: Bookshelf) => {
    return (
      <List
        key={shelf.id}
        shelfId={shelf.id}
        name={shelf.name}
        bookInclusiveLists={bookInclusiveLists}
        handleCheck={handleCheck}
      />
    );
  });

  return (
    <>
      {status === 'authenticated' ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Library />
              Add book to shelf
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">{lists}</DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button variant="outline" onClick={handleUnauthenticatedClick}>
          <Library />
          Add book to shelf
        </Button>
      )}
    </>
  );
}

function List({
  name,
  shelfId,
  bookInclusiveLists,
  handleCheck,
}: {
  name: string;
  shelfId: string;
  bookInclusiveLists: CheckedLists;
  handleCheck: (shelfId: string) => void;
}) {
  return (
    <DropdownMenuCheckboxItem
      checked={bookInclusiveLists[shelfId]}
      onCheckedChange={() => handleCheck(shelfId)}
    >
      {name}
    </DropdownMenuCheckboxItem>
  );
}
