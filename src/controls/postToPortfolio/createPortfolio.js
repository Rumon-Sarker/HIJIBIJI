"use server";
import { PrismaClient } from "@prisma/client";
import { uploadImage } from "../uploadImage/uploadImage";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
export async function createPortfolio(formData) {
  const name = formData.get("name");

  const category = formData.get("category");
  const description = formData.get("description");
  const scope = formData.get("scope");
  const imageFile = formData.get("image");

  // const preset = "upload";
  let imageUrl = await uploadImage(imageFile);
  // console.log("url", imageUrl);

  try {
    await prisma.portfolio.create({
      data: {
        name,
        category,
        description,
        scope,
        image: imageUrl,
      },
    });
    return { status: "successfully created portfolio" };
  } catch (error) {
    return { error: "failed to create portfolio" };
  } finally {
    revalidatePath("/portfolio");
  }
}
