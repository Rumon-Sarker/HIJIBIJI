"use client";
import React, { useState } from "react";
import { createJob } from "../../../controls/postJob/postJob";
import toast, {Toaster} from "react-hot-toast";
const PostJob = () => {
  const [inputFields, setInputFields] = useState([{ value: "" }]);

  // Handle adding a new input field
  const addLine = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  // Handle input field change
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  // Handle form submission (optional)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", inputFields);
  };
  const handlePost = async (formData) => {
    formData.append("jobResponsibility", JSON.stringify(inputFields));
    console.log(formData);
    const res = await createJob(formData);
    if (res.status) {
      toast.success("Job has been created successfully!");
    }
    if (res.error) {
      toast.error("Job has not been created!");
    }
  };
  return (
    <div>
      <Toaster/>
      <div className="lg:mx-10 my-10">
        <h1 className="text-main text-3xl text-center my-2 uppercase">
          post blog data
        </h1>
        <form
          action={handlePost}
          className="space-y-5 w-full bg-base-100 shadow-xl p-8"
        >
          <div className="md:flex justify-between flex-row gap-20 w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Title of Job</span>
              </div>
              <input
                name="jobTitle"
                type="text"
                placeholder="type title of the job"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Select job Category</span>
              </div>
              <select name="category" className="select select-bordered">
                <option disabled defaultChecked>
                  Pick one
                </option>
                <option>half time</option>
                <option>full time</option>
              </select>
            </label>
          </div>
          <div className="md:flex justify-between flex-row gap-20 w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Department name</span>
              </div>
              <input
                type="text"
                name="departmentName"
                placeholder="type department name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Location</span>
              </div>
              <input
                name="location"
                type="text"
                placeholder="type location"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="md:flex justify-between flex-row gap-20 w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Deadline</span>
              </div>
              <input
                name="date"
                type="date"
                placeholder="type deadline"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Vacancy</span>
              </div>
              <input
                name="vacancy"
                type="number"
                placeholder="type number of vacancies"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div>
            <span className="label-text font-bold uppercase text-main">
              Job Requirements and responsibilities
            </span>
            <div>
              {inputFields.map((input, index) => (
                <div key={index}>
                  <input
                    className="input input-bordered mt-5"
                    type="text"
                    value={input.value}
                    onChange={(event) => handleInputChange(index, event)}
                    placeholder={`Line ${index + 1}`}
                  />
                </div>
              ))}
              <button
                className="btn btn-sm my-5 bg-main hover:bg-transparent hover:border-2 hover:border-main"
                type="button"
                onClick={addLine}
              >
                Add Line
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn bg-main hover:bg-transparent hover:border-2 hover:border-main"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
