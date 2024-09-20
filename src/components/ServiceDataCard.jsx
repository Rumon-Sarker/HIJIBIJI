import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import image from "./../../public/Link (1).png";
import { MdRectangle } from "react-icons/md";

const ServiceDataCard = ({ itemData }) => {
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
        <div className="my-3 mx-5">
          <h1 className="text-xl font-semibold text-text my-5">Software Development</h1>
          <div className="text-sm ">
            <h1 className="flex gap-2 items-center text-[#B3B3B3]"><MdRectangle />Custom software development </h1>
            <h1 className="flex gap-2 items-center text-[#B3B3B3]"><MdRectangle />Web application development </h1>
            <h1 className="flex gap-2 items-center text-[#B3B3B3]"><MdRectangle /> Mobile app development (iOS, Android)</h1>
          </div>
        </div>
        <div className="flex justify-end px-3 my-5 text-text">
          <Link className="text-main flex gap-1 items-center" href={`/serviceDetails/${2}`}>
            View Details
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDataCard;
