"use server";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
export const createCaseStudy = async (formData) => {
  const name = formData.get("name");
  const descripion = formData.get("description");
  

  try {
    await prisma.caseStudy.create({
      data: {
        name,
        descripion,
      
      },
    });
    return { status: "caseStudy created successfully" };
  } catch (error) {
    return { error: "failed to created CaseStudy" };
  } finally {
    revalidatePath("/blogs");
  }
};
