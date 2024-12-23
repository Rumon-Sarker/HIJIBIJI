/*
  Warnings:

  - You are about to drop the column `category` on the `Technology` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Technology" DROP COLUMN "category",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "TechnologyCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TechnologyCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TechnologyCategory_name_key" ON "TechnologyCategory"("name");

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TechnologyCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
