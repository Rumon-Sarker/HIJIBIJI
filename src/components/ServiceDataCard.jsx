import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

import { MdRectangle } from "react-icons/md";

const ServiceDataCard = ({ itemData }) => {
  const { name, image, id, line1, line2, line3 } = itemData;
  return (
    <div>
      <div className="bg-base-100 h-[500px] rounded-3xl p-3 shadow-xl">
        <div>
          <Image
            className="rounded-3xl cursor-pointer h-[280px]"
            src={image}
            width={500}
            height={450}
            alt=""
          />
        </div>
        <div className="my-3 mx-5">
          <h1 className="text-xl font-semibold text-text my-5">{name}</h1>
          <div className="text-sm ">
            <h1 className="flex gap-2 items-center text-[#B3B3B3]">
              <MdRectangle />
              {line1}{" "}
            </h1>
            <h1 className="flex gap-2 items-center text-[#B3B3B3]">
              <MdRectangle />
              {line2}{" "}
            </h1>
            <h1 className="flex gap-2 items-center text-[#B3B3B3]">
              <MdRectangle /> {line3}
            </h1>
          </div>
        </div>
        <div className="flex justify-end px-3 my-5 text-text">
          <Link
            className="text-main flex gap-1 items-center"
            href={`/serviceDetails/${id}`}
          >
            View Details
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDataCard;
