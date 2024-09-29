/*
  Warnings:

  - Made the column `name` on table `Portfolio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `Portfolio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Portfolio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `scope` on table `Portfolio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Portfolio` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Portfolio" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "scope" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL;
