import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { prisma } from '@/db';
import { getServerSession } from 'next-auth';
import Dropdown from './ui/Dropdown';

export default async function DropdownWrapper() {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('You must be logged in to add books to a list');
    return;
  }
  const data = await prisma.list.findMany({
    where: { userId: session.user.id },
  });

  return (
    <>
      <Dropdown items={data} />
    </>
  );
}
