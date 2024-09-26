"use server";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../api/auth/[...nextauth]/route";

import SignOutButton from "./../../../components/SignOutButton";
const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session?.user && (
        <div className="flex justify-between my-5 lg:mx-10 mx-5">
          <h1 className="text-teal-500 text-center text-2xl">
            Hi , {session?.user?.name} Welcome
          </h1>
          <SignOutButton />
        </div>
      )}
      <h1 className="text-main text-3xl text-center my-5 uppercase">
        Admin Control Section{" "}
      </h1>
    </div>
  );
};

export default Dashboard;
