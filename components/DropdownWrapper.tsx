import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { prisma } from '@/db';
import { getServerSession } from 'next-auth';
import Dropdown from './Dropdown';
import { BookData } from '@/types';
import { Bookshelf } from '@prisma/client';

export default async function DropdownWrapper({
  bookData,
}: {
  bookData: BookData;
}) {
  const session = await getServerSession(authOptions);
  let shelves: Bookshelf[];
  if (session) {
    shelves = await prisma.bookshelf.findMany({
      where: { userId: session.user.id },
    });
  } else shelves = [];
  return (
    <>
      <Dropdown shelvesData={shelves} bookData={bookData} />
    </>
  );
}
