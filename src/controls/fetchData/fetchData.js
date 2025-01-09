"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
    where: categoryId ? { categoryId: parseInt(categoryId, 10) } : undefined,
    orderBy: { createdAt: "desc" },
  });
}
export async function getBlogCategories() {
  return await prisma.blogCategory.findMany({
    orderBy: { name: "asc" },
  });
}

export async function getBlogsByCategory(categoryId) {
  return await prisma.blogs.findMany({
    where: categoryId ? { categoryId: parseInt(categoryId, 10) } : undefined,
    orderBy: { createdAt: "desc" },
  });
}
export async function getTechnologyCategories() {
  return await prisma.technologyCategory.findMany({
    orderBy: { name: "asc" },
  });
}

export async function getTechnologyByCategory(categoryId) {
  return await prisma.technology.findMany({
    where: categoryId ? { categoryId: parseInt(categoryId, 10) } : undefined,
    orderBy: { createdAt: "desc" },
  });
}
export async function getHomepageBackground1() {
  try {
    const data = await prisma.bg1.findMany({});
    return { status: "successfully loaded bg1", data };
  } catch (error) {
    return { status: "cannot load bg1", error: error.message };
  }
  finally {
    revalidatePath('/admin/postHomeBg')
  }
}
export async function getHomepageBackground2() {
  try {
    const data = await prisma.bg2.findMany({});
    return { status: "successfully loaded bg1", data };
  } catch (error) {
    return { status: "cannot load bg1", error: error.message };
  }
  finally {
    revalidatePath('/admin/postHomeBg')
  }
};

export const getContactData = async (filter) => {
  const now = new Date();
  let startDate;
  let endDate;

  // Handle predefined filters
  if (filter === "lastWeek") {
    startDate = new Date(now.setDate(now.getDate() - 7));
    endDate = new Date();
  } else if (filter === "lastMonth") {
    startDate = new Date(now.setMonth(now.getMonth() - 1));
    endDate = new Date();
  } else if (filter === "lastYear") {
    startDate = new Date(now.setFullYear(now.getFullYear() - 1));
    endDate = new Date();
  } else if (filter?.fromDate && filter?.toDate) {
    // Handle custom date filter
    startDate = new Date(filter.fromDate);
    endDate = new Date(filter.toDate);
  } else {
    return new Response(JSON.stringify({ error: "Invalid filter" }), {
      status: 400,
    });
  }

  try {
    const data = await prisma.contact.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return { status: "successfully loaded contact", data };
  } catch (error) {
    return { status: "cannot load contact", error: error.message };
  }
};

export const getHomeContactData = async (filter) => {

  const now = new Date();
  let startDate;
  let endDate;

  // Handle predefined filters
  if (filter === "lastWeek") {
    startDate = new Date(now.setDate(now.getDate() - 7));
    endDate = new Date();
  } else if (filter === "lastMonth") {
    startDate = new Date(now.setMonth(now.getMonth() - 1));
    endDate = new Date();
  } else if (filter === "lastYear") {
    startDate = new Date(now.setFullYear(now.getFullYear() - 1));
    endDate = new Date();
  } else if (filter?.fromDate && filter?.toDate) {
    // Handle custom date filter
    startDate = new Date(filter.fromDate);
    endDate = new Date(filter.toDate);
  } else {
    return new Response(JSON.stringify({ error: "Invalid filter" }), {
      status: 400,
    });
  }

  try {
    const data = await prisma.homeContact.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return { status: "successfully loaded contact", data };
  } catch (error) {
    return { status: "cannot load contact", error: error.message };
  }
}
export const getFooterContactData = async (filter) => {

  const now = new Date();
  let startDate;
  let endDate;

  // Handle predefined filters
  if (filter === "lastWeek") {
    startDate = new Date(now.setDate(now.getDate() - 7));
    endDate = new Date();
  } else if (filter === "lastMonth") {
    startDate = new Date(now.setMonth(now.getMonth() - 1));
    endDate = new Date();
  } else if (filter === "lastYear") {
    startDate = new Date(now.setFullYear(now.getFullYear() - 1));
    endDate = new Date();
  } else if (filter?.fromDate && filter?.toDate) {
    // Handle custom date filter
    startDate = new Date(filter.fromDate);
    endDate = new Date(filter.toDate);
  } else {
    return new Response(JSON.stringify({ error: "Invalid filter" }), {
      status: 400,
    });
  }

  try {
    const data = await prisma.footerContact.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return { status: "successfully loaded contact", data };
  } catch (error) {
    return { status: "cannot load contact", error: error.message };
  }
}
export const getJobRequest = async (filter) => {

  const now = new Date();
  let startDate;
  let endDate;

  // Handle predefined filters
  if (filter === "lastWeek") {
    startDate = new Date(now.setDate(now.getDate() - 7));
    endDate = new Date();
  } else if (filter === "lastMonth") {
    startDate = new Date(now.setMonth(now.getMonth() - 1));
    endDate = new Date();
  } else if (filter === "lastYear") {
    startDate = new Date(now.setFullYear(now.getFullYear() - 1));
    endDate = new Date();
  } else if (filter?.fromDate && filter?.toDate) {
    // Handle custom date filter
    startDate = new Date(filter.fromDate);
    endDate = new Date(filter.toDate);
  } else {
    return new Response(JSON.stringify({ error: "Invalid filter" }), {
      status: 400,
    });
  }

  try {
    const data = await prisma.job.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: { createdAt: "desc" },
      include: {
        applyForms: true,
      },
    });
    return { status: "successfully loaded job", data };
  } catch (error) {
    return { status: "cannot load job", error: error.message };
  }
}