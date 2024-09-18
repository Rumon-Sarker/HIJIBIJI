import Image from "next/image";
import React from "react";
import logo from "./../../../public/final 2.png";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=" bg-footer text-footerText">
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
                with <br /> companies for over 20 years to reimagine, reshape and
                redefine the way <br /> people experience your business.
              </h1>
              <p className="flex gap-1"> <IoLocationOutline size={18} />Head Office: 285 Patharghata Chittagong <br /> Bangladesh</p>
              <p className="flex gap-1"> <IoLocationOutline size={18} />Dhaka Office: 12/1 Segunbagicha, Dhaka,<br /> Bangladesh</p>
            </div>
          </div>
          <div className="pr-16">
            <nav className="flex flex-col space-y-5">
              <h6 className="footer-title">Quick Links</h6>
              <a className="link link-hover">Homepage</a>
              <a className="link link-hover">About Us</a>
              <a className="link link-hover">Portfolio</a>
              <a className="link link-hover">Services</a>
              <a className="link link-hover">Contact Us</a>
              <a className="link link-hover">Blogs</a>
             
            </nav>
          </div>
          <div>
            <form className="max-w-lg mx-auto space-y-16">
            <div className="grid md:grid-cols-2 md:gap-10">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
            
            
             
              <div className="grid md:grid-cols-2 md:gap-10">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Message
                  </label>
                </div>
                <button
                type="submit"
                className="text-white bg-main hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              </div>
              
            </form>
          </div>
        </footer>
        <div className="mt-3 mb-5 mx-10">
          <div className="border-b-2 border-main"></div>
        </div>
        <div className="py-10 mx-10 flex justify-between">
          <p className=""> ©Hijibusy 2002-2024. All rights reserved</p>
          <p>terms & privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
