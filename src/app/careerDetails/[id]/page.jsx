import React from "react";
import { FileInput, Label } from "flowbite-react";
import ApplicationForm from '../../../components/ApplicationForm'
const CareerDetails = () => {
  return (
    <div>
      <div className="h-[200px] bg-main lg:mx-10 mx-5 flex justify-center items-center rounded-lg my-10">
        <h1 className="text-white text-center text-[50px] lg:text-[80px]">
          Application Form
        </h1>
      </div>

      <div className="mx-5 md:mx-10 lg:mx-20">
        <div className="bg-base-100 shadow-xl p-5">
          {/* job responsibility and requirements */}
          <h1 className="text-3xl">Job Requirements and Responsibilities</h1>
        </div>
        <ApplicationForm/>
      </div>
    </div>
  );
};

export default CareerDetails;
