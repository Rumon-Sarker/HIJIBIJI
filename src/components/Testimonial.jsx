"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "./../../public/Link (1).png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import {Autoplay, FreeMode} from "swiper/modules";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div className="my-10 mx-5 md:mx-8 lg:mx-16 flex justify-center items-center">
      <Swiper
        
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
        modules={[Autoplay, FreeMode,]}
      
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-text p-8 bg-base-100 shadow-xl my-5 rounded-md">
            <h1>
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </h1>
            <div className="flex items-center my-5 gap-5">
              <div className="rounded-full">
                <Image
                  src={img}
                  className="rounded-full"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <div className="">
                <h1 className="text-main font-2xl">Emily Stones</h1>
                <h1 className="text-text">CEO, Marketing Guru</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-text p-8 bg-base-100 shadow-xl my-2 rounded-md">
            <h1>
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </h1>
            <div className="flex items-center my-5 gap-5">
              <div className="rounded-full">
                <Image
                  src={img}
                  className="rounded-full"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <div className="">
                <h1 className="text-main font-2xl">Emily Stones</h1>
                <h1 className="text-text">CEO, Marketing Guru</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-text p-8 bg-base-100 shadow-xl my-2 rounded-md">
            <h1>
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </h1>
            <div className="flex items-center my-5 gap-5">
              <div className="rounded-full">
                <Image
                  src={img}
                  className="rounded-full"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <div className="">
                <h1 className="text-main font-2xl">Emily Stones</h1>
                <h1 className="text-text">CEO, Marketing Guru</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-text p-8 bg-base-100 shadow-xl my-2 rounded-md">
            <h1>
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </h1>
            <div className="flex items-center my-5 gap-5">
              <div className="rounded-full">
                <Image
                  src={img}
                  className="rounded-full"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <div className="">
                <h1 className="text-main font-2xl">Emily Stones</h1>
                <h1 className="text-text">CEO, Marketing Guru</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-text p-8 bg-base-100 shadow-xl my-2 rounded-md">
            <h1>
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </h1>
            <div className="flex items-center my-5 gap-5">
              <div className="rounded-full">
                <Image
                  src={img}
                  className="rounded-full"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <div className="">
                <h1 className="text-main font-2xl">Emily Stones</h1>
                <h1 className="text-text">CEO, Marketing Guru</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-text p-8 bg-base-100 shadow-xl my-2 rounded-md">
            <h1>
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </h1>
            <div className="flex items-center my-5 gap-5">
              <div className="rounded-full">
                <Image
                  src={img}
                  className="rounded-full"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <div className="">
                <h1 className="text-main font-2xl">Emily Stones</h1>
                <h1 className="text-text">CEO, Marketing Guru</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-text p-8 bg-base-100 shadow-xl my-2 rounded-md">
            <h1>
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </h1>
            <div className="flex items-center my-5 gap-5">
              <div className="rounded-full">
                <Image
                  src={img}
                  className="rounded-full"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <div className="">
                <h1 className="text-main font-2xl">Emily Stones</h1>
                <h1 className="text-text">CEO, Marketing Guru</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-text p-8 bg-base-100 shadow-xl my-2 rounded-md">
            <h1>
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </h1>
            <div className="flex items-center my-5 gap-5">
              <div className="rounded-full">
                <Image
                  src={img}
                  className="rounded-full"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <div className="">
                <h1 className="text-main font-2xl">Emily Stones</h1>
                <h1 className="text-text">CEO, Marketing Guru</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-text p-8 bg-base-100 shadow-xl my-2 rounded-md">
            <h1>
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </h1>
            <div className="flex items-center my-5 gap-5">
              <div className="rounded-full">
                <Image
                  src={img}
                  className="rounded-full"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <div className="">
                <h1 className="text-main font-2xl">Emily Stones</h1>
                <h1 className="text-text">CEO, Marketing Guru</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-text p-8 bg-base-100 shadow-xl my-2 rounded-md">
            <h1>
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </h1>
            <div className="flex items-center my-5 gap-5">
              <div className="rounded-full">
                <Image
                  src={img}
                  className="rounded-full"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <div className="">
                <h1 className="text-main font-2xl">Emily Stones</h1>
                <h1 className="text-text">CEO, Marketing Guru</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-text md:p-5 p-2 lg:p-8 bg-base-100 shadow-xl my-2 rounded-md">
            <h1>
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </h1>
            <div className="flex items-center my-5 gap-5">
              <div className="rounded-full">
                <Image
                  src={img}
                  className="rounded-full"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              <div className="">
                <h1 className="text-main font-2xl">Emily Stones</h1>
                <h1 className="text-text">CEO, Marketing Guru</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;
