"use client";
import React, { Suspense, useEffect, useState } from "react";
import { getJobData } from "../../controls/fetchData/fetchData";
import { getJobAllData } from "../../controls/fetchData/fetchData";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Loading from "../loading";
import Loader from "../loader";
const Career = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await getJobAllData();
      setJobs(res.data);
    };

    fetchJobs();
  }, []);

  const handlePost = async (formData) => {
    const res = await getJobData(formData);
    setJobs(res.data);
  };

  return (
    <Loader>
      <Suspense fallback={<Loading />}>
        <div>
          <div className="h-[200px] bg-main lg:mx-10 mx-5 flex justify-center items-center rounded-lg my-10">
            <h1 className="text-white text-center text-[50px] lg:text-[80px]">
              Career
            </h1>
          </div>
          <div className="bg-base-100 p-5 shadow-xl  mx-5 md:mx-10 lg:mx-20">
            <form
              action={handlePost}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 content-center"
            >
              <div className="flex items-center gap-5 border-r-2 border-gray-400  bg-base-200">
                <h1 className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_17_5686)">
                      <path
                        d="M13.6087 4.20833C15.4138 4.20669 17.1789 4.74046 18.6806 5.74212C20.1823 6.74379 21.3531 8.16834 22.0451 9.83557C22.737 11.5028 22.9189 13.3378 22.5677 15.1084C22.2166 16.879 21.3482 18.5057 20.0724 19.7827C18.7965 21.0597 17.1706 21.9296 15.4003 22.2824C13.63 22.6352 11.7949 22.4549 10.127 21.7645C8.45914 21.0741 7.03352 19.9046 6.03048 18.4038C5.02745 16.903 4.49206 15.1384 4.49206 13.3333C4.50301 10.918 5.46676 8.60468 7.17386 6.89601C8.88097 5.18735 11.1935 4.22148 13.6087 4.20833ZM13.6087 2.5C11.4661 2.5 9.37158 3.13536 7.59005 4.32575C5.80852 5.51613 4.41998 7.20806 3.60003 9.1876C2.78008 11.1671 2.56555 13.3454 2.98355 15.4468C3.40156 17.5483 4.43334 19.4786 5.94841 20.9937C7.46347 22.5087 9.39379 23.5405 11.4953 23.9585C13.5967 24.3765 15.7749 24.162 17.7545 23.342C19.734 22.5221 21.4259 21.1335 22.6163 19.352C23.8067 17.5705 24.4421 15.476 24.4421 13.3333C24.4421 10.4602 23.3007 7.70465 21.2691 5.67301C19.2374 3.64137 16.4819 2.5 13.6087 2.5Z"
                        fill="#209AD6"
                      />
                      <path
                        d="M29.1668 27.7417L23.0251 21.5583L21.8418 22.7333L27.9835 28.9167C28.0606 28.9944 28.1523 29.0561 28.2533 29.0984C28.3543 29.1406 28.4627 29.1626 28.5722 29.163C28.6817 29.1634 28.7902 29.1422 28.8915 29.1006C28.9928 29.0591 29.0849 28.998 29.1626 28.9209C29.2403 28.8437 29.3021 28.752 29.3443 28.651C29.3866 28.55 29.4085 28.4416 29.4089 28.3321C29.4093 28.2226 29.3881 28.1141 29.3466 28.0128C29.305 27.9115 29.2439 27.8194 29.1668 27.7417Z"
                        fill="#209AD6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_5686">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </h1>
                <input
                  name="title"
                  type="text"
                  placeholder="Job Title"
                  className="input w-full max-w-xs bg-base-200"
                />
              </div>
              <div className="flex items-center gap-5 border-r-2 border-gray-400 bg-base-200">
                <h1 className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="22"
                    viewBox="0 0 28 22"
                    fill="none"
                  >
                    <path
                      d="M17.75 4.5C17.75 4.5 17.75 0.75 14 0.75C10.25 0.75 10.25 4.5 10.25 4.5M6.5 21.375V4.5M21.5 21.375V4.5M27.125 4.5H0.875V21.375H27.125V4.5Z"
                      stroke="#209AD6"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </h1>
                <input
                  name="type"
                  type="text"
                  placeholder="Job Type"
                  className="input w-full max-w-xs bg-base-200"
                />
              </div>
              <div className="flex items-center gap-5 bg-base-200">
                <h1 className="ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M15 2.5C9.5 2.5 5 7 5 12.5C5 19.25 13.75 26.875 14.125 27.25C14.375 27.375 14.75 27.5 15 27.5C15.25 27.5 15.625 27.375 15.875 27.25C16.25 26.875 25 19.25 25 12.5C25 7 20.5 2.5 15 2.5ZM15 24.625C12.375 22.125 7.5 16.75 7.5 12.5C7.5 8.375 10.875 5 15 5C19.125 5 22.5 8.375 22.5 12.5C22.5 16.625 17.625 22.125 15 24.625ZM15 7.5C12.25 7.5 10 9.75 10 12.5C10 15.25 12.25 17.5 15 17.5C17.75 17.5 20 15.25 20 12.5C20 9.75 17.75 7.5 15 7.5ZM15 15C13.625 15 12.5 13.875 12.5 12.5C12.5 11.125 13.625 10 15 10C16.375 10 17.5 11.125 17.5 12.5C17.5 13.875 16.375 15 15 15Z"
                      fill="#209AD6"
                    />
                  </svg>
                </h1>
                <input
                  name="location"
                  type="text"
                  placeholder="Location"
                  className="input bg-base-200 w-full max-w-xs"
                />
                <div className="flex items-center bg-base-200">
                  <button
                    type="submit"
                    className="bg-main btn text-white hover:text-black hover:bg-transparent hover:border-2 hover:border-main"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>

          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-base-100 p-5 rounded-md mx-5 md:mx-10 lg:mx-20 my-10 shadow-xl"
            >
              <div className="flex justify-between flex-wrap">
                <div className="flex gap-5 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="59"
                    height="50"
                    viewBox="0 0 59 50"
                    fill="none"
                  >
                    <path
                      d="M36.9842 12.9353C36.9842 12.9353 36.9842 6.88696 29.7637 6.88696C22.5433 6.88696 22.5433 12.9353 22.5433 12.9353M15.3228 40.1531V12.9353M44.2046 40.1531V12.9353M55.0352 12.9353H4.49219V40.1531H55.0352V12.9353Z"
                      stroke="#7A7A7A"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="text-text space-y-6">
                    <h1 className="text-2xl">{job.jobTitle}</h1>
                    <Link href={`/careerDetails/${job.id}`}>
                      <h1 className="flex gap-2 items-center">
                        Job Description <IoIosArrowForward size={17} />
                      </h1>
                    </Link>
                  </div>
                </div>
                <div className="mt-10 sm:mt-0">
                  <div className="flex gap-5 items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="58"
                      height="61"
                      viewBox="0 0 58 61"
                      fill="none"
                    >
                      <path
                        d="M28.9161 4.58862C14.9603 4.58862 3.64453 16.3425 3.64453 30.8386C3.64453 45.3347 14.9603 57.0886 28.9161 57.0886C42.8718 57.0886 54.1876 45.3347 54.1876 30.8386C54.1876 16.3425 42.8718 4.58862 28.9161 4.58862ZM28.9161 52.6355C17.3295 52.6355 7.93167 42.8738 7.93167 30.8386C7.93167 18.8035 17.3295 9.04175 28.9161 9.04175C40.5026 9.04175 49.9005 18.8035 49.9005 30.8386C49.9005 42.8738 40.5026 52.6355 28.9161 52.6355ZM31.6068 29.4792L30.174 29.1335V21.2644C32.3176 21.5691 33.6432 22.9636 33.8688 24.6746C33.897 24.9089 34.0888 25.0789 34.3145 25.0789H36.8473C37.1124 25.0789 37.3211 24.8386 37.2985 24.5632C36.9544 20.9128 34.0606 18.5691 30.1966 18.1648V16.2488C30.1966 15.991 29.9935 15.78 29.7453 15.78H28.1602C27.912 15.78 27.7089 15.991 27.7089 16.2488V18.1824C23.7151 18.5867 20.59 20.8777 20.59 25.155C20.59 29.116 23.3992 31.0261 26.3494 31.7585L27.7427 32.1277V40.489C25.2494 40.1433 23.8505 38.7605 23.5628 36.8972C23.5289 36.6746 23.3371 36.5105 23.1171 36.5105H20.511C20.2459 36.5105 20.0372 36.7449 20.0597 37.0203C20.3136 40.2429 22.6659 43.2078 27.6863 43.5886V45.4285C27.6863 45.6863 27.8894 45.8972 28.1376 45.8972H29.7396C29.9878 45.8972 30.1909 45.6863 30.1909 45.4226L30.1796 43.5652C34.5965 43.1609 37.7555 40.7058 37.7555 36.2996C37.7498 32.2332 35.2621 30.4167 31.6068 29.4792ZM27.7371 28.53C27.4212 28.4363 27.1561 28.3484 26.891 28.2371C24.9843 27.5222 24.0987 26.3679 24.0987 24.8796C24.0987 22.7527 25.6499 21.5398 27.7371 21.2644V28.53ZM30.174 40.5066V32.6726C30.3489 32.7253 30.5068 32.7664 30.6704 32.8015C33.3386 33.6453 34.2355 34.8171 34.2355 36.616C34.2355 38.907 32.577 40.2839 30.174 40.5066Z"
                        fill="#1C89ED"
                      />
                    </svg>
                    <div className="text-text space-y-6">
                      <h1 className="text-2xl">
                        ${job.slary} / <span className="text-sm">year</span>
                      </h1>
                      <h1>Vacancy: {job.vacancy}</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between flex-wrap items-center mt-32 space-y-5">
                <ul className="text-text flex space-x-5 md:ms-20">
                  <li>{job.category}</li>
                  <li>{job.departmentName}</li>
                  <li>{job.location}</li>
                  <li>{job.deadline}</li>
                </ul>
                <div>
                  <Link href={`/careerDetails/${job.id}`}>
                    {" "}
                    <button className="btn bg-main hover:border-2 hover:border-main text-white hover:text-black hover:bg-transparent">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </Loader>
  );
};

export default Career;
