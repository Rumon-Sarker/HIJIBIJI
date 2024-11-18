import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "./../../../public/Gradient.png";
import img2 from "./../../../public/bg.png";
import Link from "next/link";

const Banner = ({ bg1, exp }) => {
  function stringToSeparateArrays(inputString, separator = ".") {
    const parts = inputString.split(separator);
    return parts.map((part) => [part]);
  }
  const separateArrays = stringToSeparateArrays(exp?.details);
  console.log(separateArrays);

  return (
    <div className="">
      <div>
        <div
          style={{
            backgroundImage: `url(${bg1?.image})`,
            height: "600px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <Image width={1000} height={700} src={banner} alt=''/> */}

          <div className="lg:pl-[120px] pr-10 pl-5 md:pl-[100px] md:pr-[300px] pt-[240px] space-y-3 mx-2 lg:pr-[400px] lg:pb-[150px] lg:pt-[150.39px] ">
            <h1 className="lg:text-[56px] md:[40px] text-[30px] tracking-tighter text-main -space-y-32">
              {bg1?.title}
            </h1>
            <p className="lg:text-[24px] md:text-[20] text-[15px] text-main">
              {bg1?.details}
            </p>
            <Link href={"/about"}>
              {" "}
              <button className="btn btn-outline btn-info rounded-full bg-transparent border">
                Get in Touch <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:flex px-5 gap-16 my-28 mx-5 md:mx-16">
        <div className="flex relative ms-10">
          <Image
            alt=""
            className="md:h-[500px]"
            width={1920}
            height={700}
            src={exp?.image}
          />
          <div className="absolute -left-20 -top-4">
            <Image
              className="w-[70px] ms-2 md:w-[180px]"
              src={img1}
              alt=""
              width={200}
              height={700}
            />
          </div>
          <div className="absolute -left-8 -top-5">
            <Image
              className="w-[75px] md:w-[185px]"
              src={img2}
              alt=""
              width={200}
              height={700}
            />
          </div>
          <div className="absolute -right-16 -top-16 ">
          <Image
          className="md:w-[185px]"
            src={img2}
            alt=""
            width={200}
            height={700}
            
          />
        </div>
        </div>

        <div className="space-y-6 mt-5 ms-5  w-2/3">
          <h1 className="text-main text-4xl">{exp?.title}</h1>
          {separateArrays.map((newDetails, index) => (
            <p key={index} className="mt-3 text-text">
              {newDetails}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
