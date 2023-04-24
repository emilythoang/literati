import Book from '@/ui/Book';
import Bookshelf from '@/ui/Bookshelf';

// async function getData() {
//   const res = await fetch(`${process.env.NEXTAUTH_URL}/api/discover`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   const data = await res.json();
//   const books = data.map((bookData: BookData) => {
//     return <Book props={bookData} key={bookData.isbn} displayGetMore={true} />;
//   });
//   return books;
// }

export default function Page() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Bookshelf />
    </div>
  );
}
