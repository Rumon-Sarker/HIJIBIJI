/*
  Warnings:

  - Added the required column `details` to the `Bg1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Bg1` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bg1" ADD COLUMN     "details" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);
