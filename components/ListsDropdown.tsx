import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { prisma } from '@/db';
import { getServerSession } from 'next-auth';
import ListsDropdown from './ui/Dropdown';

export default async function DropdownWrapper() {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('You must be logged in to have lists');
    return;
  }
  const data = await prisma.list.findMany({
    where: { userId: session.user.id },
  });

  const handleClick = async () => {};

  return (
    <>
      <ListsDropdown items={data} />
    </>
  );
}
