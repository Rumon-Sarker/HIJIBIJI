"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});

  // Toggle entire sidebar (mobile view)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle expandable menu
  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const menuItems = [
    {
      label: "Dashboard",
      href: "/admin",
    },
    {
      label: "Admin Management",
      children: [
        { label: "Admin Controller", href: "/admin/adminControl" },
        { label: "Register Admin", href: "/admin/register" },
      ],
    },
    {
      label: "Home",
      children: [
        { label: "Post Homepage Background", href: "/admin/postHomeBg" },
        { label: "Post Homepage Experience", href: "/admin/postHomeExp" },
        { label: "Post Partners", href: "/admin/postPartner" },
        { label: "Delete Partners", href: "/admin/deletePartner" },
      ],
    },
    {
      label: "About Us",
      children: [
        { label: "Post About Us", href: "/admin/postAboutUs" },
        { label: "Post Video", href: "/admin/postVideo" },

      ],
    },
    {
      label: "Portfolio",
      children: [
        { label: "Post Portfolio", href: "/admin/postPortfolio" },
      ],
    },
    {
      label: "Service",
      children: [
        { label: "Post Service", href: "/admin/postService" },
      ],
    },
    {
      label: "Case Study",
      children: [
        { label: "Post Case Study", href: "/admin/postCaseStudy" },
      ],
    },
    {
      label: "Blog",
      children: [
        { label: "Post Blog", href: "/admin/postBlog" },
      ],
    },
    {
      label: "Footer",
      children: [
        { label: "Post Footer Details", href: "/admin/postFooterDetails" },
      ],
    },
    {
      label: "Career Management",
      children: [
        { label: "Post Career Data", href: "/admin/postJob" },
        { label: "Incoming Job Requests", href: "/admin/jobRequest" },
      ],
    },
    {
      label: "Contact Management",
      children: [
        { label: "Contact Messages", href: "/admin/contactMessage" },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed z-50 top-20 left-0 bg-main black  w-72 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 lg:static`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-white hover:text-gray-300"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.children ? (
                <>
                  {/* Parent Menu */}
                  <div
                    className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-blue-400"
                    onClick={() => toggleMenu(item.label)}
                  >
                    <span>{item.label}</span>
                    <span>
                      {expandedMenus[item.label] ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </span>
                  </div>
                  {/* Child Menu */}
                  {expandedMenus[item.label] && (
                    <ul className="ml-6 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 hover:bg-blue-400"
                            onClick={toggleSidebar}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-4 py-2 hover:bg-blue-400"
                  onClick={toggleSidebar}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 ml-0 ">
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-between items-center p-4 bg-gray-100">
          <button
            onClick={toggleSidebar}
            className="text-gray-800 hover:text-gray-600"
          >
            <IoMdMenu size={24} />
          </button>
        </div>
        <div className="p-6 bg-gray-100">
          <div className="overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
