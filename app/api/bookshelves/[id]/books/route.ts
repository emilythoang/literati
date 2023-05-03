import { prisma } from '@/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextResponse } from 'next/server';

// export async function (request: Request) {
//   const { searchParams } = new URL(request.url);
//   const isbn = searchParams.get('isbn');

//   //   const data = await res.json();
//   //   const book = data.items[0]['volumeInfo'];
//   return new Response(null, { status: 200 });
// }

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('error');
    return new Response('You must be the owner to update bookshelves', {
      status: 403,
    });
  }
  const { searchParams } = new URL(request.url);
  const isbn = searchParams.get('isbn');
  let book = await request.json();
  const updatedList = await prisma.list.update({
    where: {
      id: params.id,
    },
    data: {
      books: {
        connectOrCreate: [
          {
            create: {
              title: book.title,
              isbn: book.isbn,
              image: book.image,
              authors: {
                connectOrCreate: book.authors?.map((author: string) => ({
                  where: { name: author },
                  create: { name: author },
                })),
              },
            },
            where: {
              isbn: book.isbn,
            },
          },
        ],
      },
    },
  });
  return new Response(null, { status: 200 });
}

export async function DELETE({
  request,
  params,
}: {
  request: Request;
  params: { id: string; isbn: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('error');
    return new Response('You must be the owner to update bookshelves', {
      status: 403,
    });
  }
  const id = params.id;
  let res = await request.json();
  const book = res.book;
  await prisma.list.delete({
    where: {
      id,
    },
  });
  return new Response(null, { status: 200 });
}
