import React from "react";

const PostService = () => {
  return (
    <div>
      <div className="lg:mx-10 my-10">
        <h1 className="text-main text-3xl text-center my-2 uppercase">
          post service data
        </h1>
        <form className="space-y-5 w-full bg-base-100 shadow-xl p-8">
          <div className="md:flex justify-between flex-row gap-20 w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Service Name</span>
              </div>
              <input
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
              className="textarea textarea-md textarea-bordered h-24"
              placeholder="Enter Your Message"
            ></textarea>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Scope of the work</span>
            </div>
            <textarea
              className="textarea textarea-md textarea-bordered h-24"
              placeholder="Enter Your Message"
            ></textarea>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick image</span>
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

export default PostService;
