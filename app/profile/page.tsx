import Bookshelf from '@/ui/Bookshelf';

export default function Page() {
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <Bookshelf />
    </div>
  );
}
