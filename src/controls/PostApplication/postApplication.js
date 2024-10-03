"use server";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache";
import { uploadFile } from "../../controls/uploadPdf/uploadpdf";

const prisma = new PrismaClient();
export const createApplication = async (formData) => {
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const contact = formData.get("contact");
  const date = formData.get("date");
  const gender = formData.get("date");
  const email = formData.get("email");
  const address = formData.get("address");
  const coverletter = formData.get("coverletter");
  const image = formData.get("image");
  let imageUrl = await uploadFile(image);

  try {
    await prisma.applyForm.create({
      data: {
        firstname,
        lastname,
        contact,
        date,
        gender,
        email,
        address,
        coverletter,
        image: imageUrl,
      },
    });
    return { status: "application created successfully" };
  } catch (error) {
    return { error: "failed to created application" };
  } finally {
    revalidatePath("/");
  }
};
