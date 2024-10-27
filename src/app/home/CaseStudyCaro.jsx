"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "./../../../public/Link (2).png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CaseStudyCaro = ({ caseStudies }) => {
  return (
    <div className="lg:mt-32 md:20 mt-10 mx-5 md:mx-10 lg:mx-20">
      <h1 className="text-main text-3xl text-center my-10">
        Exceptional client experiences driving impressive business results
      </h1>
      <Swiper
        navigation={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          390: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, FreeMode, Navigation]}
        className="mySwiper"
      >
        {caseStudies?.map((caseStudy) => (
          <SwiperSlide key={caseStudy.id}>
            <div className="flex justify-center items-center">
              <div className="bg-base-100 rounded-3xl p-3 m-3 h-[400px] shadow-xl ">
                <div className="text-main my-1 mx-5">
                  <h1 className="px-5 text-4xl font-bold">
                    {" "}
                    {caseStudy.name.slice(0, 25)}{" "}
                    <span className=" font-thin">
                      {caseStudy.name.slice(25,56)}
                    </span>
                  </h1>
                  <div className="flex gap-5 flex-wrap my-3 text-xs px-5">
                    <h1 className="bg-main px-2 py-1 text-white rounded-md">
                      {caseStudy.word1}
                    </h1>
                    <h1 className="bg-main px-2 py-1 text-white rounded-md">
                      {caseStudy.word2}
                    </h1>
                    <h1 className="bg-main px-2 py-1 text-white rounded-md">
                      {caseStudy.word3}
                    </h1>
                  </div>
                </div>
                <div className="flex justify-start mt-10 px-5 mx-5 text-text">
                  <Link
                    className="text-main flex gap-3 items-center"
                    href={`/caseStudy/${caseStudy.id}`}
                  >
                    Read
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center my-5">
        <Link href={"/caseStudies"}>
          <button className="text-white bg-main btn hover:bg-transparent hover:border-2 hover:border-main hover:text-black my-10">
            See all Case Study
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCaro;
