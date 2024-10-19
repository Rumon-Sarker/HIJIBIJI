"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "./../../../public/final 1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer, Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { TiThMenuOutline } from "react-icons/ti";

const NavBar = ({ session }) => {
  const pathName = usePathname();
  const isActive = (path) => pathName === path;
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  return (
    <div className="">
      <div>
        <nav className="flex justify-between items-center h-16 mb-5 bg-slate-50 shadow-xl">
          <div className="lg:md:ml-5 md:ml-3 ml-2">
            <Link href={"/"}>
              {" "}
              <Image alt="" width={120} height={38} src={logo} />
            </Link>
          </div>

          <ul className="hidden  lg:flex space-x-6 justify-between">
            <li
              className={`
        ${
          isActive("/")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
            >
              <Link href={"/"}>Homepage</Link>
            </li>
            <li
              className={`
        ${
          isActive("/about")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
            >
              <Link href={"/about"}>AboutUs</Link>
            </li>
            <li
              className={` 
        ${
          isActive("/portfolio")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
            >
              <Link href={"/portfolio"}>Portfolio</Link>
            </li>
            <li
              className={`
        ${
          isActive("/services")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
            >
              <Link href={"/services"}>Services</Link>
            </li>
            <li
              className={`
        ${
          isActive("/career")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
            >
              <Link href={"/career"}>Career</Link>
            </li>
            {session ? (
              <li
                className={`
        ${
          isActive("/admin")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
              >
                <Link href={"/admin"}>Admin</Link>
              </li>
            ) : (
              <li
                className={`
        ${
          isActive("/admin")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
              >
                <Link href={"/api/auth/adminWrapper"}>Admin</Link>
              </li>
            )}
          </ul>

          <div className="md:hidden">
            <div className="flex text-main min-h-[50vh] items-center justify-end">
              <Button onClick={() => setIsOpen(true)}>
                <TiThMenuOutline className="text-main" size={30} />
              </Button>
            </div>
            <Drawer open={isOpen} onClose={handleClose}>
              <Drawer.Header title="MENU" titleIcon={() => <></>} />
              <Drawer.Items>
                <Sidebar
                  aria-label="Sidebar with multi-level dropdown example"
                  className="[&>div]:bg-transparent [&>div]:p-0"
                >
                  <div className="flex h-full w-24 flex-col ms-10 py-2">
                    <div>
                      <Sidebar.Items>
                        <ul className="space-y-5">
                          <li
                            className={`
        ${
          isActive("/")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
                          >
                            <Link href={"/"}>Homepage</Link>
                          </li>
                          <li
                            className={`
        ${
          isActive("/about")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
                          >
                            <Link href={"/about"}>AboutUs</Link>
                          </li>
                          <li
                            className={` 
        ${
          isActive("/portfolio")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
                          >
                            <Link href={"/portfolio"}>Portfolio</Link>
                          </li>
                          <li
                            className={`
        ${
          isActive("/services")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
                          >
                            <Link href={"/services"}>Services</Link>
                          </li>
                          <li
                            className={`
        ${
          isActive("/career")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
                          >
                            <Link href={"/career"}>Career</Link>
                          </li>
                          {session ? (
                            <li
                              className={`
        ${
          isActive("/admin")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
                            >
                              <Link href={"/admin"}>Admin</Link>
                            </li>
                          ) : (
                            <li
                              className={`
        ${
          isActive("/admin")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
                            >
                              <Link href={"/api/auth/adminWrapper"}>Admin</Link>
                            </li>
                          )}
                        </ul>
                        <div className="space-y-5 flex my-5 flex-col">
                          <Link href={"/domain"}>
                            <button className="btn bg-main rounded-full text-white hover:bg-transparent hover:text-black hover:border-main border-2">
                              Domain
                            </button>
                          </Link>
                          <Link href={"/contact"}>
                            <button className="btn bg-main rounded-full text-white hover:bg-transparent hover:text-black hover:border-main border-2">
                              Contact
                            </button>
                          </Link>
                          <Link href={"/blogs"}>
                            {" "}
                            <button className="btn bg-main rounded-full text-white hover:bg-transparent hover:text-black hover:border-main border-2">
                              Blogs
                            </button>
                          </Link>
                        </div>
                      </Sidebar.Items>
                    </div>
                  </div>
                </Sidebar>
              </Drawer.Items>
            </Drawer>
          </div>

          <div className="lg:space-x-2 lg:mr-5 md:space-x-1 hidden lg:flex">
          <Link href={"/domain"}>
              <button className="btn bg-main rounded-full text-white hover:bg-transparent hover:text-black hover:border-main border-2">
                Domain
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="btn bg-main rounded-full text-white hover:bg-transparent hover:text-black hover:border-main border-2">
                Contact
              </button>
            </Link>
            <Link href={"/blogs"}>
              <button className="btn bg-main rounded-full text-white hover:bg-transparent hover:text-black hover:border-main border-2">
                Blogs
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
