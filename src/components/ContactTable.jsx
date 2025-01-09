"use client";

import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { downloadExcel } from "../utils/download";
import { deleteContactMessage } from "@/controls/delete/delete";
import toast, { Toaster } from "react-hot-toast";
import { getContactData } from "@/controls/fetchData/fetchData";

const ContactTable = () => {
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
      toast.error("Please select both From Date and To Date.");
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response =
          filter === "customDate"
            ? await getContactData({ fromDate, toDate }) // Send dates for filtering
            : await getContactData(filter);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [filter, fromDate, toDate]);

  const handleDownload = (id) => {
    const type = "contact";
    downloadExcel(id, type);
  };

  const handleDelete = async (id) => {
    const res = await deleteContactMessage(id);
    if (res.status) {
      toast.success("Contact Message has been Deleted successfully!");
    }
    if (res.error) {
      toast.error("Contact Message has not been Deleted!");
    }
  };

  return (
    <div>
      <Toaster />
      <div>
        <h1 className="text-center text-main text-2xl my-5">From Main Contact</h1>
        <h1 className="mx-20">Filtered by</h1>
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

        {/* Date Range Filter */}
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

        <div>
          {data?.length === 0 ? (
            <h1 className="text-center text-2xl text-text my-20">No Contact Messages</h1>
          ) : null}
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <h1 className="font-bold">
                        {item.firstname} {item.lastname}
                      </h1>
                    </div>
                  </td>
                  <td>
                    <h1>{item.contact}</h1>
                  </td>
                  <td>
                    <h1>{item.email}</h1>
                  </td>
                  <td>
                    <h1>{item.message}</h1>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item?.id)}
                      className="btn bg-[#ff0000] text-white hover:text-black hover:bg-[#be2d2d] btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDownload(item?.id)}
                      className="btn bg-main hover:bg-transparent hover:border-2 hover:border-main text-white hover:text-black btn-xs"
                    >
                      Download
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactTable;
