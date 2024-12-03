"use client";
import Image from "next/image";
import React, { useRef } from "react";
import logo from "./../../../public/final 2.png";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { createFooterContact } from "../../controls/postFooterContact/createFooterContact.js";
import toast, { Toaster } from "react-hot-toast";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import LoadingButton from "@/components/LoadingButton";
const Footer = ({ session }) => {
  let formRef = useRef(null);
  const handlePost = async (formData) => {
    const res = await createFooterContact(formData);
    if (res.status) {
      toast.success("Contact info has been submitted successfully!");
      formRef.current.reset();
    }
    if (res.error) {
      toast.error("Contact info has not been submitted!");
    }
  };
  return (
    <div className=" bg-footer text-footerText mt-5">
      <Toaster />
      <div>
        <footer className="footer lg:grid-col-3 gap-10 p-10">
          <div>
            <div>
              <div>
                <Image alt="" src={logo} />
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="text-lg my-10">
                From global enterprises to digital disruptors, we’ve partnered
                with <br /> companies for over 20 years to reimagine, reshape
                and redefine the way <br /> people experience your business.
              </h1>
              <p className="flex gap-1">
                {" "}
                <IoLocationOutline size={18} />
                Head Office: 285 Patharghata Chittagong <br /> Bangladesh
              </p>
              <p className="flex gap-1">
                {" "}
                <IoLocationOutline size={18} />
                Dhaka Office: 12/1 Segunbagicha, Dhaka,
                <br /> Bangladesh
              </p>
              <div className="flex gap-5">
                <h1>
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=61556793262091&mibextid=ZbWKwL"
                    }
                  >
                    <FaSquareFacebook size={35} />
                  </Link>
                </h1>
                <h1>
                  <Link
                    href={
                      "https://www.instagram.com/hijibusytech/profilecard/?igsh=MTZhOWttbTB4dnE5dQ=="
                    }
                  >
                    <FaInstagram size={35} />
                  </Link>
                </h1>
                <h1>
                  <Link href={"https://www.linkedin.com/company/hijibusy/"}>
                    <FaLinkedin size={35} />
                  </Link>
                </h1>
                <h1>
                  <Link href={"/"}>
                    <BsTwitterX size={35} />
                  </Link>
                </h1>
              </div>
            </div>
          </div>
          <div className="pr-16">
            <nav className="flex flex-col space-y-5">
              <h1 className="footer-title">Quick Links</h1>
              <Link href={"/"} className="link link-hover">
                Homepage
              </Link>
              <Link href={"/about"} className="link link-hover">
                About Us
              </Link>
              <Link href={"/portfolio"} className="link link-hover">
                Portfolio
              </Link>
              <Link href={"/services"} className="link link-hover">
                Services
              </Link>
              <Link href={"/contact"} className="link link-hover">
                Contact Us
              </Link>
              <Link href={"/blogs"} className="link link-hover">
                Blogs
              </Link>
            </nav>
          </div>
          <div>
            <form
              action={handlePost}
              ref={formRef}
              className="max-w-lg mx-auto space-y-16"
            >
              <h1 className="text-white text-xl">Contact Form</h1>
              <div className="grid md:grid-cols-2 md:gap-10">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="firstname"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="lastname"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 px-0  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-10">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="message"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Message
                  </label>
                </div>
                <LoadingButton
                  position={"justify-start"}
                  title={"Submit"}
                  loadingTitle={"Submitting"}
                  width={'w-44 h-16'}
                />
              </div>
            </form>
          </div>
        </footer>
        <div className="mt-3 mb-5 mx-10">
          <div className="border-b-2 border-main"></div>
        </div>
        <div className="py-10 mx-10 flex justify-between">
          <p className=""> ©Hijibusy 2002-2024. All rights reserved</p>
          <p>
            terms &{" "}
            {session ? (
              <Link href={"/admin"}>privacy</Link>
            ) : (
              <Link href={"/api/auth/login"}>privacy</Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
