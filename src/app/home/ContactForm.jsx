"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import formBg from "./../../../public/formbg.png";
import Link from "next/link";
import { createHomeContact } from "../../controls/postHomeContact/createHomeContact";
import toast, { Toaster } from "react-hot-toast";
import { useFormStatus } from "react-dom";
import LoadingButton from "@/components/LoadingButton";
const ContactForm = ({ bg2 }) => {
  let formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { pending } = useFormStatus();
  const handlePost = async (formData) => {
    setLoading(true);
    const res = await createHomeContact(formData);
    if (res.status) {
      toast.success("Contact info has been submitted successfully!");
      formRef.current.reset();
      setLoading(false);
    }
    if (res.error) {
      toast.error("Contact info has not been posted!");
    }
  };
  return (
    <div className="mt-56 lg:-mb-3">
      <Toaster />
      <h1 className="text-main text-4xl my-10 ps-10">
        Let&apos;s talk about transforming your <br />
        business, with no strings attached
      </h1>
      <div>
        <div className="lg:flex flex-row relative">
          <div>
            <Image alt="" height={1000} width={1920} src={bg2?.image} />
          </div>
          <form
            action={handlePost}
            ref={formRef}
            className="max-w-lg mx-auto space-y-12 bg-base-100 shadow-xl p-10 rounded-lg lg:absolute lg:-top-32 lg:-right-80 lg:left-96 "
          >
            <div className="grid md:grid-cols-2 md:gap-10">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="firstname"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-main appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-main appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
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

            <div className="grid md:grid-cols-2 md:gap-10">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-main appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-10">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="country"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-main appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Country
                </label>
              </div>
            </div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Interested in*</span>
              </div>
              <select
                name="interested"
                className="select border-b-2 border-main"
              >
                <option disabled defaultChecked>
                  Please select
                </option>
                <option>Web-Development</option>
                <option>Mobile App Development</option>
              </select>
            </label>
            <h1 className="text-sm text-main">
              You can unsubscribe at any time from communications we may send
              you. See our{" "}
              <Link className="link" href={""}>
                Terms & Privacy
              </Link>{" "}
              notice for more information on how we process your personal data.
            </h1>
            <LoadingButton
              position={"justify-start"}
              title={"Submit"}
              loadingTitle={"Submitting"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
