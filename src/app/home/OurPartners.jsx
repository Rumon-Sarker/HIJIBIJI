import Image from "next/image";
const OurPartners = ({ partners }) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-main text-4xl">Our clients are our partners</h1>
        <p className="text-text px-5 my-10">
          From global enterprises to digital disruptors, we’ve partnered with
          companies for over 20 years to reimagine,
          <br /> reshape and redefine the way people experience your business.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-2 md:px-12 my-16 content-center">
        {partners?.map((partner) => (
          <div className="shadow-xl bg-base-200 rounded-xl" key={partner.id}>
            <Image
              className="object-cover rounded-xl"
              alt=""
              width={250}
              height={150}
              src={partner.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
