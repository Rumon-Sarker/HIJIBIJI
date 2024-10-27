import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CaseStudies = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.caseStudy.findMany();
  return (
    <div>
      <div className="h-[200px] bg-main mx-5 lg:mx-10s flex justify-center shadow-xl items-center rounded-lg my-10">
        <h1 className="text-white text-center text-[50px] lg:text-[80px]">
          All Case Study
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 lg:mx-10">
        {data?.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className="bg-base-100 rounded-3xl p-3 m-3 h-[400px] shadow-xl"
          >
            <div className="text-main my-1 mx-5">
              <h1 className="px-5 text-4xl font-bold">
                {" "}
                {caseStudy.name.slice(0, 25)}{" "}
                <span className=" font-thin">{caseStudy.name.slice(25)}</span>
              </h1>
              <div className="flex gap-5 flex-wrap my-3 text-xs px-5">
                <h1 className="bg-main px-2 py-1 text-white rounded-md">
                  BFSI
                </h1>
                <h1 className="bg-main px-2 py-1 text-white rounded-md">
                  Product Engineering
                </h1>
                <h1 className="bg-main px-2 py-1 text-white rounded-md">
                  Software Architecture
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
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
