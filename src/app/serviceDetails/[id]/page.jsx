import Image from "next/image";
import React from "react";
import img from "./../../../../public/Link (2).png";

const ServiceDetails = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <div>
        <div className="h-[200px] bg-main mx-10 flex justify-center items-center rounded-lg my-10">
          <h1 className="text-white text-center text-[50px] lg:text-[80px]">
            Service Name
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-5 my-10 mx-5 md:mx-12 lg:mx-20">
          <div>
            <Image src={img} alt="" />
          </div>
          <div>
            <h1 className="text-main text-3xl uppercase">Service Name</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
