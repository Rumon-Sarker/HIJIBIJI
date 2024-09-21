import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import image from "./../../public/Link (1).png";

const BlogDataCard = () => {
  return (
    <div>
      <div className="bg-base-100 rounded-3xl p-3 shadow-xl">
        <div>
          <Image
            className="rounded-3xl cursor-pointer"
            src={image}
            width={500}
            height={450}
            alt=""
          />
        </div>
        <div className="text-gray-400 text-xs mx-5 my-3">
            <h1>Category Name</h1>
            <h1>August 22, 2024 /// No Comments</h1>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold text-text my-5 mx-5">
            Title of the Blogs
          </h1>
          <div className="text-sm mx-5">
          Amet voluptatum rerum delectus aut a aspernatur et laborum dolores deserunt in. updated
          </div>
          <div className="flex justify-end px-3 my-5 text-text">
            <Link
              className="text-main flex gap-1 items-center"
              href={`/blogDetails/${2}`}
            >
              View Details
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDataCard;
