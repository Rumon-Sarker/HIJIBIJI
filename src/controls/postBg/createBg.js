"use server";
import { PrismaClient } from "@prisma/client";
import { uploadImage } from "../uploadImage/uploadImage";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();
export const createBg1 = async (formData) => {
  const imageFile = formData.get("image");
  const imageUrl = await uploadImage(imageFile);
  try {
    await prisma.bg1.create({
      data: {
        image: imageUrl,
      },
    });
    return { status: "Background image 1 created successfully" };
  } catch (error) {
    return { error: "failed to created Background image 1" };
  } finally {
    revalidatePath("/services");
  }
};
export const createBg2 = async (formData) => {
  const imageFile = formData.get("image");
  const imageUrl = await uploadImage(imageFile);
  try {
    await prisma.bg2.create({
      data: {
        image: imageUrl,
      },
    });
    return { status: "Background image 2 created successfully" };
  } catch (error) {
    return { error: "failed to created background image 2" };
  } finally {
    revalidatePath("/services");
  }
};
