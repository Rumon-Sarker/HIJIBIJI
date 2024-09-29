-- CreateTable
CREATE TABLE "HomeContact" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "email" TEXT,
    "country" TEXT,
    "interested" TEXT,

    CONSTRAINT "HomeContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FooterContact" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "email" TEXT,
    "country" TEXT,
    "message" TEXT,

    CONSTRAINT "FooterContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "contact" TEXT,
    "email" TEXT,
    "message" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
