"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const LoadingButton = ({title,loadingTitle}) => {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-end">
      <button
        type="submit"
        className="btn bg-main hover:bg-transparent hover:border-2 hover:border-main"
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
