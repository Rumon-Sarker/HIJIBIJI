"use client";
import Image from "next/image";
import React from "react";
import { downloadExcel } from "../utils/download";

const HomeTable = ({ homeData }) => {
  const handleDownload = (id) => {
    downloadExcel(id);
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-main text-2xl my-5">
          From Main contact
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Interested In</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {homeData?.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <h1 className="font-bold">
                        {item.firstname} {item.lastname}
                      </h1>
                    </div>
                  </td>
                  <td>
                    <h1>{item.email}</h1>
                  </td>
                  <td>
                    <h1>{item.country}</h1>
                  </td>
                  <td>
                    <h1>{item.interested}</h1>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDownload(item.id)}
                      className="btn bg-main hover:bg-transparent hover:border-2 hover:border-main text-white hover:text-black btn-xs"
                    >
                      Download
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeTable;
