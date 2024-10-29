"use client";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createCaseStudy } from "../../../controls/postToCaseStudy/postToCaseStudy";
import LoadingButton from "@/components/LoadingButton";
import { deleteCaseStudy } from "@/controls/delete/delete";

const PostCaseStudy = ({ data }) => {
  let formRef = useRef(null);
  const [loadingId, setLoadingId] = useState(null);
  const handlePost = async (formData) => {
    const res = await createCaseStudy(formData);
    if (res.status) {
      toast.success("CaseStudy has been posted successfully!");
      formRef.current.reset();
    }
    if (res.error) {
      toast.error("CaseStudy has not been posted!");
    }
  };
  const handleDelete = async (id) => {
    setLoadingId(id);
    const res = await deleteCaseStudy(id);
    if (res.status) {
      toast.success("You have successfully deleted this");
    } else if (res.error) {
      toast.error("An error occurred, couldn't delete");
    }
    setLoadingId(null);
  };
  return (
    <div>
      <div>
        <Toaster />
        <div className="lg:mx-10 my-10">
          <h1 className="text-main text-3xl text-center my-2 uppercase">
            post CaseStudy data
          </h1>
          <form
            action={handlePost}
            ref={formRef}
            className="space-y-5 w-full bg-base-100 shadow-xl p-8"
          >
            <div className="md:flex justify-between flex-row gap-20 w-full">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Card Title word 1 ( maximum 1 word*)
                  </span>
                </div>
                <input
                  required
                  name="word1"
                  type="text"
                  placeholder="type only one word"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Card Title word 2 ( maximum 1 word*)
                  </span>
                </div>
                <input
                  required
                  name="word2"
                  type="text"
                  placeholder="type only one word"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Card Title word 3 ( maximum 1 word*)
                  </span>
                </div>
                <input
                  required
                  name="word3"
                  type="text"
                  placeholder="type only one word"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="md:flex justify-between flex-row gap-20 w-full">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">CaseStudy Name</span>
                </div>
                <input
                  required
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
                required
                name="description"
                className="textarea textarea-md textarea-bordered h-24"
                placeholder="Enter Your Message"
              ></textarea>
            </label>

            <div className="flex justify-end">
              <LoadingButton title={"Post"} loadingTitle={"Posting"} />
            </div>
          </form>
        </div>
      </div>
      <h1 className="text-center text-3xl text-error my-5">Delete From Here</h1>
      <div className="grid md:grid-cols-2 gap-10 md:mx-10 mx-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-base-100 shadow-xl p-5 rounded-lg"
          >
            <h1>{item.name}</h1>
            <button
              onClick={() => handleDelete(item.id)}
              className="btn rounded-full btn-error hover:ease-in-out hover:scale-110 hover:transition-all hover:duration-150 my-2"
              disabled={loadingId === item.id}
            >
              {loadingId === item.id ? (
                <span className="flex items-center">
                  Deleting
                  <span className="loading loading-spinner text-neutral ml-2"></span>
                </span>
              ) : (
                "Delete"
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCaseStudy;
