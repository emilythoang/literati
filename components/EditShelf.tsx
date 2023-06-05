import { Dispatch, SetStateAction, FormEvent, ChangeEvent } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export const EditShelf = ({
  showEditDialog,
  setShowEditDialog,
  handleEditShelf,
  handleChange,
  form,
}: {
  showEditDialog: boolean;
  setShowEditDialog: Dispatch<SetStateAction<boolean>>;
  handleEditShelf: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  form: { name: string };
}) => {
  return (
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
              Make changes to your shelf here. Click save when you&apos;re done.
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
  );
};
