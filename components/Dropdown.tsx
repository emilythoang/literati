'use client';
import { List } from '@prisma/client';

import { Library } from 'lucide-react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { Dispatch, useState, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BookData } from '@/types';

type Checked = DropdownMenuCheckboxItemProps['checked'];

interface CheckedLists {
  [index: string]: boolean;
}

export default function Dropdown({
  items,
  bookData,
}: {
  items: List[];
  bookData: BookData;
}) {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);
  const [checkedLists, setCheckedLists] = useState<CheckedLists>(
    {} as CheckedLists
  );
  const lists = items.map((list: List) => {
    checkedLists[list.id] = false;
    return (
      <Item
        key={list.id}
        id={list.id}
        name={list.name}
        checkedLists={checkedLists}
        setCheckedLists={setCheckedLists}
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
            Add book to list
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {lists}
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

function Item({
  name,
  id,
  checkedLists,
  setCheckedLists,
  book,
}: {
  name: string;
  id: string;
  checkedLists: CheckedLists;
  setCheckedLists: Dispatch<SetStateAction<CheckedLists>>;
  book: BookData;
}) {
  const router = useRouter();

  const handleCheck = async () => {
    const params = new URLSearchParams();
    params.set('isbn', book.isbn);
    console.log(book.isbn);
    const urlParams = params.toString();

    const listChecked = checkedLists[id];
    if (listChecked) {
      // remove book from bookshelf
      await fetch(`/api/bookshelves/${id}/books?${urlParams}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
    } else {
      // add book to bookshelf
      await fetch(`/api/bookshelves/${id}/books?${urlParams}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
    }

    const updatedListsChecked = { ...checkedLists };
    updatedListsChecked[id] = !listChecked;
    setCheckedLists(updatedListsChecked);
    router.refresh();
  };

  return (
    <DropdownMenuCheckboxItem
      checked={checkedLists[id]}
      onCheckedChange={handleCheck}
    >
      {name}
    </DropdownMenuCheckboxItem>
  );
}
