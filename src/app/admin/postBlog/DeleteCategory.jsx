"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const DeleteCategory = ({ categoryData, deleteCategoryFromServer }) => {
  const [loadingId, setLoadingId] = useState(null);

  const handleDelete = async (id) => {
    setLoadingId(id);
    const res = await deleteCategoryFromServer(id);
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
      <div>
        <h1 className="text-3xl  text-center">Delete Category</h1>
        <div className="grid md:grid-cols-2 gap-10 place-content-center mx-5 lg:mx-10 my-10">
          {categoryData.map((data) => (
            <div
              className="flex justify-between items-center bg-base-100 shadow-xl p-5 rounded-md"
              key={data?.id}
            >
              <h1>{data?.name}</h1>
              <button
                onClick={() => handleDelete(data?.id)}
                className="btn rounded-full btn-error hover:ease-in-out hover:scale-110 hover:transition-all hover:duration-150"
                disabled={loadingId === data?.id}
              >
                {loadingId === data?.id ? (
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
    </div>
  );
};

export default DeleteCategory;
