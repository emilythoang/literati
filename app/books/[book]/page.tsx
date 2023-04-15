import Book from '@/ui/Book';

export default async function Page({ params }: { params: { book: string } }) {
  const id = params.book;
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <Book isbn={id} key={id} displayGetMore={false} />
    </div>
  );
}
