import React from "react";
import PostBlog from "./PostBlog";

import { PrismaClient } from "@prisma/client";
import DeleteFromAdmin from "@/components/DeleteFromAdmin";
import { deleteBlog } from "@/controls/delete/delete";
import CreateBlogCategory from "./CreateBlogCategory";
const prisma = new PrismaClient();
const page = async () => {
  const data = await prisma.blogs.findMany({});
  const deleteFromServer = deleteBlog;
  return (
    <div>
      <CreateBlogCategory />
      <PostBlog />
      <DeleteFromAdmin data={data} deleteFromServer={deleteFromServer} />
    </div>
  );
};

export default page;
