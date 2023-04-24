import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db';

export async function GET() {
  return NextResponse.json({ message: 'hello' });
  //   const lists = await prisma.list.findMany();
  //   return NextResponse.json(lists);
}

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json({ res });
  // }

  //   const body = request.body;
  //   console.log(body);
  //   const res = await request.json();

  //   const body = request.body;
  //   const { name } = body;
  //   const list = await prisma.list.create({
  //     data: {
  //       name: name,
  //     },
  //   });

  //   return NextResponse.json({ list });
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
