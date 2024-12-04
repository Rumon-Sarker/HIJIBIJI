"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import {uploadFile} from "../uploadFile/uploadFile";

const prisma = new PrismaClient();
export const createBlog = async (formData) => {
  const name = formData.get("name");
  const categoryId = parseInt(formData.get("categoryId"), 10);
  const description = formData.get("description");
  const word1 = formData.get("word1");
  const word2 = formData.get("word2");
  const imageFile = formData.get("image");
  const imageUrl = await uploadFile(imageFile);
  console.log(formData);

  try {
    await prisma.blogs.create({
      data: {
        word1,
        word2,
        name,
        categoryId,
        description,
        image: imageUrl,
      },
    });
    return { status: "blog created successfully" };
  } catch (error) {
    return { error: "failed to created blog" };
  } finally {
    revalidatePath("/blogs");
  }
};

export async function createBlogCategory(name) {
  try {
    await prisma.blogCategory.create({
      data: { name },
    });

    return {
      status: "success",
      message: "Blog category created successfully",
    };
  } catch (error) {
    return { status: "error", message: error.message };
  } finally {
    revalidatePath("/admin/postBlog");
  }
}
