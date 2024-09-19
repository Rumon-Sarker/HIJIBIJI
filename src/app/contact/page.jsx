import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      <div>
        <div className="h-[200px] bg-main mx-10 flex justify-center shadow-xl items-center rounded-lg my-10">
          <h1 className="text-white text-center text-[50px] lg:text-[80px]">
            Contact
          </h1>
        </div>

        <div className="bg-base-100 shadow-xl p-5 my-10 px-2 mx-10">
          <h1 className="text-text ps-10 text-[30px]">Contact Information</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 my-10">
          <div className="h-48 space-y-3 flex flex-col p-5 ps-16 shadow-xl bg-base-100 justify-center text-text rounded-md">
            <h1 className="font-bold underline">Our Location</h1>
            <h1 className="flex gap-1 items-center">
              <FaLocationDot size={15} /> New York, USA
            </h1>
            <h1 className="flex gap-1 items-center">
              {" "}
              <FaLocationDot size={15} />
              Singapore, Singapore
            </h1>
            <h1 className="flex gap-1 items-center">
              {" "}
              <FaLocationDot size={15} />
              Dhaka, Bangladesh
            </h1>
          </div>
          <div className="h-48 space-y-3 flex flex-col p-5 ps-16 shadow-xl bg-base-100 justify-center text-text rounded-md">
            <h1 className="font-bold underline">Phone</h1>
            <h1 className="flex gap-1 items-center">
              <FaPhoneAlt size={15} />
              +1(929)2635582
            </h1>
            <h1 className="flex gap-1 items-center">
              <FaPhoneAlt size={15} />
              +880 1704164940
            </h1>
            <h1 className="flex gap-1 items-center">
              <FaPhoneAlt size={15} />
              +880 2223360530
            </h1>
          </div>
          <div className="h-48 space-y-3 flex flex-col p-5 ps-16 shadow-xl bg-base-100 justify-center text-text rounded-md">
            <h1 className="font-bold underline">Email</h1>
            <h1 className="flex gap-1 items-center">
              <MdEmail size={15} />
              info@hijibusy.com
            </h1>
          </div>
        </div>

        <div className="bg-base-100 shadow-xl p-5 my-10 px-2 mx-10">
          <h1 className="text-text ps-10 text-[30px]">Contact Us Form</h1>
        </div>

        <div className="mx-10 my-10 bg-base-100 shadow-xl flex justify-center items-center p-4 mb-20 md:p-16">
          <form className="space-y-5 w-full">
            <div className="grid grid-cols-2 gap-5 content-center w-full">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">First Name*</span>
                </div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Last Name*</span>
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="grid grid-cols-2 gap-5 w-full">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Contact Number*</span>
                </div>
                <input
                  type="number"
                  placeholder="Contact Number"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email Address*</span>
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea
                className="textarea textarea-md textarea-bordered h-24"
                placeholder="Enter Your Message"
              ></textarea>
            </label>
            <div className="flex justify-end">
              <button className="btn bg-main hover:bg-transparent hover:border-2 hover:border-main">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
