import React from "react";
import PostPortfolio from "./postPortfolio";
import DeleteFromAdmin from "@/components/DeleteFromAdmin";
import { PrismaClient } from "@prisma/client";
import { deletePortfolio } from "@/controls/delete/delete";

const page = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.portfolio.findMany();
  const deleteFromServer = deletePortfolio;
  return (
    <div>
      <PostPortfolio />
      <DeleteFromAdmin data={data} deleteFromServer={deleteFromServer} />
    </div>
  );
};

export default page;
