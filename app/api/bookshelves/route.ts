import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function GET() {
  return NextResponse.json({ message: 'hello' });
  //   const lists = await prisma.list.findMany();
  //   return NextResponse.json(lists);
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
    console.log(listName);

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

// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   const res = await request.json();
//   return NextResponse.json({ res })
// }

// export async function PATCH(request: NextRequest) {
//   const updateList = await prisma.list.update({
//     where: {
//       email: 'viola@prisma.io',
//     },
//     data: {
//       name: 'Viola the Magnificent',
//     },
//   });
// }

// export async function DELETE(request: NextRequest) {
//   const deleteList = await prisma.list.delete({
//     where: {
//       email: 'bert@prisma.io',
//     },
//   });
// }
