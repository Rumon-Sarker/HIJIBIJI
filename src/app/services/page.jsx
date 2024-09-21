import React from "react";
import { FaSearch } from "react-icons/fa";
import ServiceData from './../../components/ServiceData'


const Services = () => {
  return (
    <div>
      <div>
        <div className="h-[200px] bg-main mx-10 flex justify-center items-center rounded-lg my-10">
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
            quisquam illo. Dicta excepturi distinctio, pariatur rem vel, quidem
            delectus aut maiores itaque sit ad explicabo tempore?
          </h1>
        </div>
        <form className="flex lg:mx-20 md:mx-12 mx-5 mt-10">
          <input
            type="text"
            placeholder="Search in service"
            className="input input-bordered input-md w-full"
          />
          <button className="bg-main p-2 rounded-sm">
            <FaSearch size={25} />
          </button>
        </form>
        {/* service  card */}
        <div>
          <ServiceData />
        </div>
        
      </div>
    </div>
  );
};

export default Services;
