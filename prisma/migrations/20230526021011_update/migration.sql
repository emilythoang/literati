/*
  Warnings:

  - You are about to drop the `Bookshelf` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bookshelf" DROP CONSTRAINT "Bookshelf_userId_fkey";

-- DropForeignKey
ALTER TABLE "_BookToBookshelf" DROP CONSTRAINT "_BookToBookshelf_B_fkey";

-- DropTable
DROP TABLE "Bookshelf";

-- CreateTable
CREATE TABLE "bookshelves" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "bookshelves_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bookshelves" ADD CONSTRAINT "bookshelves_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToBookshelf" ADD CONSTRAINT "_BookToBookshelf_B_fkey" FOREIGN KEY ("B") REFERENCES "bookshelves"("id") ON DELETE CASCADE ON UPDATE CASCADE;
