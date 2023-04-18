import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isbn = searchParams.get('isbn');
  const link = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${process.env.BOOKS_API_KEY}`;
  console.log(link);
  let res = await fetch(link);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const book = data.items[0]['volumeInfo'] || {};
  return NextResponse.json(book);
}

export async function POST(request: Request) {
  const book = await request.json();
  return NextResponse.json({ message: 'Test' });
}

// export async function POST(request) {
//   const res = await request.json();
//   console.log(`res is ${JSON.stringify(res)}`);
//   let authors = res.book.authors;
//   if (Array.isArray(authors)) {
//     authors = res.book.authors.map((author) => {
//       return { name: author };
//     });
//   }

//   console.log(authors);
//   const book = await prisma.book.create({
//     data: {
//       title: res.book.title,
//       isbn: res.book.isbn13,
//       authors: {
//         connectOrCreate: {
//           where: {
//             name: res.book.authors,
//           },
//           create: {
//             name: res.book.authors,
//           },
//         },
//       },
//       image: res.book.image,
//     },
//   });
//   res.json(result);

//   const data = await res.json();
//   return NextResponse.json({ book });
// }

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get('id');
//   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   });
//   const product = await res.json();
//   return NextResponse.json({ product });
// }
