"use client";
import advancedFormat from "dayjs/plugin/advancedFormat";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

const Blog = ({ blog }) => {
  dayjs.extend(advancedFormat);

  return (
    <div className="my-10 mx-5 md:mx-10 lg:mx-20">
      <h1 className="text-main text-3xl text-center my-10">
        Our finger's on the pulse of what's happening, right now, in your world
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
        {blog?.map((item) => (
          <SwiperSlide key={item.id} className="">
            <div className="bg-base-100 rounded-3xl h-[430px] p-3 m-3 shadow-xl">
              <div>
                <Image
                  className="rounded-3xl cursor-pointer h-[200px]"
                  src={item.image}
                  width={500}
                  height={450}
                  alt={item.name || "Blog image"}
                />
              </div>

              <div className="">
                <h1 className="text-2xl font-semibold text-text my-5 mx-5">
                  {item.name}
                </h1>

                <div className="text-gray-400 text-xs mx-5 my-4">
                  {/* Format the date here using dayjs */}
                  <h1>
                    {dayjs(item?.createdAt).format("dddd - MMMM Do, YYYY")}
                  </h1>
                </div>
                <div className="flex gap-5 flex-wrap my-3 text-xs px-5">
                  <h1 className="bg-main px-2 py-1 text-white rounded-md">
                    {item.word1}
                  </h1>
                  <h1 className="bg-main px-2 py-1 text-white rounded-md">
                    {item.word2}
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center my-5">
        <Link href={"/blogs"}>
          <button className="text-white bg-main btn hover:bg-transparent hover:border-2 hover:border-main hover:text-black my-10">
            See all Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
