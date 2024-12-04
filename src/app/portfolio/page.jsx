import React, { Suspense } from "react";
import PortfolioComponents from "@/components/PortfolioComponents";
import { PrismaClient } from "@prisma/client";
import Loading from "../loading";
const Portfolio = async () => {
  const prisma = new PrismaClient();
  const portfolioData = await prisma.portfolio.findMany({});
  // console.log(portfolioData.filter(data => data.category === 'mobileApp'));
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <PortfolioComponents />
      </div>
    </Suspense>
  );
};

export default Portfolio;
