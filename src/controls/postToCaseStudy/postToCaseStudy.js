"use server";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
export const createCaseStudy = async (formData) => {
  const name = formData.get("name");
  const word1 = formData.get("word1");
  const word2 = formData.get("word2");
  const word3 = formData.get("word3");
  const descripion = formData.get("description");

  try {
    await prisma.caseStudy.create({
      data: {
        word1,
        word2,
        word3,
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
