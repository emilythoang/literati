import Bookshelf from '@/components/Bookshelf';
import BooksTable from '@/components/BooksTable';
import { Separator } from '@/components/ui/separator';

export default async function Page() {
  return (
    <div className="flex flex-col justify-between p-4 md:px-8 lg:flex-row lg:gap-10 lg:px-12">
      {/* @ts-expect-error Async Server Component */}
      <Bookshelf />
      <Separator orientation="horizontal" className="my-4 lg:hidden" />
      {/* @ts-expect-error Async Server Component */}
      <BooksTable />
    </div>
  );
}
