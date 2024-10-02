'use server'

import {PrismaClient} from "@prisma/client"
import {revalidatePath} from "next/cache";

const prisma = new PrismaClient();
export const  createFooterContact = async (formData) => {
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const message = formData.get("message");
    try {
      await prisma.footerContact.create({
        data: {
          firstname,
          lastname,
          email,
          message,
        },
      });
      return { status: "contact created successfully" };
    } catch (error) {
      return { error: "failed to created contact" };
    } finally {
      revalidatePath("/");
    }
}