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
  if (!session) return;
  const userId = session.user.id;
  const books = await getData(userId);
  console.log(JSON.stringify(books));

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={books} />
    </div>
  );
}
