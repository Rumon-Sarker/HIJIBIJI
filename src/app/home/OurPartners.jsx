import React from "react";
import image1 from "./../../../public/tuiGroup.png";
import image2 from "./../../../public/panasonic.png";
import image3 from "./../../../public/etoro.png";
import image4 from "./../../../public/betson.png";
import image5 from "./../../../public/duracel.png";
import image6 from "./../../../public/lottaland.png";
import image7 from "./../../../public/seeking.png";
import image8 from "./../../../public/metroMarket.png";
import image9 from "./../../../public/payoneer.png";
import image10 from "./../../../public/tipiko.png";
import Image from "next/image";
const OurPartners = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  return (
    <div>
      <div className="text-center">
        <h1 className="text-main text-4xl">
          Our clients are our partners
        </h1>
        <p className="text-text px-5 my-10">
          From global enterprises to digital disruptors, we’ve partnered with
          companies for over 20 years to reimagine,<br /> reshape and redefine the way
          people experience your business.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-2 md:px-12 my-16 content-center">
        {images.map((image, index) => (
          <div className="shadow-xl bg-base-200 rounded-xl" key={index}>
            <Image className="object-cover rounded-xl" alt="" width={250} height={150} src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
