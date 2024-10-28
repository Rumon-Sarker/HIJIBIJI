"use client";
import { FileInput, Label } from "flowbite-react";
import React, { useRef } from "react";
import { createApplication } from "../controls/PostApplication/postApplication";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import LoadingButton from "./LoadingButton";
const ApplicationForm = ({ jobId }) => {
  let formRef = useRef(null);
  let router = useRouter();
  const handlePost = async (formData) => {
    const res = await createApplication(formData);
    if (res.status) {
      toast.success("Your application has been posted successfully!");
      formRef.current.reset();
      router.push("/career");
    }
    if (res.error) {
      toast.error("Your application has not been posted!");
    }
  };
  return (
    <div>
      <Toaster />
      <div className="my-10">
        <h1 className="text-3xl text-text bg-base-100 shadow-xl p-10 my-5">
          Application Form
        </h1>
        <div>
          <form
            action={handlePost}
            ref={formRef}
            className="p-10 lg:p-20 space-y-3 bg-base-100 shadow-xl rounded-md"
          >
            <div className="md:flex justify-between flex-row gap-20 w-full">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Job title (position)*</span>
                </div>
                <input
                  name="jobTitle"
                  required
                  type="text"
                  placeholder="Job title"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <input
                className="input hidden"
                name="jobId"
                value={jobId}
                type="text"
              />
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">First Name*</span>
                </div>
                <input
                  name="firstname"
                  required
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
                  name="lastname"
                  required
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="md:flex justify-between flex-row gap-20 w-full">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Gender*</span>
                </div>
                <select
                  required
                  name="gender"
                  className="select select-bordered"
                >
                  <option disabled defaultChecked>
                    Please select
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Date*</span>
                </div>
                <input
                  required
                  name="date"
                  type="date"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="md:flex justify-between flex-row gap-20 w-full">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Contact Number*</span>
                </div>
                <input
                  required
                  name="contact"
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
                  name="email"
                  required
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Present Address*</span>
              </div>
              <input
                name="address"
                required
                type="address"
                className="input input-md input-bordered"
                placeholder="House, Road, City, Country"
              ></input>
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Cover Letter</span>
              </div>
              <textarea
                required
                name="coverletter"
                className="textarea textarea-md textarea-bordered h-24"
                placeholder="Write a cover letter for the hiring manager"
              ></textarea>
            </label>
            <span className="mt-10">Attach CV* (must be PDF)</span>
            <div className="flex w-full items-center justify-center">
              <Label
                htmlFor="dropzone-file"
                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_17_8946)">
                      <path
                        d="M27.5 22.5V37.5C27.5007 38.1372 27.7447 38.7501 28.1821 39.2134C28.6195 39.6768 29.2174 39.9556 29.8535 39.9929C30.4896 40.0303 31.1159 39.8233 31.6046 39.4144C32.0932 39.0054 32.4072 38.4253 32.4825 37.7925L32.5 37.5V22.5H47.5C48.7614 22.4996 49.9764 22.976 50.9014 23.8338C51.8263 24.6915 52.3929 25.8671 52.4875 27.125L52.5 27.5V50C52.5004 51.2615 52.024 52.4764 51.1663 53.4014C50.3085 54.3263 49.1329 54.8929 47.875 54.9875L47.5 55H12.5C11.2386 55.0004 10.0236 54.524 9.09863 53.6663C8.17368 52.8085 7.60711 51.6329 7.5125 50.375L7.5 50V27.5C7.4996 26.2386 7.97602 25.0236 8.83374 24.0986C9.69147 23.1737 10.8671 22.6071 12.125 22.5125L12.5 22.5H27.5ZM32.21 6.17251L40.6075 14.5675C41.0766 15.0366 41.3401 15.6729 41.3401 16.3363C41.3401 16.9997 41.0766 17.6359 40.6075 18.105C40.1384 18.5741 39.5022 18.8377 38.8387 18.8377C38.1753 18.8377 37.5391 18.5741 37.07 18.105L32.5 13.5325V22.5H27.5V13.5325L22.93 18.105C22.6977 18.3373 22.422 18.5215 22.1185 18.6472C21.815 18.773 21.4897 18.8377 21.1613 18.8377C20.8328 18.8377 20.5075 18.773 20.204 18.6472C19.9005 18.5215 19.6248 18.3373 19.3925 18.105C19.1602 17.8727 18.976 17.597 18.8503 17.2935C18.7246 16.99 18.6599 16.6647 18.6599 16.3363C18.6599 16.0078 18.7246 15.6825 18.8503 15.379C18.976 15.0755 19.1602 14.7998 19.3925 14.5675L27.7925 6.17251C28.3785 5.58705 29.1729 5.25818 30.0012 5.25818C30.8296 5.25818 31.624 5.58705 32.21 6.17251Z"
                        fill="url(#paint0_linear_17_8946)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_17_8946"
                        x1="30"
                        y1="5.25818"
                        x2="30"
                        y2="55"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1C89ED" />
                        <stop offset="1" stopColor="#F5F5F5" />
                      </linearGradient>
                      <clipPath id="clip0_17_8946">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className=" text-gray-500 dark:text-gray-400">Upload CV</p>
                </div>
                <FileInput
                  required
                  name="image"
                  id="dropzone-file"
                  className="hidden"
                />
              </Label>
            </div>
            <div className="flex justify-end">
              <LoadingButton title={"Submit"} loadingTitle={"Submitting"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
