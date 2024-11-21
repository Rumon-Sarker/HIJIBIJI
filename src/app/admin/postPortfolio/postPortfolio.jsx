"use client";
import toast, { Toaster } from "react-hot-toast";
import { createPortfolio } from "../../../controls/postToPortfolio/createPortfolio.js";
import { useEffect, useRef, useState } from "react";
import LoadingButton from "@/components/LoadingButton.jsx";
import { getPortfolioCategories } from "@/controls/fetchData/fetchData.js";

const PostPortfolio = () => {
  const formRef = useRef(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const categories = await getPortfolioCategories();
      setCategories(categories);
    }
    fetchCategories();
  }, []);

  const handlePost = async (formData) => {
    const res = await createPortfolio(formData);

    if (res.status) {
      toast.success("Portfolio has been posted successfully!");
      formRef.current.reset();
    }
    if (res.error) {
      toast.error("Portfolio has not been posted!");
    }
  };
  return (
    <div className="lg:mx-10 my-10">
      <Toaster />
      <h1 className="text-main text-3xl text-center my-2 uppercase">
        post portfolio data
      </h1>
      <form
        action={handlePost}
        ref={formRef}
        className="space-y-5 w-full bg-base-100 shadow-xl p-8"
      >
        <div className="md:flex justify-between flex-row gap-20 w-full">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Project Name</span>
            </div>
            <input
              required
              id="name"
              type="text"
              name="name"
              placeholder="type project name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Client Name</span>
            </div>
            <input
              required
              id="clientName"
              type="text"
              name="clientName"
              placeholder="type client name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Select a Category</span>
            </div>
            <select
              name="categoryId"
              className="select select-bordered"
              required
            >
              <option disabled selected>
                Select a portfolio category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            required
            id="description"
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
            required
            id="scope"
            name="scope"
            className="textarea textarea-md textarea-bordered h-24"
            placeholder="Enter Your Message"
          ></textarea>
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
  );
};

export default PostPortfolio;
