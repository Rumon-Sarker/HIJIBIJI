
"use client";

import Link from "next/link";


const AdminHome = () => {
   
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-100 text-base-content min-h-full w-72 p-4">
            {/* Sidebar content here */}
          <li> <Link href={'/admin/postPortfolio'}>Post Portfolio Data</Link></li>
          <li> <Link href={'/admin/postBlog'}>Post Portfolio Data</Link></li>
          <li> <Link href={'/admin/postService'}>Post Portfolio Data</Link></li>
          <li> <Link href={'/admin/postJob'}>Post Portfolio Data</Link></li>
           
          </ul>
        </div>
      </div>
    );
};

export default AdminHome;