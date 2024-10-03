/*
  Warnings:

  - Added the required column `jobTitle` to the `ApplyForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ApplyForm" ADD COLUMN     "jobTitle" TEXT NOT NULL;
