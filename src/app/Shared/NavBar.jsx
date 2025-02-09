"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "./../../../public/final 1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer, Sidebar } from "flowbite-react";
import { TiThMenuOutline } from "react-icons/ti";

const NavBar = ({ session }) => {
  const pathName = usePathname();
  const isActive = (path) => pathName === path;
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const changeLanguage = (langCode) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    } else {
      console.error("Google Translate widget not loaded yet.");
    }
  };

  // const languages = {
  //   bn: "Bangla",
  //   en: "English",
  //   es: "Spanish",
  //   de: "German",
  //   it: "Italian",
  //   fr: "French",
  //   pt: "Portuguese",
  // };

  // const handleLanguageChange = async (e) => {
  //   const selectedLang = e.target.value;
  //   await translatePageContent(selectedLang);
  // };

  return (
    <div className="">
      <div>
        <nav className="flex justify-between items-center h-16 bg-slate-50 shadow-xl">
          <div className="lg:md:ml-5 md:ml-3 ml-2">
            <Link href={"/"}>
              {" "}
              <Image alt="" width={120} height={38} src={logo} />
            </Link>
          </div>

          <ul className="hidden lg:pl-32 lg:flex space-x-6 justify-between">
            <li
              className={`
        ${
          isActive("/")
            ? "text-main font-bold border-b-2 border-main"
            : "text-text border-b-2 border-text hover:border-main hover:border-b-2 hover:text-main"
        }`}
            >
              <Link href={"/"}>Home</Link>
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
                            <Link href={"/"}>Home</Link>
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
                        </ul>
                        <div className="space-y-5 flex my-5 flex-col">
                          <Link href={"/eLearning"}>
                            <button className="btn bg-main rounded-full text-white hover:bg-transparent hover:text-black hover:border-main border-2">
                              E-learning
                            </button>
                          </Link>
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

          {/* Language Selector Dropdown */}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="p-2 border rounded text-center"
          >
            <option value="">🌍 Select Language</option>
            <option value="en">English </option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="fr">French</option>
            <option value="pt">Portuguese</option>
          </select>

          <div className="lg:space-x-2 lg:mr-5 md:space-x-1 hidden lg:flex">
            <Link href={"/eLearning"}>
              <button className="btn bg-main rounded-full text-white hover:bg-transparent hover:text-black hover:border-main border-2">
                E-learning
              </button>
            </Link>
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
