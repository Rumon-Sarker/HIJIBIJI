"use client";
import React from "react";

import toast, { Toaster } from "react-hot-toast";
import { createVideo } from "../../../controls/postImageAndVIdeo/createImageAndVideo";
import LoadingButton from "@/components/LoadingButton";

const PostVideo = () => {
  const handlePost = async (fromData) => {
    const res = await createVideo(fromData);
    if (res.status) {
      toast.success("Video has been posted successfully!");
    }
    if (res.error) {
      toast.error("Video has not been posted!");
    }
  };
  return (
    <div>
      <Toaster />
      <div className="my-10 lg:mx-10 mx-5">
        <h1 className="text-main text-3xl text-center my-2 uppercase">
          post Video for about us{" "}
        </h1>
        <form
          action={handlePost}
          className="space-y-5 w-full bg-base-100 shadow-xl p-8 my-10"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick a video for about page</span>
            </div>
            <input
              required
              name="video"
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

export default PostVideo;
