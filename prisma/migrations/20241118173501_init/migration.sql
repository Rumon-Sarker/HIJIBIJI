/*
  Warnings:

  - You are about to drop the column `customerSatisfiction` on the `AboutUs` table. All the data in the column will be lost.
  - Added the required column `customerSatisfaction` to the `AboutUs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AboutUs" DROP COLUMN "customerSatisfiction",
ADD COLUMN     "customerSatisfaction" TEXT NOT NULL;
