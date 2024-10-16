"use client";
import Image from "next/image";
import React from "react";
import { deletePartner } from "../../../controls/deletePartner/deletePartner";
import toast, { Toaster } from "react-hot-toast";
const DeleteWrapper = ({ data }) => {
  const handleDelete = async (id) => {
    const res = await deletePartner(id);
    if (res.status) {
      toast.success("You have successfully deleted this partner");
    }
    if (res.error) {
      toast.error("An error occurred couldn't Delete this partner ");
    }
  };
  return (
    <div>
      <Toaster />
      <h1 className="text-center my-5 text-main text-2xl">Delete Partner</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 lg:mx-10">
        {data?.map((item) => (
          <div className="bg-base-200 p-5 rounded-lg shadow-xl" key={item.id}>
            <Image
              className="rounded-lg object-cover hover:scale-110 hover:duration-100 hover:ease-linear cursor-pointer hover:transition-all"
              src={item.image}
              alt="partner image"
              layout="responsive"
              quality={100}
              width={400}
              height={400}
            />
            <div className="flex justify-end">
              <button
                onClick={() => handleDelete(item.id)}
                className="btn bg-main hover:bg-blue-700 mt-5"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteWrapper;
