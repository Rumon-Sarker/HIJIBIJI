"use server";
import { PrismaClient } from "@prisma/client";
import { uploadImage } from "../uploadImage/uploadImage";
import {revalidatePath} from "next/cache";
const prisma = new PrismaClient();
export const createService = async (formData) => {
  const name = formData.get("name");
  const scope = formData.get("scope");
  const description = formData.get("description");
  const imageFile = formData.get("image");
  const imageUrl = await uploadImage(imageFile);
  try {
    await prisma.services.create({
      data: {
        name,
        description,
        scope,
        image: imageUrl,
      },
    });
    return { status: "Service created successfully" };
  } catch (error) {
    return { error: "failed to created Service" };
  } finally {
    revalidatePath("/services");
  }
};
