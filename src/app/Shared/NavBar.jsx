"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "./../../../public/final 1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer, Sidebar } from "flowbite-react";
import { TiThMenuOutline } from "react-icons/ti";
import English from "@/../../public/flagIcon/English.png";
import Deutsch from "@/../../public/flagIcon/German.png";
import Spanish from "@/../../public/flagIcon/Spanish.png";
import Italian from "@/../../public/flagIcon/Italian.png";
import French from "@/../../public/flagIcon/French.png";
import Portuguese from "@/../../public/flagIcon/Portuguese.png";

const languageOptions = [
  { code: "en", name: "English", flag: English },
  { code: "de", name: "Deutsch", flag: Deutsch },
  { code: "es", name: "Español", flag: Spanish },
  { code: "it", name: "Italian", flag: Italian },
  { code: "fr", name: "French", flag: French },
  { code: "pt", name: "Portuguese", flag: Portuguese },
];

const NavBar = ({ session }) => {
  const pathName = usePathname();

  const isActive = (path) => pathName === path;
  const [isOpen, setIsOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languageOptions[0]);

  const handleClose = () => setIsOpen(false);

  const changeLanguage = (lang) => {
    setSelectedLang(languageOptions.find((l) => l.code === lang));
    setIsLangDropdownOpen(false); // Close the dropdown after selecting a language

    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    } else {
      console.error("Google Translate widget not loaded yet.");
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center h-16 bg-slate-50 shadow-xl px-4">
        {/* Mobile: Left - Sidebar */}
        <div className="md:hidden">
          <Button onClick={() => setIsOpen(true)}>
            <TiThMenuOutline className="text-main" size={30} />
          </Button>
          <Drawer open={isOpen} onClose={handleClose}>
            <Drawer.Header title="MENU" />
            <Drawer.Items>
              <Sidebar className="bg-transparent p-0">
                <ul className="space-y-5 p-4">
                  {["/", "/about", "/portfolio", "/services", "/career"].map(
                    (path, index) => (
                      <li
                        key={index}
                        className={`${
                          isActive(path)
                            ? "text-main font-bold border-b-2 border-main"
                            : "text-text border-b-2 border-text hover:border-main hover:text-main"
                        }`}
                      >
                        <Link href={path}>
                          {path.replace("/", "").toUpperCase() || "HOME"}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </Sidebar>
            </Drawer.Items>
          </Drawer>
        </div>

        {/* Mobile: Center - Language Selector */}
        <div className="md:hidden">
          {/* Language Selector */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center space-x-2 p-2 border rounded-lg shadow-sm hover:bg-gray-100 transition duration-300"
            >
              <Image
                src={selectedLang.flag}
                alt={selectedLang.name}
                width={20}
                height={15}
              />
              <span>{selectedLang.code.toUpperCase()}</span>
              <span>▼</span>
            </button>

            {/* Dropdown */}
            {isLangDropdownOpen && (
              <div className="absolute mt-2 w-36 bg-white rounded-md shadow-lg z-50">
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="flex items-center w-full px-4 py-2 hover:bg-gray-200"
                  >
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      width={20}
                      height={15}
                      className="mr-2"
                    />
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile: Right - Logo */}
        <div className="md:hidden">
          <Link href="/">
            <Image alt="Logo" width={100} height={32} src={logo} />
          </Link>
        </div>

        {/* Large Screens */}
        <div className="hidden md:flex justify-between w-full items-center">
          {/* Logo */}
          <div className="lg:ml-5 md:ml-3">
            <Link href="/">
              <Image alt="Logo" width={120} height={38} src={logo} />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex space-x-6">
            {["/", "/about", "/portfolio", "/services", "/career"].map(
              (path, index) => (
                <li
                  key={index}
                  className={`${
                    isActive(path)
                      ? "text-main font-bold border-b-2 border-main"
                      : "text-text border-b-2 border-text hover:border-main hover:text-main"
                  }`}
                >
                  <Link href={path}>
                    {path.replace("/", "").toUpperCase() || "HOME"}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Language Selector */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center space-x-2 p-2 border rounded-lg shadow-sm hover:bg-gray-100 transition duration-300"
            >
              <Image
                src={selectedLang.flag}
                alt={selectedLang.name}
                width={20}
                height={15}
              />
              <span>{selectedLang.code.toUpperCase()}</span>
              <span>▼</span>
            </button>

            {/* Dropdown */}
            {isLangDropdownOpen && (
              <div className="absolute mt-2 w-36 bg-white rounded-md shadow-lg z-50">
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="flex items-center w-full px-4 py-2 hover:bg-gray-200"
                  >
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      width={20}
                      height={15}
                      className="mr-2"
                    />
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="lg:space-x-2 lg:mr-5 hidden lg:flex">
            {["/eLearning", "/domain", "/contact", "/blogs"].map(
              (path, index) => (
                <Link key={index} href={path}>
                  <button className="btn bg-main rounded-full text-white hover:bg-transparent hover:text-black hover:border-main border-2">
                    {path.replace("/", "").replace("eLearning", "E-learning")}
                  </button>
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
