import { NextResponse } from 'next/server';
import { prisma } from '@/db';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log(session);
    if (!session) {
      return new Response('You must be logged in to create a shelf', {
        status: 403,
      });
    }
    const res = await request.json();
    const shelfName = res.shelf;
    const shelf = await prisma.bookshelf.create({
      data: {
        name: shelfName,
        userId: session.user.id,
      },
    });
    return NextResponse.json(shelf);
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
}
