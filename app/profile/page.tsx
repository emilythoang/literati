import Bookshelf from '@/components/Bookshelf';
import BooksTable from '@/components/BooksTable';
import { Separator } from '@/components/ui/separator';

export default async function Page() {
  return (
    <div className="p-4 justify-between md:px-8 lg:px-12 flex flex-col lg:flex-row lg:gap-10">
      {/* @ts-expect-error Async Server Component */}
      <Bookshelf />
      <Separator orientation="horizontal" className="my-4 lg:hidden" />
      {/* @ts-expect-error Async Server Component */}
      <BooksTable />
    </div>
  );
}
