// import prisma from '@/db';
// import { NextResponse } from 'next/server';

// export async function GET(request) {
//   const books = await prisma.users.findUnique({
//     where: {
//       id: '',
//     },
//     select: {
//       favoriteBooks: true,
//     },
//   });
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get('id');
//   // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //     'API-Key': process.env.DATA_API_KEY,
//   //   },
//   // });
//   const product = await res.json();
//   return NextResponse.json({ product });
// }

// export async function POST(request) {
//   const res = await request.json();
//   console.log(`res is ${JSON.stringify(res)}`);

//   const book = await fetch('/api/books', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(res.book),
//   });

//   const userId = res.user;
//   console.log(userId);
//   const user = await prisma.user.findUnique({
//     where: {
//       id: userId,
//     },
//     select: {
//       favoriteBooks: true,
//     },
//   });

// const res = await prisma.books.create({
//   data: {
//     title: '',
//     isbn: '',
//     author: '',
//     User: '',
//   },
// });
// const data = await res.json();
//   return NextResponse.json({ res });
// }

// export async function DELETE(request) {
//   const res = await request.json();
//   console.log(`res is ${JSON.stringify(res)}`);

//   const userId = res.user;
//   console.log(userId);
//   const user = await prisma.user.findUnique({
//     where: {
//       id: userId,
//     },
//   });

//   const deletedBook = await prisma.user.delete({
//     where: {
//       email: 'bert@prisma.io',
//     },
//   });

//   return NextResponse.json({ res });

// const deleteBook = await prisma.books.delete({
//   where: {
//     isbn: '',
//   },
// });
// }
