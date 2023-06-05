import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { prisma } from '@/db';
import CreateShelf from '@/components/CreateShelf';
import Shelf from './Shelf';
import { Separator } from '@/components/ui/separator';
import { Bookshelf as BookshelfType } from '@prisma/client';
import BooksTable from './BooksTable';

const fetchShelves = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return;
  }
  const data = await prisma.bookshelf.findMany({
    where: { userId: session.user.id },
  });
  const shelves = data.map((shelf: BookshelfType) => {
    return <Shelf key={shelf.id} id={shelf.id} name={shelf.name} />;
  });
  return shelves;
};

export default async function Bookshelf() {
  const bookshelves = await fetchShelves();

  return (
    <div className="flex flex-col lg:min-w-[280px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Bookshelves</h2>
        {bookshelves}
      </div>
      <Separator className="my-4" />
      <CreateShelf />
    </div>
  );
}
