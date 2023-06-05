'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useSession } from 'next-auth/react';
import { EditShelf } from './EditShelf';
import { DeleteShelf } from './DeleteShelf';

export default function Shelf({ id, name }: { id: string; name: string }) {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const [form, setForm] = useState({
    name: name,
  });
  const { status } = useSession();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleEditShelf = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const response = await fetch(`/api/bookshelves/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    if (response) {
      setShowEditDialog(false);
      router.refresh();
    }
  };

  const deleteShelf = async (id: string): Promise<void> => {
    await fetch(`/api/bookshelves/${id}`, {
      method: 'DELETE',
    });
    router.refresh();
  };

  const handleUnauthenticatedClick = async () => {
    toast({
      description:
        'This is a demo page. You must have an account to perform shelf actions.',
    });
  };

  return (
    <div className="grid grid-cols-3 items-center gap-4">
      {name}
      {status === 'authenticated' ? (
        <EditShelf
          showEditDialog={showEditDialog}
          setShowEditDialog={setShowEditDialog}
          handleEditShelf={handleEditShelf}
          handleChange={handleChange}
          form={form}
        />
      ) : (
        <Button
          type="button"
          variant="outline"
          onClick={handleUnauthenticatedClick}
        >
          Edit
        </Button>
      )}
      {status === 'authenticated' ? (
        <DeleteShelf id={id} deleteShelf={deleteShelf} />
      ) : (
        <Button
          type="button"
          variant="outline"
          onClick={handleUnauthenticatedClick}
        >
          Delete
        </Button>
      )}
    </div>
  );
}
