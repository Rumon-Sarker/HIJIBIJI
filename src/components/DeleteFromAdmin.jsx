"use client";

import { deleteBlog } from "@/controls/delete/delete";
import Image from "next/image";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const DeleteFromAdmin = ({ data, deleteFromServer }) => {
  const [loadingId, setLoadingId] = useState(null);

  const handleDelete = async (id) => {
    setLoadingId(id);
    const res = await deleteFromServer(id);
    if (res.status) {
      toast.success("You have successfully deleted this");
    } else if (res.error) {
      toast.error("An error occurred, couldn't delete");
    }
    setLoadingId(null);
  };

  return (
    <div>
      <Toaster />
      <h1 className="text-error text-3xl my-5 text-center">Delete From Here</h1>
      <div className="grid lg:grid-cols-2 gap-10 mx-10 my-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex gap-1 justify-between items-center shadow-xl p-5 rounded-lg bg-base-100"
          >
            <div className="avatar">
              <div className="w-16 rounded-xl">
                <Image width={130} height={130} alt="" src={item.image} />
              </div>
            </div>
            <h1>{item.name}</h1>
            <button
              onClick={() => handleDelete(item.id)}
              className="btn rounded-full btn-error hover:ease-in-out hover:scale-110 hover:transition-all hover:duration-150"
              disabled={loadingId === item.id}
            >
              {loadingId === item.id ? (
                <span className="flex items-center">
                  Deleting
                  <span className="loading loading-spinner text-neutral ml-2"></span>
                </span>
              ) : (
                "Delete"
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteFromAdmin;
