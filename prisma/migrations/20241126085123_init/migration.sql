-- CreateTable
CREATE TABLE "TechnologyName" (
    "id" SERIAL NOT NULL,
    "name1" TEXT NOT NULL,
    "name2" TEXT NOT NULL,
    "name3" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TechnologyName_pkey" PRIMARY KEY ("id")
);
