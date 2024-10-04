import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import banner from "./../../../public/Image.png";
import Link from "next/link";

const Banner = ({bg1}) => {
  const {image} = bg1;
  return (
    <div className="">
      <div>
        <div
          style={{
            backgroundImage: `url(${image})`,
            height: "600px", 
            backgroundSize: "cover", 
            backgroundPosition: "center",
          }}
        >
          {/* <Image width={1000} height={700} src={banner} alt=''/> */}

          <div className="lg:pl-[120px] pr-10 pl-5 md:pl-[100px] md:pr-[300px] pt-[240px] space-y-3 mx-2 lg:pr-[400px] lg:pb-[150px] lg:pt-[150.39px] ">
            <h1 className="lg:text-[56px] md:[40px] text-[30px] tracking-tighter text-main -space-y-32">
              Experiences of tomorrow. Engineered together.
            </h1>
            <p className="lg:text-[24px] md:text-[20] text-[15px] text-main">
              Let’s transform how people experience your business. All through
              next generation technology.
            </p>
           <Link href={'/about'}> <button className="btn btn-outline btn-info rounded-full bg-transparent border">
              Get in Touch <FaArrowRight />
            </button></Link>
          </div>
        </div>
      </div>
      <div className="lg:flex px-5 gap-10 my-28">
        <div>
          <Image alt="" width={1920} height={900} src={banner} />
        </div>
        <div className="space-y-6 md:pr-20 mt-5">
          <h1 className="text-main text-4xl">Your experience starts with Hijibusy</h1>
          <p className="pt-12 text-text">
            Engineering experiences that accelerate the growth of your business
            has never been simpler
          </p>
          <p className="text-text">
            We partner with you every step of the way to create solutions that
            combine next generation product engineering, slick customer
            experience and advanced AI.
          </p>
          <p className="text-text">End-to-end partnership is at the heart of the Ciklum experience</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
