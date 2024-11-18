import logo1 from "./../../../public/project-plan.png";
import logo2 from "./../../../public/raise.png";
import logo3 from "./../../../public/rating (1).png";
import logo4 from "./../../../public/timeline 1.png";
import icon1 from "./../../../public/ph_target-bold.png";
import icon2 from "./../../../public/tabler_bulb.png";
import icon3 from "./../../../public/game-icons_achievement.png";
import Image from "next/image";
import AboutTab from "../../components/AboutTab";
import { PrismaClient } from "@prisma/client";

const AboutUs = async () => {
  const prisma = new PrismaClient();
  const video = await prisma.video.findFirst({
    orderBy: { createdAt: "desc" },
  });
  const data = await prisma.aboutUs.findFirst({
    orderBy: { createdAt: "desc" },
  });
  const techItem = await prisma.technology.findMany();

  return (
    <div>
      <div>
        <div className="h-[200px] bg-main mx-5 lg:mx-10 flex justify-center items-center rounded-lg my-10">
          <h1 className="text-white text-center text-[50px] lg:text-[80px]">
            About Us
          </h1>
        </div>
        <div>
          <h1 className="uppercase text-center text-main text-[35px]">
            Who we are
          </h1>
          <p className="text-text my-10 p-5  md:px-24">{data?.whoWeAre}</p>
        </div>

        {/* video */}
        <div className="flex justify-center my-10">
          <video width={1020} height={550} controls preload="yes">
            <source src={video?.video} type="video/mp4" />
            <track src="" kind="subtitles" srcLang="en" label="English" />
          </video>
        </div>

        <div>
          <h1 className="text-center text-main text-[35px] my-10">WHY US</h1>
          <p className="text-text my-10 px-5 md:px-24">{data?.whyUs}</p>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 bg-base-100 ">
            <div className="w-24 h-20"></div>
            <div className="w-24"></div>
            <div className="w-24"></div>
            <div className="w-24"></div>
        </div> */}
        <div className="flex justify-center items-center my-10">
          <div className="stats stats-vertical lg:stats-horizontal shadow-2xl">
            <div className="stat">
              <div className="stat-title">
                <Image
                  className="object-cover"
                  width={65}
                  height={65}
                  src={logo1}
                  alt=""
                />
              </div>
              <div className="stat-desc text-main">Completed Projects</div>
              <div className="stat-value text-main">
                {data?.completedProject} +
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">
                <Image
                  className="object-cover"
                  width={80}
                  height={80}
                  src={logo3}
                  alt=""
                />
              </div>
              <div className="stat-desc text-main">Customer Satisfaction</div>
              <div className="stat-value text-main">
                {data?.customerSatisfaction} %
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">
                <Image
                  className="object-cover"
                  width={80}
                  height={80}
                  src={logo2}
                  alt=""
                />
              </div>
              <div className="stat-desc text-main">Raised by Clients</div>
              <div className="stat-value text-main">
                $ {data?.raisedByClient}M
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">
                <Image
                  className="object-cover"
                  width={80}
                  height={80}
                  src={logo4}
                  alt=""
                />
              </div>
              <div className="stat-desc text-main">Years in Business</div>
              <div className="stat-value text-main">{data?.years} yrs</div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="uppercase text-center text-main text-[35px] my-10">
            Mission Vision and Values
          </h1>
          <p className="text-text px-5 md:px-20 mb-5">
            {data?.yearsInBusiness}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-10">
            <div
              className="flex relative"
              style={{
                backgroundImage: "url('/Polygon 1.png')",
                height: "600px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center items-center ps-20 pr-20 text-white absolute">
                <Image
                  className="mt-5"
                  src={icon1}
                  width={130}
                  height={130}
                  alt=""
                />
                <h1 className="text-[30px] my-4 font-bold">Mission</h1>
                <p className="text-center">{data?.mission}</p>
              </div>
            </div>
            <div
              className="flex relative"
              style={{
                backgroundImage: "url('/Polygon 1.png')",
                height: "600px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center items-center ps-20 pr-20 text-white absolute">
                <Image
                  className="mt-5"
                  src={icon2}
                  width={130}
                  height={130}
                  alt=""
                />
                <h1 className="text-[30px] my-4 font-bold">Vision</h1>
                <p className="text-center">{data?.vision}</p>
              </div>
            </div>
            <div
              className="flex relative"
              style={{
                backgroundImage: "url('/Polygon 1.png')",
                height: "600px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center items-center ps-20 pr-20 text-white absolute">
                <Image
                  className="mt-5"
                  src={icon3}
                  width={130}
                  height={130}
                  alt=""
                />
                <h1 className="text-[30px] my-4 font-bold">Values</h1>
                <p className="text-center">{data?.values}</p>
              </div>
            </div>
          </div>

          <div className="my-10">
            <h1 className="text-main text-[40px] text-center">
              Our Technology
            </h1>
            <p className="text-center text-text px-5 mx:10 my-10">
              {data?.ourTechnology}
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3 px-10">
              <div
                style={{
                  backgroundImage: "url('/Component 298.png')",
                  height: "600px",
                  backgroundSize: "content",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex justify-center items-center pt-72">
                  <h1>AI</h1>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: "url('/Component 299.png')",
                  height: "600px",
                  backgroundSize: "content",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex justify-center items-center pt-72">
                  <h1>ERP Solution</h1>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: "url('/Rectangle 1587.png')",
                  height: "600px",
                  backgroundSize: "content",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex justify-center items-center pt-72">
                  <h1>IOT</h1>
                </div>
              </div>
            </div>
          </div>
          <AboutTab techItem={techItem} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
