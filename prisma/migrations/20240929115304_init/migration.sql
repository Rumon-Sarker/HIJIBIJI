/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.
  - Made the column `image` on table `Bg1` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Bg2` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Blogs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `Blogs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Blogs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Blogs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `firstname` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contact` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `message` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `firstname` on table `FooterContact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `FooterContact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `FooterContact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `FooterContact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `message` on table `FooterContact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `firstname` on table `HomeContact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `HomeContact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `HomeContact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `HomeContact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `interested` on table `HomeContact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Partners` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `video` on table `Video` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hashedPassword` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Bg1" ALTER COLUMN "image" SET NOT NULL;

-- AlterTable
ALTER TABLE "Bg2" ALTER COLUMN "image" SET NOT NULL;

-- AlterTable
ALTER TABLE "Blogs" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL;

-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "firstname" SET NOT NULL,
ALTER COLUMN "lastname" SET NOT NULL,
ALTER COLUMN "contact" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "message" SET NOT NULL;

-- AlterTable
ALTER TABLE "FooterContact" ALTER COLUMN "firstname" SET NOT NULL,
ALTER COLUMN "lastname" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "country" SET NOT NULL,
ALTER COLUMN "message" SET NOT NULL;

-- AlterTable
ALTER TABLE "HomeContact" ALTER COLUMN "firstname" SET NOT NULL,
ALTER COLUMN "lastname" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "country" SET NOT NULL,
ALTER COLUMN "interested" SET NOT NULL;

-- AlterTable
ALTER TABLE "Partners" ALTER COLUMN "image" SET NOT NULL;

-- AlterTable
ALTER TABLE "Portfolio" ALTER COLUMN "scope" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Services" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL;

-- AlterTable
ALTER TABLE "Video" ALTER COLUMN "video" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "emailVerified",
DROP COLUMN "image",
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "hashedPassword" SET NOT NULL;
