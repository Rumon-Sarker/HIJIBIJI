"use client";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  createBg1,
  createBg2,
} from "../../../controls/postImageAndVIdeo/createImageAndVideo.js";
import LoadingButton from "@/components/LoadingButton.jsx";
import { getHomepageBackground1, getHomepageBackground2 } from "@/controls/fetchData/fetchData.js";
import Image from "next/image.js";
import { deleteHomePageImage1, deleteHomePageImage2 } from "@/controls/delete/delete.js";

const PostHomeBg = () => {
  const formRef = useRef(null)
  const handlePost1 = async (formData) => {
    const res = await createBg1(formData);
    if (res.status) {
      toast.success("Background image 1 & title has been posted successfully!");
      formRef.current.reset();
    }
    if (res.error) {
      toast.error("Background image 1 has not been posted!");
    }
  };
  const handlePost2 = async (formData) => {
    const res = await createBg2(formData);
    if (res.status) {
      toast.success("Background image 2 has been posted successfully!");
    }
    if (res.error) {
      toast.error("Background image 2 has not been posted!");
    }
  };
const [image1,setImage1] = useState([])
const [image2,setImage2] = useState([])

    useEffect(() => {
            async function fetchBackgroundImage() {
              const image1 = await getHomepageBackground1();
              setImage1(image1.data);
            }
            fetchBackgroundImage();
            async function fetchBackgroundImage2() {
              const image2 = await getHomepageBackground2();
              setImage2(image2.data);
            }
            fetchBackgroundImage2();
          }, []);

          const handleDelete1 = async(id) => {
            const res = await deleteHomePageImage1(id)
            if (res.status) {
              toast.success("Background image has been Deleted successfully!");
            }
            if (res.error) {
              toast.error("Background image has not been Deleted!");
            }
          }

          const handleDelete2 = async(id) => {
            const res = await deleteHomePageImage2(id)
            if (res.status) {
              toast.success("Background image has been Deleted successfully!");
            }
            if (res.error) {
              toast.error("Background image has not been Deleted!");
            }
          }
          
  return (
    <div>
      <Toaster />
      <div className="lg:mx-10 my-10">
        <h1 className="text-main text-3xl text-center my-2 uppercase">
          post Home background image{" "}
        </h1>
        <form
          ref={formRef}
          action={handlePost1}
          className="space-y-5 w-full bg-base-100 shadow-xl p-8 my-10"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Pick image for 1st background (maximum file size 5MB)
              </span>
            </div>
            <input
              required
              name="image"
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              required
              name="title"
              type="text"
              placeholder="type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Short description(Max 350 character)</span>
            </div>
            <input
              required
              name="details"
              type="text"
              placeholder="type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="flex justify-end">
            <LoadingButton title={"Post"} loadingTitle={"Posting"} />
          </div>
        </form>
        <div>
          <form
            action={handlePost2}
            className="space-y-5 w-full bg-base-100 shadow-xl p-8 my-10"
          >
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  Pick image for 2nd background (maximum file size 5MB)
                </span>
              </div>
              <input
                required
                name="image"
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </label>
            <div className="flex justify-end">
              <LoadingButton title={"Post"} loadingTitle={"Posting"} />
            </div>
          </form>
        </div>
        <h1 className="text-3xl text-center my-10">Home page top background image</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 content-center my-20">
          {
            image1?.map(img => <div key={img?.id} className="">
                <Image className="h-[300px] object-cover" width={300} height={300} src={img?.image} alt=""/>
                <button onClick={()=> handleDelete2(img?.id)} className="btn btn-error mt-5">Delete</button>
            </div>)
          }
        </div>
        <h1 className="text-3xl text-center my-10">Home page bottom contact form background image</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 content-center my-20">
          {
            image2?.map(img => <div key={img?.id}>
                <Image className="h-[300px] object-cover" width={300} height={300} src={img?.image} alt=""/>
                <button onClick={()=> handleDelete2(img?.id)} className="btn btn-error mt-5">Delete</button>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default PostHomeBg;
