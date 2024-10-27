/*
  Warnings:

  - Added the required column `word1` to the `Blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `word2` to the `Blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `word1` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `word2` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `word3` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blogs" ADD COLUMN     "word1" TEXT NOT NULL,
ADD COLUMN     "word2" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CaseStudy" ADD COLUMN     "word1" TEXT NOT NULL,
ADD COLUMN     "word2" TEXT NOT NULL,
ADD COLUMN     "word3" TEXT NOT NULL;
