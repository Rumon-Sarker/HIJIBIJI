"use client";
import React, { useRef } from "react";
import { createPartnerImage } from "../../../controls/postImageAndVIdeo/createImageAndVideo";
import toast, { Toaster } from "react-hot-toast";
import LoadingButton from "@/components/LoadingButton";

const PostPartner = () => {
  const formRef = useRef(null);
  const handlePost = async (formData) => {
    const res = await createPartnerImage(formData);
    if (res.status) {
      toast.success("Partner image has been posted successfully!");
      formRef.current.reset();
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
          ref={formRef}
          className="space-y-5 w-full bg-base-100 shadow-xl p-8 my-10"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Link</span>
            </div>
            <input
              required
              name="link"
              type="text"
              placeholder="type/past here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Pick image (maximum file size 5MB)
              </span>
            </div>
            <input
              required
              name="image"
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>
          <div className="flex justify-end">
            <LoadingButton title={"Post"} loadingTitle={"Posting"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostPartner;
