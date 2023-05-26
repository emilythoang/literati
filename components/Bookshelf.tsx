import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { prisma } from '@/db';
import CreateShelf from '@/components/CreateShelf';
import Shelf from './Shelf';

import { Bookshelf as BookshelfType } from '@prisma/client';

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
    <>
      <CreateShelf />
      {bookshelves}
    </>
  );
}
