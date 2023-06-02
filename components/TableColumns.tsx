'use client';

import { Author, Bookshelf } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { LuArrowUpDown, LuMoreHorizontal } from 'react-icons/lu';
import { DataTableColumnHeader } from './ui/data-table-column-header';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Book = {
  isbn: string;
  image: string;
  title: string;
  authors: string[];
  bookshelves: string[];
};

export const columns: ColumnDef<Book>[] = [
  { accessorKey: 'isbn' },
  {
    accessorKey: 'image',
    header: 'Cover',
    cell: ({ row }) =>
      row.getValue('image') ? (
        <Image
          src={row.getValue('image')}
          alt={row.getValue('title')}
          width={100}
          height={100}
        />
      ) : (
        <div className="w-[150px] h-[250px] flex justify-center items-center border">
          No image available
        </div>
      ),
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <Link href={`/books/${row.getValue('isbn')}`}>
          {row.getValue('title')}
        </Link>
      );
    },
  },
  {
    accessorKey: 'authors',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Authors" />
    ),
    cell: ({ row }) => {
      let authors: Author[] = row.getValue('authors');
      return authors.map((author) => <p key={author.id}>{author.name}</p>);
    },
  },
  {
    accessorKey: 'bookshelves',
    header: 'Bookshelves',
    cell: ({ row }) => {
      let bookshelves: Bookshelf[] = row.getValue('bookshelves');
      return bookshelves.map((bookshelf) => (
        <p key={bookshelf.id}>{bookshelf.name}</p>
      ));
    },
  },
];
