// import Book from './book.jsx';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function List({ id, name }: { id: string; name: string }) {
  const router = useRouter();

  async function editList(id: string): Promise<void> {
    await fetch(`/api/bookshelves/${id}`, {
      method: 'PATCH',
    });
    router.refresh();
  }

  async function deleteList(id: string): Promise<void> {
    await fetch(`/api/bookshelves/${id}`, {
      method: 'DELETE',
    });
    router.refresh();
  }
  return (
    <>
      <Link href="api/bookshelves">
        <button onClick={() => editList}>Edit</button>
      </Link>
      <Link href="api/bookshelves">
        <button onClick={() => deleteList}>Delete</button>
      </Link>
    </>
  );
}
