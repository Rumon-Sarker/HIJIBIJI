/*
  Warnings:

  - Added the required column `completedProject` to the `AboutUs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerSatisfiction` to the `AboutUs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `raisedByClient` to the `AboutUs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `years` to the `AboutUs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AboutUs" ADD COLUMN     "completedProject" TEXT NOT NULL,
ADD COLUMN     "customerSatisfiction" TEXT NOT NULL,
ADD COLUMN     "raisedByClient" TEXT NOT NULL,
ADD COLUMN     "years" TEXT NOT NULL;
