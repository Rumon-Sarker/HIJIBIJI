"use server";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";
import { FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import img from "./../../../public/Link.png";
import Image from "next/image";
import BlogComponents from "../../components/BlogComponents";
import { PrismaClient } from "@prisma/client";

const Blogs = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.blogs.findMany({});
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateWithDayName = now.toLocaleDateString("en-US", options);
  return (
    <div>
      <div>
        <div className="h-[200px] bg-main mx-5 lg:mx-10 flex justify-center items-center rounded-lg my-10">
          <h1 className="text-white text-center text-[50px] lg:text-[80px]">
            Blogs
          </h1>
        </div>
        <div className="mx-5 md:mx-10 lg:mx-20 my-5">
          <div className="grid lg:grid-cols-2 gap-5 content-center">
            <div>
              <h1 className="text-main text-3xl uppercase">
                Title of the latest blog
              </h1>
              <p className="mt-10">
                Eum quibusdam quam ex est numquam quidem et. A sint et impedit
                nesciunt. Aut minus laborum fugiat labore possimus tenetur. Non
                nesciunt similique ipsam quae totam. Laboriosam necessitatibus
                distinctio consequuntur quia qui. Debitis magni totam eos fugiat
                voluptas qui. Rerum nobis accusamus ab{" "}
              </p>
              <h1 className="text-xl mb-5 mt-2">{dateWithDayName}</h1>
              <h1 className="text-text ">Share </h1>
              <div className="text-text flex gap-5 my-5">
                <Link href={"/"}>
                  <FaTwitter />
                </Link>
                <Link href={"/"}>
                  <FaSquareFacebook />
                </Link>
                <Link href={"/"}>
                  <TiSocialLinkedin />
                </Link>
                <Link href={"/"}>
                  <MdEmail />
                </Link>
                <Link href={"/"}>
                  <FaLink />
                </Link>
              </div>
              <button className="btn btn-md bg-main hover:bg-transparent hover:border-2 hover:border-main text-white hover:text-black">
                Read Article
              </button>
            </div>
            <div>
              <Image src={img} width={580} height={480} alt="" />
            </div>
          </div>
        </div>
      </div>
      <BlogComponents data={data} />
    </div>
  );
};

export default Blogs;
