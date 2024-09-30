"use client";
import React from "react";
import { createService } from "../../../controls/postToService/createService.js";
import toast, { Toaster } from "react-hot-toast";

const PostService = () => {
  const handlePost = async (formData) => {
    const res = await createService(formData);
    if (res.status) {
      toast.success("Service has been posted successfully!");
    }
    if (res.error) {
      toast.error("Service has not been posted!");
    }
  };
  return (
    <div>
      <Toaster />
      <div className="lg:mx-10 my-10">
        <h1 className="text-main text-3xl text-center my-2 uppercase">
          post service data
        </h1>
        <form
          action={handlePost}
          className="space-y-5 w-full bg-base-100 shadow-xl p-8"
        >
          <div className="md:flex justify-between flex-row gap-20 w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Service Name</span>
              </div>
              <input
                name="name"
                type="text"
                placeholder="type service name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              name="description"
              className="textarea textarea-md textarea-bordered h-24"
              placeholder="Enter Your Message"
            ></textarea>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Scope of the work</span>
            </div>
            <textarea
              name="scope"
              className="textarea textarea-md textarea-bordered h-24"
              placeholder="Enter Your Message"
            ></textarea>
          </label>
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
  );
};

export default PostService;
