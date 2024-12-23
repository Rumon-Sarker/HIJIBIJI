"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();


export async function createTechnologyCategory(name) {
  try {
    await prisma.technologyCategory.create({
      data: { name },
    });

    return {
      status: "success",
      message: "technology category created successfully",
    };
  } catch (error) {
    return { status: "error", message: error.message };
  } finally {
    revalidatePath("/admin/postAboutUs");
  }
}
