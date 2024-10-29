"use client";
import React, { useRef, useState } from "react";
import { createJob } from "../../../controls/postJob/postJob";
import toast, { Toaster } from "react-hot-toast";
import LoadingButton from "@/components/LoadingButton";
import { deleteJob } from "@/controls/delete/delete";
const PostJob = ({ data }) => {
  let formRef = useRef(null);
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const [loadingId, setLoadingId] = useState(null);

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

  const handlePost = async (formData) => {
    formData.append("jobResponsibility", JSON.stringify(inputFields));
    console.log(formData);
    const res = await createJob(formData);
    if (res.status) {
      toast.success("Job has been created successfully!");
      formRef.current.reset();
    }
    if (res.error) {
      toast.error("Job has not been created!");
    }
  };
  const handleDelete = async (id) => {
    setLoadingId(id);
    const res = await deleteJob(id);
    if (res.status) {
      toast.success("You have successfully deleted this");
    } else if (res.error) {
      toast.error("An error occurred, couldn't delete");
    }
    setLoadingId(null);
  };

  return (
    <div>
      <Toaster />
      <div className="lg:mx-10 my-10">
        <h1 className="text-main text-3xl text-center my-2 uppercase">
          post blog data
        </h1>
        <form
          action={handlePost}
          ref={formRef}
          className="space-y-5 w-full bg-base-100 shadow-xl p-8"
        >
          <div className="md:flex justify-between flex-row gap-20 w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Title of Job</span>
              </div>
              <input
                required
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
              <select
                required
                name="category"
                className="select select-bordered"
              >
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
                required
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
                required
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
                required
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
                required
                name="vacancy"
                type="number"
                placeholder="type number of vacancies"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">salary</span>
              </div>
              <input
                required
                name="salary"
                type="text"
                placeholder="type salary amount"
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
                    required
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
            <LoadingButton title={"Post"} loadingTitle={"Posting"} />
          </div>
        </form>
      </div>
      <h1 className="text-error text-3xl text-center my-5">Delete From Here</h1>
      <h1 className="text-warning bg-base-100 p-5 rounded-lg my-3 text-center shadow-xl mx-10">Warning:  Deleting any job post from here will also delete related all application forms </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:mx-10 mx-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-base-100 shadow-xl p-5 rounded-lg"
          >
            <h1 className="font-semibold">{item.jobTitle}</h1>
            <h1>{item.category}</h1>
            <h1>{item.location}</h1>
            <h1>{item.date}</h1>
            <h1>Vacancy: {item.vacancy}</h1>
            <div>
              <button
                onClick={() => handleDelete(item.id)}
                className="btn rounded-full btn-error hover:ease-in-out hover:scale-110 hover:transition-all hover:duration-150 my-2"
                disabled={loadingId === item.id}
              >
                {loadingId === item.id ? (
                  <span className="flex items-center">
                    Deleting
                    <span className="loading loading-spinner text-neutral ml-2"></span>
                  </span>
                ) : (
                  "Delete"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostJob;
