"use client";
import React from "react";

const CareerSearchForm = () => {
  const handlePost = async (formData) => {
    
  };
  return (
    <div>
      <div className="bg-base-100 p-5 shadow-xl  mx-5 md:mx-10 lg:mx-20">
        <form
          action={handlePost}
          className="grid  grid-cols-2 md:grid-cols-3 content-center"
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
    </div>
  );
};

export default CareerSearchForm;
