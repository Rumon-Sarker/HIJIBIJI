"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const LoadingButton = ({ title, loadingTitle, width, position }) => {
  const { pending } = useFormStatus();

  return (
    <div className={`flex ${position ? position : "justify-end"}`}>
      <button
        type="submit"
        className={`btn rounded-full bg-main hover:bg-transparent hover:border-2 hover:border-main ${
          width && width
        }`}
        disabled={pending}
      >
        {pending ? (
          <span className="flex items-center">
            {loadingTitle}
            <span className="loading loading-spinner text-neutral ml-2"></span>
          </span>
        ) : (
          `${title}`
        )}
      </button>
    </div>
  );
};

export default LoadingButton;
