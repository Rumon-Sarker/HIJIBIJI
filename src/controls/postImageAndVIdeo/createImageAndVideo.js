"use server";
import { PrismaClient } from "@prisma/client";
import { uploadImage } from "../uploadImage/uploadImage";
import { upload } from "../uploadVideo/upload.js";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export const createBg1 = async (formData) => {
  const title = formData.get("title");
  const details = formData.get("details");
  const imageFile = formData.get("image");
  const imageUrl = await uploadImage(imageFile);

  try {
    await prisma.bg1.create({
      data: {
        title,
        details,
        image: imageUrl,
      },
    });
    return { status: "Background image 1 created successfully" };
  } catch (error) {
    return { error: "failed to created Background image 1" };
  } finally {
    revalidatePath("/");
  }
};

export const createBg2 = async (formData) => {
  const imageFile = formData.get("image");
  const imageUrl = await uploadImage(imageFile);
  try {
    await prisma.bg2.create({
      data: {
        image: imageUrl,
      },
    });
    return { status: "Background image 2 created successfully" };
  } catch (error) {
    return { error: "failed to created background image 2" };
  } finally {
    revalidatePath("/");
  }
};

export const createPartnerImage = async (formData) => {
  const imageFile = formData.get("image");
  const imageUrl = await uploadImage(imageFile);
  try {
    await prisma.partners.create({
      data: {
        image: imageUrl,
      },
    });
    return { status: "Partner image created successfully" };
  } catch (error) {
    return { error: "failed to created Partner image" };
  } finally {
    revalidatePath("/");
  }
};

export const createVideo = async (formData) => {
  const imageFile = formData.get("video");
  const videoUrl = await upload(imageFile);
  console.log(videoUrl);
  try {
    await prisma.video.create({
      data: {
        video: videoUrl,
      },
    });
    return { status: "Video created successfully" };
  } catch (error) {
    return { error: "failed to created Video" };
  } finally {
    revalidatePath("/about");
  }
};
export const createExperience = async (formData) => {
  const title = formData.get("title");
  const details = formData.get("details");
  const imageFile = formData.get("image");
  const imageUrl = await uploadImage(imageFile);

  try {
    await prisma.experience.create({
      data: {
        title,
        details,
        image: imageUrl,
      },
    });
    return { status: "experience created successfully" };
  } catch (error) {
    return { error: "failed to create experience" };
  } finally {
    revalidatePath("/");
  }
};
export const createAboutUs = async (formData) => {
  const whoWeAre = formData.get("whoWeAre");
  const whyUs = formData.get("whyUs");
  const yearsInBusiness = formData.get("yearsInBusiness");
  const mission = formData.get("mission");
  const vision = formData.get("vision");
  const values = formData.get("values");
  const ourTechnology = formData.get("ourTechnology");

  try {
    await prisma.aboutUs.create({
      data: {
        whoWeAre,
        whyUs,
        yearsInBusiness,
        mission,
        vision,
        values,
        ourTechnology,
      },
    });
    return { status: "About us created successfully" };
  } catch (error) {
    return { error: "failed to create aboutUs" };
  } finally {
    revalidatePath("/about");
  }
};
