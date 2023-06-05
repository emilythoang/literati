import { DataTable } from './ui/data-table';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Book, columns } from './TableColumns';

async function getData(userId: string): Promise<Book[]> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/${userId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
}

export default async function BooksTable() {
  const session = await getServerSession(authOptions);
  const userId = session ? session.user.id : 'demo';
  const books = await getData(userId);
  return (
    <div className="grow">
      <DataTable columns={columns} data={books} />
    </div>
  );
}
