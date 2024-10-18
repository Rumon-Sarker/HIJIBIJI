/*
  Warnings:

  - Added the required column `line1` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `line2` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `line3` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdf` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "line1" TEXT NOT NULL,
ADD COLUMN     "line2" TEXT NOT NULL,
ADD COLUMN     "line3" TEXT NOT NULL,
ADD COLUMN     "pdf" TEXT NOT NULL;
