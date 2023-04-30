'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ListsDropdownProps, ListProps } from '@/types';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GiBookshelf } from 'react-icons/gi';

export default function Dropdown({ items }: ListsDropdownProps) {
  const lists = items.map((list: ListProps) => {
    return <Item key={list.id} id={list.id} name={list.name} />;
  });
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger />
      <button
        className="w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
        aria-label="Add book to list"
      >
        <GiBookshelf />
      </button>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          {lists}
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function Item({ name, id }: { name: string; id: string }) {
  const router = useRouter();
  const [listChecked, setListChecked] = useState(false);

  const handleCheck = async () => {
    await fetch(`/api/bookshelves/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listChecked),
    });
    setListChecked(!listChecked);
    router.refresh();
  };

  return (
    <DropdownMenu.CheckboxItem
      checked={listChecked}
      onCheckedChange={handleCheck}
    >
      <DropdownMenu.ItemIndicator>RxCheck</DropdownMenu.ItemIndicator>
      {name}
    </DropdownMenu.CheckboxItem>
  );
}
