/*
  Warnings:

  - You are about to drop the column `addressDetails` on the `FooterDescription` table. All the data in the column will be lost.
  - You are about to drop the column `addressTitle` on the `FooterDescription` table. All the data in the column will be lost.
  - You are about to drop the column `facebookLink` on the `FooterDescription` table. All the data in the column will be lost.
  - Added the required column `addressDetails1` to the `FooterDescription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressDetails2` to the `FooterDescription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressTitle1` to the `FooterDescription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressTitle2` to the `FooterDescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FooterDescription" DROP COLUMN "addressDetails",
DROP COLUMN "addressTitle",
DROP COLUMN "facebookLink",
ADD COLUMN     "addressDetails1" TEXT NOT NULL,
ADD COLUMN     "addressDetails2" TEXT NOT NULL,
ADD COLUMN     "addressTitle1" TEXT NOT NULL,
ADD COLUMN     "addressTitle2" TEXT NOT NULL;
