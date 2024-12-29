'use client'
import LoadingButton from '@/components/LoadingButton';
import { createFooterDescription } from '@/controls/creator/creator';
import { deleteFooterDescription } from '@/controls/delete/delete';

import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const FooterDetails = ({ data }) => {

    let formRef = useRef(null);
    const [loadingId, setLoadingId] = useState(null);


    const handlePost = async (formData) => {
        const res = await createFooterDescription(formData);
        if (res.status === "success") {
            toast.success("Footer data has been created successfully!");
            formRef.current.reset();
          } else {
            toast.error("Footer data has not been created!");
          }
    };
    const handleDelete = async (id) => {
        setLoadingId(id);
        const res = await deleteFooterDescription(id);
        if (res.status) {
            toast.success("You have successfully deleted this");
        } else if (res.error) {
            toast.error("An error occurred, couldn't delete");
        }
        setLoadingId(null);
    };
    return (
        <div>
            <div>
                <Toaster />
                <div className="lg:mx-10 my-10">
                    <h1 className="text-main text-3xl text-center my-2 uppercase">
                        post Footer description data
                    </h1>
                    <form
                        action={handlePost}
                        ref={formRef}
                        className="space-y-5 w-full bg-base-100 shadow-xl p-8"
                    >
                        <div className="md:flex justify-between flex-row gap-20 w-full">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">short description (max 250 character)</span>
                                </div>
                                <input
                                    required
                                    name="short_description"
                                    type="text"
                                    placeholder="type here..."
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">address title1</span>
                                </div>
                                <input
                                    required
                                    type="text"
                                    name="address_title1"
                                    placeholder="type here...example(Dhaka)"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                        </div>
                        <div className="md:flex justify-between flex-row gap-20 w-full">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">address details1</span>
                                </div>
                                <input
                                    required
                                    type="text"
                                    name="address_details1"
                                    placeholder="type here...example(285 Patharghata Chittagong Bangladesh)"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                          
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">address title2</span>
                                </div>
                                <input
                                    required
                                    type="text"
                                    name="address_title2"
                                    placeholder="type here...example(285 Patharghata Chittagong Bangladesh)"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                        </div>
                        <div className="md:flex justify-between flex-row gap-20 w-full">
                        <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">address details2</span>
                                </div>
                                <input
                                    required
                                    type="text"
                                    name="address_details2"
                                    placeholder="type here...example(285 Patharghata Chittagong Bangladesh)"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">facebook link</span>
                                </div>
                                <input
                                    required
                                    name="facebook_link"
                                    type="text"
                                    placeholder="type here"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                        </div>
                        <div className="md:flex justify-between flex-row gap-20 w-full">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">instagram link</span>
                                </div>
                                <input
                                    required
                                    type="text"
                                    name="instagram_link"
                                    placeholder="type here..."
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">linkedin link</span>
                                </div>
                                <input
                                    required
                                    name="linkedin_link"
                                    type="text"
                                    placeholder="type location"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                        </div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">twitter link</span>
                            </div>
                            <input
                                required
                                name="twitter_link"
                                type="text"
                                placeholder="type location"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>
                        <div className="flex justify-end">
                            <LoadingButton title={"Post"} loadingTitle={"Posting"} />
                        </div>
                    </form>
                </div>
                <h1 className="text-error text-3xl text-center my-5">Delete From Here</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 md:mx-10 mx-2">
                    {data?.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col flex-grow-0 bg-base-100 shadow-xl p-5 rounded-lg"
                        >
                            <h1 className="font-semibold">{item.jobTitle}</h1>
                            <h1>description: {item.shortDescription}</h1>
                            <h1> address1: {item.addressTitle1}:{item.addressDetails1}</h1>
                            <h1> address2: {item.addressTitle2}:{item.addressDetails2}</h1>
                            <h1><span className='font-semibold'>facebook link:</span> {item.facebookLink}</h1>
                            <h1><span className='font-semibold'>instagram link:</span> {item.instagramLink} </h1>
                            <h1><span className='font-semibold'>linkedin link:</span> {item.linkedinLink} </h1>
                            <h1><span className='font-semibold'>twitter link:</span> {item.twitterLink} </h1>
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
        </div>
    );
};

export default FooterDetails;