/*
  Warnings:

  - Added the required column `youtubeLink` to the `FooterDescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FooterDescription" ADD COLUMN     "youtubeLink" TEXT NOT NULL;
