import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";

const FooterWrapper = async () => {
  const session = await getServerSession();
  const prisma = new PrismaClient();
  const data = await prisma.footerDescription.findFirst();
  return (
    <div>
      <Footer data={data} session={session} />
    </div>
  );
};

export default FooterWrapper;
