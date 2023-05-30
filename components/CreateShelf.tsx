'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { getSession } from 'next-auth/react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';

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
    <form onSubmit={handleSubmit}>
      <h2>Add shelf</h2>
      <Label htmlFor="bookshelf">Name</Label>
      <Input
        type="text"
        id="bookshelf"
        name="bookshelf"
        value={shelf}
        onChange={(e) => {
          setShelf(e.target.value);
        }}
        required
      />

      <div className="">
        <Button type="reset" variant="outline">
          Cancel
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
