'use client'
import React from "react";
import { createPartnerImage } from "../../../controls/postImageAndVIdeo/createImageAndVideo";
import toast, { Toaster } from "react-hot-toast";

const PostPartner = () => {
  const handlePost = async (formData) => {
    const res = await createPartnerImage(formData);
    if (res.status) {
      toast.success("Partner image has been posted successfully!");
    }
    if (res.error) {
      toast.error("Partner image has not been posted!");
    }
  };
  return (
    <div>
      <Toaster />
      <div className="lg:mx-10 my-10">
        <h1 className="text-main text-3xl text-center my-2 uppercase">
          post partner image{" "}
        </h1>
        <form
          action={handlePost}
          className="space-y-5 w-full bg-base-100 shadow-xl p-8 my-10"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick image</span>
            </div>
            <input
              name="image"
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>
          <div className="flex justify-end">
            <button className="btn bg-main hover:bg-transparent hover:border-2 hover:border-main">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostPartner;
