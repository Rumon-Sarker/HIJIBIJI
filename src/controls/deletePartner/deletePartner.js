"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
export const deletePartner = async (id) => {
  try {
    await prisma.partners.delete({ where: { id: id } });
    return { status: "successfully deleted" };
  } catch (error) {
    return { error: "could not delete" };
  } finally {
    revalidatePath("/admin/deletePartner");
  }
};
