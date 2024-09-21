import React from "react";
import ServiceDataCard from "./ServiceDataCard";

const ServiceData = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-5 lg:mx-16 mx-2 md:mx-5 min-h-screen">
        {/* {items?.map((item) => ( */}
          <ServiceDataCard  />
          <ServiceDataCard  />
          <ServiceDataCard  />
        {/* ))} */}
      </div>
    </div>
  );
};

export default ServiceData;
