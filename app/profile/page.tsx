import Bookshelf from '@/components/Bookshelf';
import BooksTable from '@/components/BooksTable';
import { Separator } from '@/components/ui/separator';

export default async function Page() {
  return (
    <div className="p-2 md:px-8 lg:px-12 justify-center flex flex-col gap-2 lg:flex-row">
      {/* @ts-expect-error Async Server Component */}
      <Bookshelf />
      {/* @ts-expect-error Async Server Component */}
      <BooksTable />
    </div>
  );
}
