import { DataTable } from './ui/data-table';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Book = {
  image: string;
  title: string;
  authors: string[];
  bookshelves: string[];
};

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: 'image',
    header: 'Image',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'authors',
    header: 'Authors',
  },
  {
    accessorKey: 'bookshelves',
    header: 'Bookshelves',
  },
];

async function getData(): Promise<Book[]> {
  // Fetch data from your API here.
  return [
    {
      image: '728ed52f',
      title: 'title',
      authors: ['author'],
      bookshelves: ['bookshelf'],
    },
    // ...
  ];
}

export default async function BooksTable() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
