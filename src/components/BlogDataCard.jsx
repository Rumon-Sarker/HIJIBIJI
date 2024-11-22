import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import advancedFormat from 'dayjs/plugin/advancedFormat';

const BlogDataCard = ({ cardData }) => {
  const { name, category, description, id, image,createdAt } = cardData;
  dayjs.extend(advancedFormat);
  const formattedDate = dayjs(createdAt).format('dddd - MMMM Do, YYYY');
  return (
    <div>
      <div className="bg-base-100 h-[480px] rounded-3xl p-3 shadow-xl">
        <div>
          <Image
            className="rounded-3xl cursor-pointer h-[230px] w-full object-fill"
            src={image}
            width={500}
            height={450}
            alt=""
          />
        </div>
        <div className="text-gray-400 text-xs mx-5 my-3">
          <h1>{category}</h1>
          <h1>{formattedDate}</h1>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold text-text my-5 mx-5">{name}</h1>
          <div className="text-sm mx-5">
            {description?.length < 70 ? (
              <>{description}</>
            ) : (
              <>{description?.slice(0, 70)}</>
            )}
          </div>
          <div className="flex justify-end px-3 my-5 text-text">
            <Link
              className="text-main flex gap-1 items-center"
              href={`/blogDetails/${id}`}
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
