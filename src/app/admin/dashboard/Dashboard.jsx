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
          <div className="flex flex-col items-start justify-start">
          <h1 className="text-teal-500 text-center text-2xl">
            Hi , {session?.user?.name}<div className="badge badge-accent badge-outline badge-xs -translate-y-2">{session?.user?.role}</div> Welcome
          </h1>
          <h1 className="text-teal-500 text-center">
            Email: {session?.user?.email}
          </h1>
          </div>
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
