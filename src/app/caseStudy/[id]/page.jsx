import { PrismaClient } from "@prisma/client";
import React from "react";

const CaseStudyDetails = async ({ params }) => {
  const prisma = new PrismaClient();
  const caseStudy = await prisma.caseStudy.findUnique({
    where: { id: parseInt(params.id) },
  });
  return (
    <div>
      <div className="h-[200px] bg-main mx-5 lg:mx-10 flex justify-center items-center rounded-lg my-10">
        <h1 className="text-white text-center text-[50px] lg:text-[80px]">
          Case Study
        </h1>
      </div>
      <div className="p-5 mx-0 md:mx-10 lg:mx-20 bg-base-100 shadow-xl rounded-md">
        <h1 className="text-center text-main text-3xl my-3">{caseStudy.name}</h1>
        <p>{caseStudy.descripion}</p>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
