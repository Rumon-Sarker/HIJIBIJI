"use server";

import { PrismaClient } from "@prisma/client";

// Avoid creating too many Prisma instances in development mode
const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export const getJobData = async (formData) => {
  const title = formData.get("title");
  const type = formData.get("type");
  const location = formData.get("location");

  try {
    const data = await prisma.job.findMany({
      where: {
        AND: [
          title ? { jobTitle: { contains: title, mode: "insensitive" } } : {},
          type ? { category: { contains: type, mode: "insensitive" } } : {},
          location
            ? { location: { contains: location, mode: "insensitive" } }
            : {},
        ].filter((condition) => Object.keys(condition).length > 0),
      },
    });
    return { status: "successfully loaded job", data };
  } catch (error) {
    return { status: "cannot load job", error: error.message };
  }
};
export const getJobAllData = async () => {
  try {
    const data = await prisma.job.findMany({});
    return { status: "successfully loaded job", data };
  } catch (error) {
    return { status: "cannot load job", error: error.message };
  }
};
