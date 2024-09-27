import React from "react";

const PostHomeBg = () => {
  return (
    <div>
      <div className="lg:mx-10 my-10">
        <h1 className="text-main text-3xl text-center my-2 uppercase">
          post Home background image{" "}
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
        <div>
        <form className="space-y-5 w-full bg-base-100 shadow-xl p-8 my-10">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick image for 2nd background</span>
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
     
    </div>
  );
};

export default PostHomeBg;
