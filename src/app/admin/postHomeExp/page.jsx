"use client";
import LoadingButton from "@/components/LoadingButton";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createExperience } from "@/controls/postImageAndVIdeo/createImageAndVideo";
const PostHomeExp = () => {
  let formRef = useRef(null);

  const handlePost = async (formData) => {
    const res = await createExperience(formData);
    if (res.status) {
      toast.success("Experience has been posted successfully!");
      formRef.current.reset();
    }
    if (res.error) {
      toast.error("Experience has not been posted!");
    }
  };
  return (
    <div>
      <Toaster />
      <form
        action={handlePost}
        ref={formRef}
        className="space-y-5 w-full bg-base-100 shadow-xl p-8"
      >
        <div className="md:flex justify-between flex-row gap-20 w-full">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              required
              name="title"
              type="text"
              placeholder="type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Details</span>
          </div>
          <textarea
            required
            name="details"
            className="textarea textarea-md textarea-bordered h-24"
            placeholder="Enter Your Message"
          ></textarea>
        </label>
        <div className="flex flex-col gap-2">
          <span>Pick an image(Max file size 5MB)</span>
          <input
            required
            name="image"
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex justify-end">
          <LoadingButton title={"Post"} loadingTitle={"Posting"} />
        </div>
      </form>
    </div>
  );
};

export default PostHomeExp;
