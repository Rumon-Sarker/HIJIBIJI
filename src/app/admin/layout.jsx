'use server'
import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
const AdminLayout = ({ children }) => {
  const session = getServerSession(authOptions);
  return (
    <div className="-mt-5">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="flex justify-center items-center">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-main text-white drawer-button hover:bg-transparent hover:border-2 hover:border-main hover:text-black lg:hidden my-5"
            >
              Open menu bar
              <IoMdMenu size={20} />
            </label>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-main text-base-content min-h-full w-72 p-4 text-lg">
            {/* Sidebar content here */}

            {/* Dashboard */}
            <li>
              <Link href={"/admin"}>Dashboard</Link>
            </li>

            {/* Admin Management */}
            <li>
              <Link href={"/admin/adminControl"}>Admin Controller</Link>
            </li>
            <li>
              <Link href={"/admin/register"}>Register Admin</Link>
            </li>

            {/* Content Management */}
            <li>
              <Link href={"/admin/postAboutUs"}>Post About Us</Link>
            </li>
            <li>
              <Link href={"/admin/postPortfolio"}>Post Portfolio</Link>
            </li>
            <li>
              <Link href={"/admin/postService"}>Post Service</Link>
            </li>
            <li>
              <Link href={"/admin/postHomeBg"}>Post Homepage Background</Link>
            </li>
            <li>
              <Link href={"/admin/postHomeExp"}>Post Homepage Experience</Link>
            </li>
            <li>
              <Link href={"/admin/postPartner"}>Post Partners</Link>
            </li>
            <li>
              <Link href={"/admin/deletePartner"}>Delete Partners</Link>
            </li>
            <li>
              <Link href={"/admin/postVideo"}>Post Video</Link>
            </li>
            <li>
              <Link href={"/admin/postCaseStudy"}>Post Case Study</Link>
            </li>
            <li>
              <Link href={"/admin/postBlog"}>Post Blog</Link>
            </li>
            <li>
              <Link href={"/admin/postFooterDetails"}>Post Footer Details</Link>
            </li>

            {/* Job Management */}
            <li>
              <Link href={"/admin/postJob"}>Post Career Data</Link>
            </li>
            <li>
              <Link href={"/admin/jobRequest"}>Incoming Job Requests</Link>
            </li>

            {/* Contact Management */}
            <li>
              <Link href={"/admin/contactMessage"}>Contact Messages</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
