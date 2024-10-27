"use server";
import { PrismaClient } from "@prisma/client";
import { uploadImage } from "../uploadImage/uploadImage";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
export const createBlog = async (formData) => {
  const name = formData.get("name");
  const category = formData.get("category");
  const description = formData.get("description");
  const word1 = formData.get("word1");
  const word2 = formData.get("word2");
  const imageFile = formData.get("image");
  const imageUrl = await uploadImage(imageFile);

  try {
    await prisma.blogs.create({
      data: {
        word1,
        word2,
        name,
        category,
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
