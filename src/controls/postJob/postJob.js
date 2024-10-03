"use server";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
export const createJob = async (formData) => {
  const jobTitle = formData.get("jobTitle");
  const category = formData.get("category");
  const departmentName = formData.get("departmentName");
  const location = formData.get("location");
  const deadline = formData.get("date");
  const vacancy = formData.get("vacancy");
  const jobResponsibility = formData.get("jobResponsibility");
  const slary = formData.get("salary");

  try {
    await prisma.job.create({
      data: {
        jobTitle,
        category,
        deadline,
        departmentName,
        location,
        jobResponsibility,
        vacancy,
        slary
      },
    });
    return { status: "job created successfully" };
  } catch (error) {
    return { error: "failed to created job" };
  } finally {
    revalidatePath("/career");
  }
};
