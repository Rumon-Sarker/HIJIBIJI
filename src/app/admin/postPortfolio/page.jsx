import React from "react";
import PostPortfolio from "./postPortfolio";
import DeleteFromAdmin from "@/components/DeleteFromAdmin";
import { PrismaClient } from "@prisma/client";
import {
  deletePortfolio,
  deletePortfolioCategory,
} from "@/controls/delete/delete";
import CreatePortfolioCategory from "./CreatePortfolioCategory";
import DeleteCategory from "./DeleteCategory";

const page = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.portfolio.findMany({
    include: {
      category: true,
    },
  });
  const categoryData = await prisma.portfolioCategory.findMany();
  const deleteCategoryFromServer = deletePortfolioCategory;
  const deleteFromServer = deletePortfolio;
  return (
    <div>
      <CreatePortfolioCategory />
      <PostPortfolio />
      <DeleteCategory
        categoryData={categoryData}
        deleteCategoryFromServer={deleteCategoryFromServer}
      />
      <DeleteFromAdmin data={data} deleteFromServer={deleteFromServer} />
    </div>
  );
};

export default page;
