import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaLink, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail } from "react-icons/md";

import BlogComponents from "../../../components/BlogComponents";
import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
import advancedFormat from 'dayjs/plugin/advancedFormat';
import SocialSharing from "@/components/SocialSharing";
const BlogDetails = async ({ params }) => {
  const prisma = new PrismaClient();
  const data = await prisma.blogs.findMany({});
  const specificData = await prisma.blogs.findUnique({
    where: { id: parseInt(params.id) },
  });


  dayjs.extend(advancedFormat);
  const formattedDate = dayjs(specificData.createdAt).format('dddd - MMMM Do, YYYY');

  return (
    <div>
      <div className="h-[200px] bg-main lg:mx-10 mx-5 flex justify-center items-center rounded-lg my-10">
        <h1 className="text-white text-center text-[50px] lg:text-[80px]">
          {specificData.name}
        </h1>
      </div>
      <div className="flex justify-center mx-5">
        <Image src={specificData.image} width={980} height={700} alt="" />
      </div>
      <div className="mx-5 md:mx-10 lg:mx-20 my-10">
        <h1 className="text-main text-3xl">{specificData.name}</h1>
        <h1 className="my-5 text-lg">{formattedDate}</h1>

        <h1 className="text-text text-xl my-6"></h1>
        <h1 className="text-text ">Share </h1>
       <SocialSharing title={specificData.name}/>
        <p>{specificData.description}</p>
       <div className="mt-10">
       <BlogComponents data={data} />
       </div>
      </div>
    </div>
  );
};

export default BlogDetails;
