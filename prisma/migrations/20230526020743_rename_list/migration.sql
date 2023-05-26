/*
  Warnings:

  - You are about to drop the `List` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BookToList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "List" DROP CONSTRAINT "List_userId_fkey";

-- DropForeignKey
ALTER TABLE "_BookToList" DROP CONSTRAINT "_BookToList_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToList" DROP CONSTRAINT "_BookToList_B_fkey";

-- DropTable
DROP TABLE "List";

-- DropTable
DROP TABLE "_BookToList";

-- CreateTable
CREATE TABLE "Bookshelf" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Bookshelf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookToBookshelf" (
    "A" VARCHAR(255) NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookToBookshelf_AB_unique" ON "_BookToBookshelf"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToBookshelf_B_index" ON "_BookToBookshelf"("B");

-- AddForeignKey
ALTER TABLE "Bookshelf" ADD CONSTRAINT "Bookshelf_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToBookshelf" ADD CONSTRAINT "_BookToBookshelf_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("isbn") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToBookshelf" ADD CONSTRAINT "_BookToBookshelf_B_fkey" FOREIGN KEY ("B") REFERENCES "Bookshelf"("id") ON DELETE CASCADE ON UPDATE CASCADE;
