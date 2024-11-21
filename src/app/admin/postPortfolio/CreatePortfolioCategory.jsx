"use client";
import LoadingButton from "@/components/LoadingButton";
import { createPortfolioCategory } from "@/controls/postToPortfolio/createPortfolio";

import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const CreatePortfolioCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await createPortfolioCategory(categoryName);
    if (res.status === "success") {
      toast.success("Portfolio category created successfully!");
      setCategoryName("");
      formRef.current.reset();
      setLoading(false);
    } else {
      toast.error(`Failed to create category: ${res.message}`);
    }
  };

  return (
    <div>
      <Toaster />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-5 bg-base-100 shadow-xl p-8 m-10"
      >
        <label className="label">
          <span className="label-text">Portfolio Category Name</span>
        </label>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter portfolio category name"
          className="input input-bordered w-full"
          required
        />
        <div className="flex justify-end">
          <button
            disabled={loading}
            className="btn bg-main hover:border-2 hover:border-main hover:bg-transparent rounded-full"
          >
            {loading ? (
              <span className="loading loading-spinner text-neutral ml-2"></span>
            ) : (
              "create"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePortfolioCategory;
