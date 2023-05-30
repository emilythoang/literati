import { prisma } from '@/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextResponse } from 'next/server';

export async function PATCH(
  request: Request,
  { params }: { params: { shelfId: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('error');
    return new Response('You must be the owner to edit this list', {
      status: 403,
    });
  }
  const id = params.shelfId;
  const { name } = await request.json();
  const updatedShelf = await prisma.bookshelf.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
  return NextResponse.json(updatedShelf);
}

export async function DELETE(
  request: Request,
  { params }: { params: { shelfId: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('error');
    return new Response('You must be the owner to delete this list', {
      status: 403,
    });
  }
  const id = params.shelfId;
  await prisma.bookshelf.delete({
    where: {
      id,
    },
  });
  return new Response(null, { status: 200 });
}
