import React from "react";
import Banner from "./home/Banner";
import OurPartner from "./home/OurPartners";
import ContactForm from "./home/ContactForm";
import Blog from "./../app/home/Blog";
import CaseStudyCaro from "./../app/home/CaseStudyCaro";
import { PrismaClient } from "@prisma/client";
const Home = async () => {
  const prisma = new PrismaClient();
  const bg1 = await prisma.bg1.findFirst({ orderBy: { createdAt: "desc" } });
  const bg2 = await prisma.bg2.findFirst({ orderBy: { createdAt: "desc" } });
  const partners = await prisma.partners.findMany({});
  return (
    <div>
      <Banner bg1={bg1} />
      <OurPartner partners={partners} />
      <CaseStudyCaro />
      <Blog />
      <ContactForm bg2={bg2} />
    </div>
  );
};

export default Home;
