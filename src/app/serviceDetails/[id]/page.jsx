import Image from "next/image";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import ServiceData from "../../../components/ServiceData";
import Testimonial from './../../../components/Testimonial'
import {PrismaClient} from "@prisma/client";

const ServiceDetails = async ({ params }) => {
  const prisma = new PrismaClient();
  const data = await prisma.services.findUnique({where: {id: parseInt(params.id)}})
  const serviceData = await prisma.services.findMany({})
  return (
    <div>
      <div>
        <div className="h-[200px] bg-main mx-5 lg:mx-10 flex justify-center items-center rounded-lg my-10">
          <h1 className="text-white text-center text-[50px] lg:text-[80px]">
           {data?.name}
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-5 my-10 mx-5 md:mx-12 lg:mx-20">
          <div>
            <Image src={data?.image} width={580} height={600} alt="" />
          </div>
          <div>
            <h1 className="text-main text-3xl uppercase">{data?.name}</h1>
            <h1 className="text-text mt-5">{data?.description}</h1>
           <Link  href={data?.pdf}> <button className="btn bg-main w-80 text-white hover:bg-transparent hover:border-2 hover:border-main hover:text-black my-10">DOWNLOAD OUR BROCHURE <FiDownload className="ms-5" size={18} /></button></Link>
            <h1><Link href={'/'} className="text-main flex items-center gap-2">GET A QUOTE <FaArrowRight /></Link></h1>
          </div>
        </div>
        <div className="mx-5 md:mx-12 lg:mx-20">
          <h1 className="text-center text-main text-3xl my-10">SCOPE OF THE WORK</h1>
          <p className="text-text">{data?.scope}</p>
        </div>
        <div>
          <h1 className="text-center text-main text-3xl mt-10 mb-5">WE OFFER</h1>
          <p className="text-text text-center">We offer free consultation. Contact us any time to find the perfect plan for your business.</p>
        </div>
        <div className="mt-5">
          <ServiceData ServiceData={serviceData} />
        </div>
        <div>
          <h1 className="text-main text-3xl my-16 text-center">TESTIMONIAL</h1>
          <div>
            <Testimonial/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
