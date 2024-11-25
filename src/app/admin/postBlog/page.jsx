import React from "react";
import PostBlog from "./PostBlog";

import { PrismaClient } from "@prisma/client";
import DeleteFromAdmin from "@/components/DeleteFromAdmin";
import { deleteBlog, deleteBlogCategory } from "@/controls/delete/delete";
import CreateBlogCategory from "./CreateBlogCategory";
import DeleteCategory from "./DeleteCategory";
const prisma = new PrismaClient();
const page = async () => {
  const data = await prisma.blogs.findMany({});
  const categoryData = await prisma.blogCategory.findMany();
  const deleteCategoryFromServer = deleteBlogCategory;
  const deleteFromServer = deleteBlog;
  return (
    <div>
      <CreateBlogCategory />
      <PostBlog />
      <DeleteCategory
        categoryData={categoryData}
        deleteCategoryFromServer={deleteCategoryFromServer}
      />
      <DeleteFromAdmin data={data} deleteFromServer={deleteFromServer} />
    </div>
  );
};

export default page;
