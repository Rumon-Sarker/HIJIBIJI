"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { createBg1, createBg2 } from "../../../controls/postImageAndVIdeo/createImageAndVideo.js";

const PostHomeBg = () => {
  const handlePost1 = async (formData) => {
    const res = await createBg1(formData);
    if (res.status) {
      toast.success("Background image 1 has been posted successfully!");
    }
    if (res.error) {
      toast.error("Background image 1 has not been posted!");
    }
  };
  const handlePost2 = async (formData) => {
    const res = await createBg2(formData);
    if (res.status) {
      toast.success("Background image 2 has been posted successfully!");
    }
    if (res.error) {
      toast.error("Background image 2 has not been posted!");
    }
  };

  return (
    <div>
      <Toaster />
      <div className="lg:mx-10 my-10">
        <h1 className="text-main text-3xl text-center my-2 uppercase">
          post Home background image{" "}
        </h1>
        <form
          action={handlePost1}
          className="space-y-5 w-full bg-base-100 shadow-xl p-8 my-10"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick image for 1st background</span>
            </div>
            <input
              name="image"
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn bg-main hover:bg-transparent hover:border-2 hover:border-main"
            >
              Post
            </button>
          </div>
        </form>
        <div>
          <form
            action={handlePost2}
            className="space-y-5 w-full bg-base-100 shadow-xl p-8 my-10"
          >
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  Pick image for 2nd background
                </span>
              </div>
              <input
                name="image"
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </label>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn bg-main hover:bg-transparent hover:border-2 hover:border-main"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostHomeBg;
