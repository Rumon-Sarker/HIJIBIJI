import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";

const jobRequest = async () => {
  const prisma = new PrismaClient();
  const appliers = await prisma.job.findMany({ include: { applyForms: true } });
  return (
    <div className="mx-5 md:mx-10 lg:mx-20">
      {appliers.map((applier) => (
        <div key={applier.id}>
          <h1 className="text-main text-3xl my-5">{applier.jobTitle} (Job-id: {applier.id})</h1>

          {applier.applyForms.map((applyInfo, index) => (
            <div className="" key={applyInfo.id}>
              {" "}
              <ul className="my-5">
                <li className="text-2xl text-teal-500">
                  Serial Number: {index < 1 ? index + 1 : index + 1}
                </li>
                <li>
                  <Link className="link" href={applyInfo.image}>
                    Resume (click to view)
                  </Link>
                </li>

                <li>
                  Name: {applyInfo.firstname}
                  {applyInfo.lastname}
                </li>
                <li>Gender: {applyInfo.gender}</li>
                <li>Date: {applyInfo.date}</li>
                <li>Contact Number: {applyInfo.contact}</li>
                <li>Email: {applyInfo.email}</li>
                <li>Present Address: {applyInfo.address}</li>
                <li>Cover Letter: {applyInfo.coverletter}</li>
                <button onClick={()=> handleDelete(item?.id)} className="btn bg-[#ff0000]  text-white hover:text-black hover:bg-[#be2d2d] btn-xs">
                    Delete
                  </button>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default jobRequest;
