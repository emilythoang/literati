import { prisma } from '@/db';

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

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  await prisma.list.delete({
    where: {
      id,
    },
  });
  return new Response(null, { status: 200 });
}
