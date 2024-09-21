"use client";
import Image from "next/image";
import React, { useState } from "react";
import image from "./../../../../public/Link (1).png";
import Link from "next/link";
import { FaLink, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import BlogData from "../../../components/BlogData";

const BlogDetails = ({ params }) => {
  const [activeTab, setActiveTab] = useState(1);
  const { id } = params;
  return (
    <div>
      <div className="h-[200px] bg-main lg:mx-10 mx-5 flex justify-center items-center rounded-lg my-10">
        <h1 className="text-white text-center text-[50px] lg:text-[80px]">
          Title of the blogs
        </h1>
      </div>
      <div className="flex justify-center mx-5">
        <Image src={image} width={980} height={700} alt="" />
      </div>
      <div className="mx-5 md:mx-10 lg:mx-20 my-10">
        <h1 className="text-main text-3xl">Title of the blog</h1>

        <h1 className="text-text text-xl my-6"></h1>
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
        <p>
          Eum quibusdam quam ex est numquam quidem et. A sint et impedit
          nesciunt. Aut minus laborum fugiat labore possimus tenetur. Non
          nesciunt similique ipsam quae totam. Laboriosam necessitatibus
          distinctio consequuntur quia qui. Debitis magni totam eos fugiat
          voluptas qui. Rerum nobis accusamus ab doloribus numquam non. Libero
          consequatur similique perferendis tempora a placeat. Reiciendis
          voluptatem soluta blanditiis est excepturi. Dolorum aut et aut quidem
          nam occaecati consectetur ....Eum quibusdam quam ex est numquam quidem
          et. A sint et impedit nesciunt. Aut minus laborum fugiat labore
          possimus tenetur. Non nesciunt similique ipsam quae totam. Laboriosam
          necessitatibus distinctio consequuntur quia qui. Debitis magni totam
          eos fugiat voluptas qui. Rerum nobis accusamus ab doloribus numquam
          non. Libero consequatur similique perferendis tempora a placeat.
          Reiciendis voluptatem soluta blanditiis est excepturi. Dolorum aut et
          aut quidem nam occaecati consectetur ....Eum quibusdam quam ex est
          numquam quidem et. A sint et impedit nesciunt. Aut minus laborum
          fugiat labore possimus tenetur. Non nesciunt similique ipsam quae
          totam. Laboriosam necessitatibus distinctio consequuntur quia qui.
          Debitis magni totam eos fugiat voluptas qui. Rerum nobis accusamus ab
          doloribus numquam non. Libero consequatur similique perferendis
          tempora a placeat. Reiciendis voluptatem soluta blanditiis est
          excepturi. Dolorum aut et aut quidem nam occaecati consectetur ....Eum
          quibusdam quam ex est numquam quidem et. A sint et impedit nesciunt.
          Aut minus laborum fugiat labore possimus tenetur. Non nesciunt
          similique ipsam quae totam. Laboriosam necessitatibus distinctio
          consequuntur quia qui. Debitis magni totam eos fugiat voluptas qui.
          Rerum nobis accusamus ab doloribus numquam non. Libero consequatur
          similique perferendis tempora a placeat. Reiciendis voluptatem soluta
          blanditiis est excepturi. Dolorum aut et aut quidem nam occaecati
          consectetur ....Eum quibusdam quam ex est numquam quidem et. A sint et
          impedit nesciunt. Aut minus laborum fugiat labore possimus tenetur.
          Non nesciunt similique ipsam quae totam. Laboriosam necessitatibus
          distinctio consequuntur quia qui. Debitis magni totam eos fugiat
          voluptas qui. Rerum nobis accusamus ab doloribus numquam non. Libero
          consequatur similique perferendis tempora a placeat. Reiciendis
          voluptatem soluta blanditiis est excepturi. Dolorum aut et aut quidem
          nam occaecati consectetur ....Eum quibusdam quam ex est numquam quidem
          et. A sint et impedit nesciunt. Aut minus laborum fugiat labore
          possimus tenetur. Non nesciunt similique ipsam quae totam. Laboriosam
          necessitatibus distinctio consequuntur quia qui. Debitis magni totam
          eos fugiat voluptas qui. Rerum nobis accusamus ab doloribus numquam
          non. Libero consequatur similique perferendis tempora a placeat.
          Reiciendis voluptatem soluta blanditiis est excepturi. Dolorum aut et
          aut quidem nam occaecati consectetur ....Eum quibusdam quam ex est
          numquam quidem et. A sint et impedit nesciunt. Aut minus laborum
          fugiat labore possimus tenetur. Non nesciunt similique ipsam quae
          totam. Laboriosam necessitatibus distinctio consequuntur quia qui.
          Debitis magni totam eos fugiat voluptas qui. Rerum nobis accusamus ab
          doloribus numquam non. Libero consequatur similique perferendis
          tempora a placeat. Reiciendis voluptatem soluta blanditiis est
          excepturi. Dolorum aut et aut quidem nam occaecati consectetur ....Eum
          quibusdam quam ex est numquam quidem et. A sint et impedit nesciunt.
          Aut minus laborum fugiat labore possimus tenetur. Non nesciunt
          similique ipsam quae totam. Laboriosam necessitatibus distinctio
          consequuntur quia qui. Debitis magni totam eos fugiat voluptas qui.
          Rerum nobis accusamus ab doloribus numquam non. Libero consequatur
          similique perferendis tempora a placeat. Reiciendis voluptatem soluta
          blanditiis est excepturi. Dolorum aut et aut quidem nam occaecati
          consectetur ....
        </p>
        <div>
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
                <div className="transition-opacity duration-500 opacity-100">
                  {" "}
                  <BlogData />
                </div>
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
      </div>
    </div>
  );
};

export default BlogDetails;
