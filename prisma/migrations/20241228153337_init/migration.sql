-- CreateTable
CREATE TABLE "FooterDescription" (
    "id" SERIAL NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "addressTitle" TEXT NOT NULL,
    "addressDetails" TEXT NOT NULL,
    "facebookLink" TEXT NOT NULL,
    "twitterLink" TEXT NOT NULL,
    "linkedinLink" TEXT NOT NULL,
    "instagramLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FooterDescription_pkey" PRIMARY KEY ("id")
);
