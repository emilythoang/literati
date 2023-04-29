'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ListProps } from '../Bookshelf';
interface ListsDropdownProps {
  items: ListProps[];
}

export default function ListsDropdown({ items }: ListsDropdownProps) {
  const lists = items.map((list: ListProps) => {
    return <Item key={list.id} id={list.id} name={list.name} />;
  });
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger />
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
  return (
    <DropdownMenu.CheckboxItem checked={} onCheckedChange={}>
      <DropdownMenu.ItemIndicator></DropdownMenu.ItemIndicator>
      Checkbox item
    </DropdownMenu.CheckboxItem>
  );
}
