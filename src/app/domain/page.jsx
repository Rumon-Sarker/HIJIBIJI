import React from "react";

const Domain = () => {
  return (
    <div>
      <div className="h-[200px] bg-main mx-5 lg:mx-10 flex justify-center items-center rounded-lg my-10">
        <h1 className="text-white text-center text-[50px] lg:text-[80px]">
          Domain Search
        </h1>
      </div>
      <div>
        <form className="">
          {" "}
          <div className="flex justify-center items-center gap-2">
          <label className="form-control w-full max-w-xs">
            <div className="label"></div>
            <input
              name="input"
              type="text"
              placeholder="Search here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <button className="btn bg-main rounded-md text-white hover:bg-transparent hover:text-black hover:border-main border-2">
            Search
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Domain;
