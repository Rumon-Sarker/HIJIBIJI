import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import img from "./../../../../public/Link (1).png";
import PortfolioDataFilter from "../../../components/PortfolioDataFilter";
import { PrismaClient } from "@prisma/client";
import advancedFormat from 'dayjs/plugin/advancedFormat';
import dayjs from "dayjs";
import SocialSharing from "@/components/SocialSharing";
const PortfolioDetails = async ({ params }) => {
  const prisma = new PrismaClient();

  const res = await prisma.portfolio.findUnique({
    where: { id: parseInt(params.id) },
  });
  const data = await prisma.portfolio.findMany({});
  const { name, category, id, image, description, scope ,createdAt } = res;
  
  dayjs.extend(advancedFormat);
  const formattedDate = dayjs(createdAt).format('dddd - MMMM Do, YYYY');
  
  const getFilteredItems = (data, category, excludedIds,) => {
    return data
      .filter((item) => item.category === category && item.id !== excludedIds)
      .slice(0, 3);
  };

  const relatedItems = getFilteredItems(data, category, id);

  return (
    <div>
      <div>
        <div className="h-[200px] bg-main mx-5 lg:mx-10 flex justify-center items-center rounded-lg my-10">
          <h1 className="text-white text-center text-[50px] lg:text-[80px]">
           {name}
          </h1>
        </div>
        <div className="lg:mx-20 mx-10">
          <h1 className="text-main text-3xl">{name}</h1>

          <h1 className="text-text text-xl my-6">{formattedDate}</h1>
          <h1 className="text-text ">Share </h1>
         <SocialSharing title={name}/>
          <h1 className="border-b-2 border-text my-5"></h1>
        </div>
        <div className="lg:mx-20 mx-5 md:mx-12 flex flex-col justify-center items-center">
          <Image
            src={image}
            className="object-contain my-5"
            width={850}
            height={600}
            alt=""
          />
          <h1>
           {description}
          </h1>
        </div>
        <div className="lg:mx-20 md:mx-12 mx-5">
          <h1 className="text-main text-3xl my-5">SCOPE OF THE WORK</h1>
          <p className="text-text">
            {scope}
          </p>
        </div>
        <div className="lg:mx-20 md:mx-10 mx-5 my-5">
          <h1 className="text-main text-3xl my-5">RELATED PROJECT</h1>
          <div>
            {/* load data by this id's category name  */}
            <PortfolioDataFilter cardData={relatedItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
