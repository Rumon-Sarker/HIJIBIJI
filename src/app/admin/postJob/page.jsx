import React from "react";
import PostJob from "./PostJob";
import { PrismaClient } from "@prisma/client";
import Admin from "../Admin";

const page = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.job.findMany();
  return (
    <Admin>
      <div>
      <PostJob data={data} />
    </div>
    </Admin>
  );
};

export default page;
