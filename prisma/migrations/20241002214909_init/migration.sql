/*
  Warnings:

  - Made the column `clientName` on table `Portfolio` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Portfolio" ALTER COLUMN "clientName" SET NOT NULL;
