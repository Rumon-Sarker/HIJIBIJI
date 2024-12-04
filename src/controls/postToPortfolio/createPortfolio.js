"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import {uploadFile} from "../uploadFile/uploadFile";

const prisma = new PrismaClient();
export async function createPortfolio(formData) {
  const name = formData.get("name");
  const clientName = formData.get("clientName");
  const categoryId = parseInt(formData.get("categoryId"), 10);
  const description = formData.get("description");
  const scope = formData.get("scope");
  const imageFile = formData.get("image");

  const imageUrl = await uploadFile(imageFile);

  try {
    await prisma.portfolio.create({
      data: {
        name,
        clientName,
        categoryId,
        description,
        scope,
        image: imageUrl,
      },
    });

    return { status: "success", message: "Portfolio created successfully" };
  } catch (error) {
    return { status: "error", message: error.message };
  } finally {
    revalidatePath("/portfolio");
  }
}
export async function createPortfolioCategory(name) {
  try {
    await prisma.portfolioCategory.create({
      data: { name },
    });

    return {
      status: "success",
      message: "Portfolio category created successfully",
    };
  } catch (error) {
    return { status: "error", message: error.message };
  } finally {
    revalidatePath("/admin/postPortfolio");
  }
}
