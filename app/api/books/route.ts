import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  let book;
  const { searchParams } = new URL(request.url);
  const isbn = searchParams.get('isbn');
  const title = encodeURI(searchParams.get('title'));
  console.log(`title is ${title}`);
  const link = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${process.env.BOOKS_API_KEY}`;
  console.log(`link on 10 is ${link}`);
  let res = await fetch(link);
  // if (title === 'CAMP%20ZERO') {
  //   console.log(`12 is ${JSON.stringify(res)}`);
  // }
  // if (title === 'CAMP%20ZERO') {
  //   const testLink = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=${process.env.BOOKS_API_KEY}`;
  //   console.log(`16 is ${testLink}`);
  //   const testRes = await fetch(testLink);
  //   console.log(JSON.stringify(testRes));
  // }
  if (!res.ok) {
    const titleLink = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=${process.env.BOOKS_API_KEY}`;
    console.log(`22 is ${titleLink}`);
    res = await fetch(titleLink);
  }
  const data = await res.json();
  console.log(data);
  book = data.items[0]['volumeInfo'] || {};
  console.log(book);
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
