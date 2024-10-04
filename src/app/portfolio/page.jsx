import React from "react";
import PortfolioComponents from "../../components/portfolioComponents";
import { PrismaClient } from "@prisma/client";
const Portfolio = async () => {
  const prisma = new PrismaClient();
  const portfolioData = await prisma.portfolio.findMany({});
  // console.log(portfolioData.filter(data => data.category === 'mobileApp'));
  return (
    <div>
      <PortfolioComponents portfolioData={portfolioData} />
    </div>
  );
};

export default Portfolio;
