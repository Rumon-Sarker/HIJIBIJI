import React, { Suspense } from "react";
import Banner from "./home/Banner";
import OurPartner from "./home/OurPartners";
import ContactForm from "./home/ContactForm";
import Blog from "./../app/home/Blog";
import CaseStudyCaro from "./../app/home/CaseStudyCaro";
import { PrismaClient } from "@prisma/client";
import Loading from "./loading";
const Home = async () => {
  const prisma = new PrismaClient();
  const bg1 = await prisma.bg1.findFirst({ orderBy: { createdAt: "desc" } });
  const bg2 = await prisma.bg2.findFirst({ orderBy: { createdAt: "desc" } });
  const exp = await prisma.experience.findFirst({
    orderBy: { createdAt: "desc" },
  });
  const partners = await prisma.partners.findMany({});
  const blog = await prisma.blogs.findMany({});
  const caseStudies = await prisma.caseStudy.findMany({});
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Banner bg1={bg1} exp={exp} />
        <OurPartner partners={partners} />
        <CaseStudyCaro caseStudies={caseStudies} />
        <Blog blog={blog} />
        <ContactForm bg2={bg2} />
      </div>
    </Suspense>
  );
};

export default Home;
