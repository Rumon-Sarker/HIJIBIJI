"use client";
import LoadingButton from "@/components/LoadingButton";
import { createPortfolioCategory } from "@/controls/postToPortfolio/createPortfolio";
import { useState } from "react";
import toast from "react-hot-toast";

const CreatePortfolioCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createPortfolioCategory(categoryName);
    if (res.status === "success") {
      toast.success("Portfolio category created successfully!");
      setCategoryName("");
    } else {
      toast.error(`Failed to create category: ${res.message}`);
    }
  };

  return (
    <form
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
        <LoadingButton title={"Create"} loadingTitle={"Creating"} />
      </div>
    </form>
  );
};

export default CreatePortfolioCategory;
