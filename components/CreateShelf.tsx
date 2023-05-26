'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { getSession } from 'next-auth/react';

export default function CreateShelf() {
  const { toast } = useToast();
  const router = useRouter();
  const [shelf, setShelf] = useState('');
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const session = await getSession();
      if (!session) {
        throw new Error('You must be logged in to create a shelf.');
      }
      const body = { shelf };
      await fetch(`/api/bookshelves`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setShelf('');
      router.refresh();
    } catch (error) {
      toast({
        description: (error as Error).message,
      });
    }
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <h2>Add shelf</h2>
      <label>
        Name
        <br />
        <input
          type="text"
          name="bookshelf"
          value={shelf}
          onChange={(e) => {
            setShelf(e.target.value);
          }}
          required
        />
      </label>
      <div className="">
        <input type="submit" value="Submit" />
        <Link href="/profile">Cancel</Link>
      </div>
    </form>
  );
}
