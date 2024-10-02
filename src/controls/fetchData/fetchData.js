"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPortfolioData = async () => {
  try {
    const data = await prisma.portfolio.findMany({});
    return { status: "successfully loaded portfolio", data };
  } catch (error) {
    return { status: "can not load portfolio", error: error.message };
  }
};


export const getPortfolioDataSpecific = async (id) => {
  try {
    const data = await prisma.portfolio.findUnique({
        where: {
            id: id
        }
    });
    return { status: "successfully loaded portfolio", data };
  } catch (error) {
    return { status: "can not load portfolio", error: error.message };
  }
};
