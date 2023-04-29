import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response('You must be logged in to have lists', {
        status: 403,
      });
    }
    const lists = await prisma.list.findMany({
      where: { userId: session.user.id },
    });
    return NextResponse.json(lists);
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response('You must be logged in to add a list', {
        status: 403,
      });
    }
    const res = await request.json();
    const listName = res.list;
    const list = await prisma.list.create({
      data: {
        name: listName,
        userId: session.user.id,
      },
    });
    return NextResponse.json(list);
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
}
