import React from "react";

const PostVideo = () => {
  return (
    <div>
      <div className="my-10 lg:mx-10 mx-5">
        <h1 className="text-main text-3xl text-center my-2 uppercase">
          post Video for about us{" "}
        </h1>
        <form className="space-y-5 w-full bg-base-100 shadow-xl p-8 my-10">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick image for 1st background</span>
            </div>
            <input
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

export default PostVideo;
