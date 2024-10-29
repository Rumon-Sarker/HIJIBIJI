import React from "react";
import PostBlog from "./PostBlog";

import { PrismaClient } from "@prisma/client";
import DeleteFromAdmin from "@/components/DeleteFromAdmin";
import { deleteBlog } from "@/controls/delete/delete";

const page = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.blogs.findMany();
  const deleteFromServer = deleteBlog;
  return (
    <div>
      <PostBlog />
      <DeleteFromAdmin data={data} deleteFromServer={deleteFromServer} />
    </div>
  );
};

export default page;
