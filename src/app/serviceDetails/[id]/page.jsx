import Image from "next/image";
import React from "react";
import img from "./../../../../public/Link (2).png";
import { FiDownload } from "react-icons/fi";
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import ServiceData from "../../../components/ServiceData";
import Testimonial from './../../../components/Testimonial'

const ServiceDetails = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <div>
        <div className="h-[200px] bg-main mx-10 flex justify-center items-center rounded-lg my-10">
          <h1 className="text-white text-center text-[50px] lg:text-[80px]">
            Service Name
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-5 my-10 mx-5 md:mx-12 lg:mx-20">
          <div>
            <Image src={img} width={580} height={600} alt="" />
          </div>
          <div>
            <h1 className="text-main text-3xl uppercase">Service Name</h1>
            <h1 className="text-text mt-5">Enterprise Resource Planning (ERP) is a comprehensive software solution that integrates and manages business processes and data across an entire organization. The primary goal of ERP is to streamline operations, enhance efficiency, and provide real-time visibility into various aspects of business activities</h1>
            <button className="btn bg-main w-80 text-white hover:bg-transparent hover:border-2 hover:border-main hover:text-black my-10">DOWNLOAD OUR BROCHURE <FiDownload className="ms-5" size={18} /></button>
            <h1><Link href={'/'} className="text-main flex items-center gap-2">GET A QUOTE <FaArrowRight /></Link></h1>
          </div>
        </div>
        <div>
          <h1 className="text-center text-main text-3xl my-10">SCOPE OF THE WORK</h1>
          <p className="text-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deLorem Ipsum.</p>
        </div>
        <div>
          <h1 className="text-center text-main text-3xl mt-10 mb-5">WE OFFER</h1>
          <p className="text-text text-center">We offer free consultation. Contact us any time to find the perfect plan for your business.</p>
        </div>
        <div className="">
          <ServiceData/>
        </div>
        <div>
          <h1 className="text-main text-3xl my-10 text-center">TESTIMONIAL</h1>
          <div>
            <Testimonial/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
