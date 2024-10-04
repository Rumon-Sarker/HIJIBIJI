import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const PortfolioCard = ({cardData}) => {
    const {name,clientName, image,id} = cardData;
    // console.log(cardData)
    return (
        <div>
            <div className='bg-base-100 h-80 rounded-3xl p-3 shadow-xl'>
                <div>
                    <Image className='rounded-3xl object-fill h-[200px] cursor-pointer' src={image} width={500} height={500} alt=''/>
                </div>
                <div className='flex justify-between px-3 mt-5 text-text'>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <Link className='text-main flex gap-1 items-center' href={`/portfolioDetails/${id}`}>View Details<FaArrowRight /></Link>
                </div>
                <h1 className='px-3 text-sm my-5'>
                    {clientName}
                </h1>
            </div>
        </div>
    );
};

export default PortfolioCard;