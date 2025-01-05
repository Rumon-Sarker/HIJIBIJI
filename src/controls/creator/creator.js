"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();


export async function createTechnologyCategory(name) {
  try {
    await prisma.technologyCategory.create({
      data: { name },
    });

    return {
      status: "success",
      message: "technology category created successfully",
    };
  } catch (error) {
    return { status: "error", message: error.message };
  } finally {
    revalidatePath("/admin/postAboutUs");
  }
}
export async function createFooterDescription(formData) {
  const addressTitle1 = formData.get('address_title1');
  const addressTitle2 = formData.get('address_title2');
  const addressDetails1 = formData.get('address_details1');
  const addressDetails2 = formData.get('address_details2');
  const shortDescription = formData.get('short_description');
  const facebookLink = formData.get('facebook_link');
  const twitterLink = formData.get('twitter_link');
  const linkedinLink = formData.get('linkedin_link');
  const instagramLink = formData.get('instagram_link');
  console.log(formData);
  try {
    await prisma.footerDescription.create({
      data: {
        shortDescription,
        addressTitle1,
        addressTitle2,
        addressDetails1,
        addressDetails2,
        facebookLink,
        twitterLink,
        linkedinLink,
        instagramLink,
      },
    });

    return {
      status: "success",
      message: "footer details created successfully",
    };
  } catch (error) {
    return { status: "error", message: error.message };
  } finally {
    revalidatePath("/admin/postFooterDetails");
  }
}
export async function updateAdminRole(id, role) {

  try {
    await prisma.user.update({
      where: { id: id },
      data: { role: role },
    });

    return {
      status: "success",
      message: "User role updated successfully",
    };
  } catch (error) {
    return { status: "error", message: error.message };
  } finally {
    revalidatePath("/admin/adminControl");
  }
}
export const deleteUser = async (id) => {
  try {
    // Delete the user
    await prisma.user.delete({
      where: { id: id },
    });

    return {
      status: "success",
      message: "User deleted successfully",
    };
  } catch (error) {
    return { status: "error", message: error.message };
  } finally {
    revalidatePath("/admin/adminControl");
  }
};
