'use client'
import { getJobRequest } from "@/controls/fetchData/fetchData";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const JobRequest = () => {
  const [filter, setFilter] = useState('lastWeek');
  const [data, setData] = useState([]);

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getJobRequest(filter);
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [filter]);

  return (

     <div className="mx-5 md:mx-10 lg:mx-20">
      <h1 className="mx-20 mt-16">Filtered by</h1>
      <div className="flex gap-2 items-center mx-20">
        <button
          onClick={() => handleFilter('lastWeek')}
          className={`btn btn-xs ${filter === 'lastWeek' ? 'btn-active' : 'btn-accent'}`}
        >
          Last Week
        </button>
        <button
          onClick={() => handleFilter('lastMonth')}
          className={`btn btn-xs ${filter === 'lastMonth' ? 'btn-active' : 'btn-accent'}`}
        >
          Last Month
        </button>
        <button
          onClick={() => handleFilter('lastYear')}
          className={`btn btn-xs ${filter === 'lastYear' ? 'btn-active' : 'btn-accent'}`}
        >
          Last Year
        </button>
      </div>
      <div>
        {data.length === 0 && (
          <div>
            <h1 className="text-xl text-text text-center my-20">No job Request found</h1>
          </div>
        )}
      </div>
      {data?.map((applier) => (
        <div key={applier.id}>
          <h1 className="text-main text-3xl my-5">
            {applier.jobTitle} (Job-id: {applier.id})
          </h1>

          {applier?.applyForms.map((applyInfo, index) => (
            <div className="" key={applyInfo.id}>
              <ul className="my-5">
                <li className="text-2xl text-teal-500">
                  Serial Number: {index + 1}
                </li>
                <li>
                  <Link className="link" href={applyInfo.image}>
                    Resume (click to view)
                  </Link>
                </li>
                <li>
                  Name: {applyInfo.firstname} {applyInfo.lastname}
                </li>
                <li>Gender: {applyInfo.gender}</li>
                <li>Date: {applyInfo.date}</li>
                <li>Contact Number: {applyInfo.contact}</li>
                <li>Email: {applyInfo.email}</li>
                <li>Present Address: {applyInfo.address}</li>
                <li>Cover Letter: {applyInfo.coverletter}</li>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>

  );
};

export default JobRequest;
