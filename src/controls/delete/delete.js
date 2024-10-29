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
    revalidatePath("/admin/postPartner");
  }
};

export const deleteBlog = async (id) => {
  try {
    await prisma.blogs.delete({ where: { id: id } });
    return { status: "successfully deleted" };
  } catch (error) {
    return { error: "could not delete" };
  } finally {
    revalidatePath("/admin/postBlog");
  }
};
export const deletePortfolio = async (id) => {
  try {
    await prisma.portfolio.delete({ where: { id: id } });
    return { status: "successfully deleted" };
  } catch (error) {
    return { error: "could not delete" };
  } finally {
    revalidatePath("/admin/postPortfolio");
  }
};
export const deleteService = async (id) => {
  try {
    await prisma.services.delete({ where: { id: id } });
    return { status: "successfully deleted" };
  } catch (error) {
    return { error: "could not delete" };
  } finally {
    revalidatePath("/admin/postService");
  }
};
export const deleteJob = async (id) => {
  try {
    await prisma.job.delete({ where: { id: id } });
    return { status: "successfully deleted" };
  } catch (error) {
    return { error: "could not delete" };
  } finally {
    revalidatePath("/admin/postJob");
  }
};
