"use server";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache";
import { uploadFile } from "../../controls/uploadPdf/uploadpdf";

const prisma = new PrismaClient();
export const createApplication = async (formData) => {
  const firstname = formData.get("firstname");
  const jobTitle = formData.get("jobTitle");
  const lastname = formData.get("lastname");
  const contact = formData.get("contact");
  const date = formData.get("date");
  const gender = formData.get("gender");
  const email = formData.get("email");
  const address = formData.get("address");
  const coverletter = formData.get("coverletter");
  const jobId = formData.get("jobId");
  const image = formData.get("image");
  let imageUrl = await uploadFile(image);
  console.log(formData, imageUrl);

  try {
    await prisma.applyForm.create({
      data: {
        jobId: parseInt(jobId),
        jobTitle,
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
    console.log(error);
    return { error: "failed to created application" };
  } finally {
    revalidatePath("/");
  }
};
