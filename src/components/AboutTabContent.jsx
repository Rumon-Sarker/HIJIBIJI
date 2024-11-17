import Image from "next/image";
import React from "react";

const AboutTabContent = ({ tabData }) => {
  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
        {tabData?.map((data) => (
          <div key={data.id} className="flex flex-col space-y-5 items-center">
            <Image
              className="object-cover h-14 w-14"
              width={50}
              height={50}
              src={data.image}
              alt=""
            />
            <h1>{data.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTabContent;
