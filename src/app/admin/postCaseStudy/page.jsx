import React from "react";
import PostCaseStudy from "./postCaseStudy";
import { PrismaClient } from "@prisma/client";

const page = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.caseStudy.findMany();
  return (
    <div>
      <PostCaseStudy data={data} />
    </div>
  );
};

export default page;
