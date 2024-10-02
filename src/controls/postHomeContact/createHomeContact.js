"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
export const createHomeContact = async (formData) => {
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const country = formData.get("country");
  const interested = formData.get("interested");
  try {
    await prisma.homeContact.create({
      data: {
        firstname,
        lastname,
        email,
        country,
        interested,
      },
    });
    return { status: "contact created successfully" };
  } catch (error) {
    return { error: "failed to created contact" };
  } finally {
    revalidatePath("/");
  }
};
