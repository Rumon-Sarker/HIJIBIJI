"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import img from "./../../../public/Link.png";
import Image from "next/image";
import BlogData from "./../../components/BlogData";

const Blogs = () => {
  const [activeTab, setActiveTab] = useState(1);
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
      <div className="w-full">
        {/* Tab buttons */}
        <div className="flex flex-wrap lg:mx-10 lg:flex-row justify-center space-x-5 rounded-lg border-b-4 shadow-xl p-3 my-8">
          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 1
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(1)}
          >
            ALL
          </button>
          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 2
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Category 1
          </button>
          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 3
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(3)}
          >
            Category 2
          </button>

          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 4
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(4)}
          >
            Category 3
          </button>
          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 5
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(5)}
          >
            Category 4
          </button>
          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 6
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(6)}
          >
            Category 5
          </button>
        </div>

        {/* Tab content */}
        <div>
          {/* Tab 1 content */}
          {activeTab === 1 && (
            <div className="transition-opacity duration-500 opacity-100">
              <BlogData />
            </div>
          )}

          {/* Tab 2 content */}
          {activeTab === 2 && (
            <div className="transition-opacity duration-500 opacity-100"> <BlogData /></div>
          )}
          {/* Tab 3 content */}
          {activeTab === 3 && (
            <div className="transition-opacity duration-500 opacity-100"></div>
          )}
          {/* Tab 4 content */}
          {activeTab === 4 && (
            <div className="transition-opacity duration-500 opacity-100"></div>
          )}
          {/* Tab 5 content */}
          {activeTab === 5 && (
            <div className="transition-opacity duration-500 opacity-100"></div>
          )}
          {/* Tab 6 content */}
          {activeTab === 6 && (
            <div className="transition-opacity duration-500 opacity-100"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
