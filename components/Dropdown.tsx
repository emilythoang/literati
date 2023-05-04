'use client';
import { List } from '@prisma/client';
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

export default function Dropdown({
  items,
  bookData,
}: {
  items: List[];
  bookData: BookData;
}) {
  const getInitialState = async () => {
    const initialChecks: CheckedLists = {};
    const params = new URLSearchParams();
    params.set('isbn', bookData.isbn);
    const urlParams = params.toString();
    for (let item of items) {
      const res = await fetch(`/api/bookshelves/${item.id}/books?${urlParams}`);
      const check = await res.json();
      initialChecks[item.id] = check;
    }
    return initialChecks;
  };
  const [checkedLists, setCheckedLists] = useState<CheckedLists>({});
  useEffect(() => {
    let ignore = false;
    getInitialState().then((result) => {
      if (!ignore) {
        setCheckedLists(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  const handleCheck = async (id: string) => {
    const params = new URLSearchParams();
    params.set('isbn', bookData.isbn);
    const urlParams = params.toString();
    const listChecked = checkedLists[id];
    if (listChecked) {
      // remove book from bookshelf
      await fetch(`/api/bookshelves/${id}/books?${urlParams}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      // add book to bookshelf
      await fetch(`/api/bookshelves/${id}/books?${urlParams}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });
    }
    const updatedState = { ...checkedLists, [id]: !listChecked };
    setCheckedLists(updatedState);
  };

  const lists = items.map((list: List) => {
    return (
      <Item
        key={list.id}
        id={list.id}
        name={list.name}
        checkedLists={checkedLists}
        handleCheck={handleCheck}
        book={bookData}
      />
    );
  });

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Library />
            {JSON.stringify(checkedLists)}
            Add book to list
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">{lists}</DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

function Item({
  name,
  id,
  checkedLists,
  handleCheck,
  book,
}: {
  name: string;
  id: string;
  checkedLists: CheckedLists;
  handleCheck: (id: string) => void;
  book: BookData;
}) {
  return (
    <DropdownMenuCheckboxItem
      checked={checkedLists[id]}
      onCheckedChange={() => handleCheck(id)}
    >
      {name}
    </DropdownMenuCheckboxItem>
  );
}
