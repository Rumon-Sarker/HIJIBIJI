"use client";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoadingButton from "@/components/LoadingButton.jsx";
import { createBlog } from "@/controls/postToBlog/createBlog";
import { getBlogCategories } from "@/controls/fetchData/fetchData";
const PostBlog = () => {
  const formRef = useRef(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const categories = await getBlogCategories();
      setCategories(categories);
    }
    fetchCategories();
  }, []);

  const handlePost = async (formData) => {
    const res = await createBlog(formData);

    if (res.status) {
      toast.success("Blog has been posted successfully!");
      formRef.current.reset();
    }
    if (res.error) {
      console.log(res.error)
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
          </div>
          <div className="md:flex justify-between flex-row gap-20 w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Title of the blog</span>
              </div>
              <input
                required
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
              <select
                name="categoryId"
                className="select select-bordered"
                required
              >
                <option disabled selected>
                  Select a Blog category
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
              name="description"
              required
              className="textarea textarea-md textarea-bordered h-24"
              placeholder="Enter Your Message"
            ></textarea>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Pick image(maximum file size 5MB)
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

export default PostBlog;
