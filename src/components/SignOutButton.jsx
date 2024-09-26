"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return (
    <div>
      <button onClick={() => signOut()} className="btn bg-main hover:border-2 hover:border-main hover:text-black text-white">
        Logout
      </button>
    </div>
  );
};

export default SignOutButton;
