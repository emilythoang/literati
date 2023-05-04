import { prisma } from '@/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextResponse } from 'next/server';

export async function GET(
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
  if (!isbn)
    return new Response('Book must be selected', {
      status: 400,
    });
  const included = await prisma.list.findFirst({
    where: {
      userId: session.user.id,
      id: params.id,
    },
    select: {
      books: {
        where: {
          isbn: isbn,
        },
      },
    },
  });
  return NextResponse.json((included?.books.length || 0) > 0);
}

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
  return NextResponse.json(updatedList);
}

export async function DELETE(
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
  if (!isbn)
    return new Response('Book must be selected', {
      status: 400,
    });
  const updatedList = await prisma.list.update({
    where: {
      id: params.id,
    },
    data: {
      books: {
        disconnect: [
          {
            isbn: isbn,
          },
        ],
      },
    },
  });
  return NextResponse.json(updatedList);
}
