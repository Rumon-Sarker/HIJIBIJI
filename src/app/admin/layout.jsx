import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";
const AdminLayout = ({ children }) => {
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
              Open menu bar<IoMdMenu size={20} />
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
          <ul className="menu bg-blue-300 text-base-content min-h-full w-72 p-4 text-lg">
            {/* Sidebar content here */}

            <li>
              {" "}
              <Link href={"/admin"}>Dashboard</Link>
            </li>
            <li>
              {" "}
              <Link href={"/admin/postPortfolio"}>Post Portfolio Data</Link>
            </li>
            <li>
              {" "}
              <Link href={"/admin/postBlog"}>Post Blog Data</Link>
            </li>
            <li>
              {" "}
              <Link href={"/admin/postService"}>Post Service Data</Link>
            </li>
            <li>
              {" "}
              <Link href={"/admin/postJob"}>Post Job Data</Link>
            </li>
            <li>
              {" "}
              <Link href={"/admin/postHomeBg"}>Post Homepage Bg Image</Link>
            </li>
            <li>
              {" "}
              <Link href={"/admin/postPartner"}>Post Partners</Link>
            </li>
            <li>
              {" "}
              <Link href={"/admin/postVideo"}>Post Video</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
