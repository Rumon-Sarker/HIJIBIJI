import Link from "next/link";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="-mt-5">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="flex justify-center items-center">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-main drawer-button lg:hidden my-5"
            >
              Open menu bar
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
          <ul className="menu bg-blue-300 shadow-xl text-base-content min-h-full w-72 p-4 text-lg">
            {/* Sidebar content here */}

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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
