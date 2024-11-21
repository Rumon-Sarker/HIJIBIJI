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
export const getServicesData = async (formData) => {
  const title = formData.get("name");

  try {
    const data = await prisma.services.findMany({
      where: {
        name: { contains: title, mode: "insensitive" },
      },
    });
    return { status: "successfully loaded services", data };
  } catch (error) {
    return { status: "cannot load services", error: error.message };
  }
};
export const getServicesAllData = async () => {
  try {
    const data = await prisma.services.findMany({});
    return { status: "successfully loaded services", data };
  } catch (error) {
    return { status: "cannot services", error: error.message };
  }
};

export async function getPortfolioCategories() {
  return await prisma.portfolioCategory.findMany({
    orderBy: { name: "asc" },
  });
}

export async function getPortfoliosByCategory(categoryId) {
  return await prisma.portfolio.findMany({
    where: { categoryId: parseInt(categoryId) },
    orderBy: { createdAt: "desc" },
  });
}
