"use client";
import React, { Suspense, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ServiceData from "./../../components/ServiceData";
import {
  getServicesData,
  getServicesAllData,
} from "../../controls/fetchData/fetchData";
import Loading from "../loading";

const Services = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchService = async () => {
      const res = await getServicesAllData();
      setData(res.data);
      setLoading(false);
    };

    fetchService();
   
  }, []);
  const handleSubmit = async (formData) => {
    setLoading(true);
    const res = await getServicesData(formData);
    setData(res.data);
    setLoading(true);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <div>
          <div className="h-[200px] bg-main mx-5 lg:mx-10 flex justify-center items-center rounded-lg my-10">
            <h1 className="text-white text-center text-[50px] lg:text-[80px]">
              Services
            </h1>
          </div>
          <div>
            <h1 className="lg:mx-20 md:mx-12 mx-5 my-10 text-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              perspiciatis inventore velit deleniti non maxime sed obcaecati qui
              explicabo eum ratione cum exercitationem neque reprehenderit fuga
              atque corrupti blanditiis laudantium earum, voluptate dignissimos
              quisquam illo. Dicta excepturi distinctio, pariatur rem vel,
              quidem delectus aut maiores itaque sit ad explicabo tempore?
            </h1>
          </div>
          <form
            action={handleSubmit}
            className="flex lg:mx-20 md:mx-12 mx-5 mt-10"
          >
            <input
              type="text"
              name="name"
              placeholder="Search for the service that you want with the name"
              className="input input-bordered input-md w-full"
            />
            <button type="submit" className="bg-main p-2 rounded-sm">
              <FaSearch size={25} />
            </button>
          </form>
          {/* service  card */}
          <div className="my-5">
            <ServiceData ServiceData={data} />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Services;
