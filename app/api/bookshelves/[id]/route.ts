import { prisma } from '@/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextResponse } from 'next/server';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('error');
    return new Response('You must be the owner to edit this list', {
      status: 403,
    });
  }
  const id = params.id;
  const updatedName = await request.json();
  const updatedList = await prisma.list.update({
    where: {
      id,
    },
    data: {
      name: updatedName,
    },
  });
  return NextResponse.json(updatedList);
}

export async function DELETE({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('error');
    return new Response('You must be the owner to delete this list', {
      status: 403,
    });
  }
  const id = params.id;
  await prisma.list.delete({
    where: {
      id,
    },
  });
  return new Response(null, { status: 200 });
}
