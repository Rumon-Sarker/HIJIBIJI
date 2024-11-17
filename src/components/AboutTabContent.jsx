import Image from "next/image";
import React from "react";

const AboutTabContent = ({ tabData }) => {
  return (
    <div>
      {tabData?.map((data) => (
        <div
          key={data.id}
          className="flex lg:flex-row lg:space-x-28 px-2 space-x-3 md:space-x-12 items-center"
        >
          <div className="flex flex-col space-y-5">
            <Image
              className="object-cover"
              width={50}
              height={50}
              src={data.image}
              alt=""
            />
            <h1>{}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutTabContent;
