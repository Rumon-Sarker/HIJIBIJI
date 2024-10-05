"use client";

import {useRouter} from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const CheckAdmin = ({ session }) => {
 const router = useRouter();
  const handleSubmit = async (formData) => {
    const key = formData.key;
    if (key === process.env.ADMIN_KEY) {
      toast.success("Authentication successful!");
      if (!session) {
        router.push("/api/auth/login");
      } else {
        router.push("/admin");
      }
    } else {
      toast.error("You have entered an invalid admin key!");
    }
  };
  return (
    <div>
      <Toaster />
      <form className="bg-base-100 shadow-xl p-5 rounded-md" action={handleSubmit}>
        <h1 className="text-main text-3xl my-10">Admin Checkup Page</h1>
        <label className="form-control w-full max-w-xs">
          <span className="label-text">Admin key</span>
          <input
            className="input input-bordered my-3"
            type="password"
            placeholder="Type Your Admin Key"
            required
          />
        </label>
        <div className="flex justify-end my-5">
          <button  className="btn bg-main hover:border-2 hover:border-main hover:bg-transparent hover:text-black text-white">Authenticate</button>
        </div>
      </form>
    </div>
  );
};

export default CheckAdmin;
