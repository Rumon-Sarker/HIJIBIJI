"use client";

import { getJobRequest } from "@/controls/fetchData/fetchData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const JobRequest = () => {
  const [filter, setFilter] = useState("lastWeek");
  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleFilter = (filter) => {
    setFilter(filter);
    setFromDate(null);
    setToDate(null);
  };

  const handleDateFilter = () => {
    if (fromDate && toDate) {
      setFilter("customDate");
    } else {
      alert("Please select both From Date and To Date.");
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response =
          filter === "customDate"
            ? await getJobRequest({ fromDate, toDate }) // Send custom date range
            : await getJobRequest(filter); // Send predefined filter
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [filter, fromDate, toDate]);

  return (
    <div className="mx-5 md:mx-10 lg:mx-20">
      <h1 className="mx-20 mt-16">Filtered by</h1>

      {/* Predefined Filters */}
      <div className="flex gap-2 items-center mx-20">
        <button
          onClick={() => handleFilter("lastWeek")}
          className={`btn btn-xs ${filter === "lastWeek" ? "btn-active" : "btn-accent"}`}
        >
          Last Week
        </button>
        <button
          onClick={() => handleFilter("lastMonth")}
          className={`btn btn-xs ${filter === "lastMonth" ? "btn-active" : "btn-accent"}`}
        >
          Last Month
        </button>
        <button
          onClick={() => handleFilter("lastYear")}
          className={`btn btn-xs ${filter === "lastYear" ? "btn-active" : "btn-accent"}`}
        >
          Last Year
        </button>
      </div>

      {/* Custom Date Range Filter */}
      <div className="flex items-center gap-3 mx-20 my-5">
        <label>
          From:
          <ReactDatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            maxDate={toDate || new Date()}
            className="input input-bordered ml-2"
          />
        </label>
        <label>
          To:
          <ReactDatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            minDate={fromDate}
            maxDate={new Date()}
            className="input input-bordered ml-2"
          />
        </label>
        <button onClick={handleDateFilter} className="btn btn-md btn-accent">
          Filter
        </button>
      </div>

      {/* No Job Requests */}
      <div>
        {data.length === 0 && (
          <div>
            <h1 className="text-xl text-text text-center my-20">No job Request found</h1>
          </div>
        )}
      </div>

      {/* Job Request Data */}
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
