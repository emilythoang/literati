'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState, ChangeEvent } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Shelf({ id, name }: { id: string; name: string }) {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    name: name,
  });

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

  return (
    <div>
      {name}
      <>
        <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
          <DialogTrigger asChild>
            <Button type="button" variant="outline">
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleEditShelf}>
              <DialogHeader>
                <DialogTitle>Edit shelf</DialogTitle>
                <DialogDescription>
                  Make changes to your shelf here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </>
      <>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete this shelf?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                shelf and remove its data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => deleteShelf(id)}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    </div>
  );
}
