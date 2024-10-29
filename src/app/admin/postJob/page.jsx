import React from "react";
import PostJob from "./PostJob";
import { PrismaClient } from "@prisma/client";

const page = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.job.findMany();
  return (
    <div>
      <PostJob data={data} />
    </div>
  );
};

export default page;
