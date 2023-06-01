import Bookshelf from '@/components/Bookshelf';
import BooksTable from '@/components/BooksTable';
import { Separator } from '@/components/ui/separator';

export default async function Page() {
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <Bookshelf />
      <Separator className="my-4" />
      {/* @ts-expect-error Async Server Component */}
      <BooksTable />
    </div>
  );
}
