"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "./../../../public/Link (2).png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="my-10 mx-5 md:mx-10 lg:mx-20">
      <h1 className="text-main text-3xl text-center my-10">
        Our finger&apos;s on the pulse of what&apos;s happening, right now, in
        your world
      </h1>
      <Swiper
       navigation={true}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className="bg-base-100 rounded-3xl p-3 m-3 shadow-xl">
            <div>
              <Image
                className="rounded-3xl cursor-pointer"
                src={img}
                width={500}
                height={450}
                alt=""
              />
            </div>

            <div className="">
              <h1 className="text-xl font-semibold text-text my-5 mx-5">
                Title of the Blogs
              </h1>
              <div className="text-sm mx-5">
                Amet voluptatum rerum delectus aut a aspernatur et laborum
                dolores deserunt in. updated
              </div>
              <div className="text-gray-400 text-xs mx-5 my-3">
                <h1>August 22, 2024</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="bg-base-100 rounded-3xl p-3 m-3 shadow-xl">
            <div>
              <Image
                className="rounded-3xl cursor-pointer"
                src={img}
                width={500}
                height={450}
                alt=""
              />
            </div>

            <div className="">
              <h1 className="text-xl font-semibold text-text my-5 mx-5">
                Title of the Blogs
              </h1>
              <div className="text-sm mx-5">
                Amet voluptatum rerum delectus aut a aspernatur et laborum
                dolores deserunt in. updated
              </div>
              <div className="text-gray-400 text-xs mx-5 my-3">
                <h1>August 22, 2024</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="bg-base-100 rounded-3xl p-3 m-3 shadow-xl">
            <div>
              <Image
                className="rounded-3xl cursor-pointer"
                src={img}
                width={500}
                height={450}
                alt=""
              />
            </div>

            <div className="">
              <h1 className="text-xl font-semibold text-text my-5 mx-5">
                Title of the Blogs
              </h1>
              <div className="text-sm mx-5">
                Amet voluptatum rerum delectus aut a aspernatur et laborum
                dolores deserunt in. updated
              </div>
              <div className="text-gray-400 text-xs mx-5 my-3">
                <h1>August 22, 2024</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="bg-base-100 rounded-3xl p-3 m-3 shadow-xl">
            <div>
              <Image
                className="rounded-3xl cursor-pointer"
                src={img}
                width={500}
                height={450}
                alt=""
              />
            </div>

            <div className="">
              <h1 className="text-xl font-semibold text-text my-5 mx-5">
                Title of the Blogs
              </h1>
              <div className="text-sm mx-5">
                Amet voluptatum rerum delectus aut a aspernatur et laborum
                dolores deserunt in. updated
              </div>
              <div className="text-gray-400 text-xs mx-5 my-3">
                <h1>August 22, 2024</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="bg-base-100 rounded-3xl p-3 m-3 shadow-xl">
            <div>
              <Image
                className="rounded-3xl cursor-pointer"
                src={img}
                width={500}
                height={450}
                alt=""
              />
            </div>

            <div className="">
              <h1 className="text-xl font-semibold text-text my-5 mx-5">
                Title of the Blogs
              </h1>
              <div className="text-sm mx-5">
                Amet voluptatum rerum delectus aut a aspernatur et laborum
                dolores deserunt in. updated
              </div>
              <div className="text-gray-400 text-xs mx-5 my-3">
                <h1>August 22, 2024</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="bg-base-100 rounded-3xl p-3 m-3 shadow-xl">
            <div>
              <Image
                className="rounded-3xl cursor-pointer"
                src={img}
                width={500}
                height={450}
                alt=""
              />
            </div>

            <div className="">
              <h1 className="text-xl font-semibold text-text my-5 mx-5">
                Title of the Blogs
              </h1>
              <div className="text-sm mx-5">
                Amet voluptatum rerum delectus aut a aspernatur et laborum
                dolores deserunt in. updated
              </div>
              <div className="text-gray-400 text-xs mx-5 my-3">
                <h1>August 22, 2024</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center items-center my-5">
        <button className="text-white bg-main btn hover:bg-transparent hover:border-2 hover:border-main hover:text-black">
          See all Blogs
        </button>
      </div>
    </div>
  );
};

export default Blog;
