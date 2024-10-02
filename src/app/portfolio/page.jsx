import React from "react";
import PortfolioComponents from "../../components/portfolioComponents";
import { PrismaClient } from "@prisma/client";
const Portfolio = async () => {
  const prisma = new PrismaClient();
  const portfolioData = await prisma.portfolio.findMany({});
  return (
    <div>
      <PortfolioComponents portfolioData={portfolioData} />
    </div>
  );
};

export default Portfolio;
