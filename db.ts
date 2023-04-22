import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

//   import { PrismaClient } from '@prisma/client'

// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient | undefined
// }

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: ['query'],
//   })

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
