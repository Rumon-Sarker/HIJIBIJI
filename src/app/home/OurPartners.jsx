import Image from "next/image";
import Link from "next/link";
const OurPartners = ({ partners }) => {
  return (
    <div>
      <div className=" md:text-center md:mx-auto px-5 md:px-0 mx-5">
        <h1 className="text-main lg:text-5xl text-3xl">
          Our clients are our partners
        </h1>
        <p className="text-text md:px-5 px-0 lg:my-10 my-6">
          From global enterprises to digital disruptors, we’ve partnered with
          companies for over 20 years to reimagine, reshape and redefine the way
          people experience your business.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5 gap-2 px-5 mx-3 md:mx-0 md:px-12 my-16 content-center">
        {partners?.map((partner) => (
          <div className="shadow-xl bg-base-100 rounded-xl" key={partner.id}>
            <Link href={partner?.link}>
              {" "}
              <Image
                className="rounded-xl"
                alt=""
                width={400}
                height={300}
                src={partner?.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
