"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
export const createContact = async (formData) => {
  const firstname = formData.get("firstName");
  const lastname = formData.get("lastName");
  const contact = formData.get("contactNumber");
  const email = formData.get("email");
  const message = formData.get("message");
  try {
    await prisma.contact.create({
      data: {
        firstname,
        lastname,
        contact,
        email,
        message,
      },
    });
    return { status: "contact created successfully" };
  } catch (error) {
    return { error: "failed to created contact" };
  } finally {
    revalidatePath("/contact");
  }
};
