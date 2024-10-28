"use server";
import { PrismaClient } from "@prisma/client";
import { uploadImage } from "../uploadImage/uploadImage";
import { revalidatePath } from "next/cache";
import { uploadPDF } from "../uploadPdf/uploadpdf";

const prisma = new PrismaClient();

export const createService = async (formData) => {
  const name = formData.get("name");
  const scope = formData.get("scope");
  const description = formData.get("description");
  const imageFile = formData.get("image");
  const pdfFile = formData.get("pdf");

  const imageUrl = await uploadImage(imageFile);
  const pdfUrl = await uploadPDF(pdfFile);

  const line1 = formData.get("line1");
  const line2 = formData.get("line2");
  const line3 = formData.get("line3");

  try {
    await prisma.services.create({
      data: {
        name,
        line1,
        line2,
        line3,
        description,
        scope,
        pdf: pdfUrl,
        image: imageUrl,
      },
    });
    return { status: "Service created successfully" };
  } catch (error) {
    console.error("Error creating service:", error);
    return { error: error.message || "Failed to create service" };
  } finally {
    revalidatePath("/services");
  }
};
