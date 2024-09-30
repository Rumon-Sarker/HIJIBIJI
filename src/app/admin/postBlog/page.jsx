"use client";
import React from "react";
import { createBlog } from "../../../controls/postToBlog/createBlog.js";
import toast, { Toaster } from "react-hot-toast";
const PostBlog = () => {
  const handlePost = async (formData) => {
    const res = await createBlog(formData);
    if (res.status) {
      toast.success("Blog has been posted successfully!");
    }
    if (res.error) {
      toast.error("Blog has not been posted!");
    }
  };
  return (
    <div>
      <Toaster />
      <div className="lg:mx-10 my-10">
        <h1 className="text-main text-3xl text-center my-2 uppercase">
          post blog data
        </h1>
        <form
          action={handlePost}
          className="space-y-5 w-full bg-base-100 shadow-xl p-8"
        >
          <div className="md:flex justify-between flex-row gap-20 w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Title of the blog</span>
              </div>
              <input
                name="name"
                type="text"
                placeholder="type title of the blog"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Select a Category</span>
              </div>
              <select name="category" className="select select-bordered">
                <option defaultChecked>Pick one</option>
                <option>category1</option>
                <option>category2</option>
                <option>category3</option>
                <option>category4</option>
                <option>category5</option>
              </select>
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

export default PostBlog;
