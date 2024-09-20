"use client";
import React, { useState } from "react";
import logo1 from "./../../../public/project-plan.png";
import logo2 from "./../../../public/raise.png";
import logo3 from "./../../../public/rating (1).png";
import logo4 from "./../../../public/timeline 1.png";
import icon1 from "./../../../public/ph_target-bold.png";
import icon2 from "./../../../public/tabler_bulb.png";
import icon3 from "./../../../public/game-icons_achievement.png";
import Image from "next/image";
import AboutTabContent from "./../../components/AboutTabContent";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div>
        <div className="h-[200px] bg-main mx-10 flex justify-center items-center rounded-lg my-10">
          <h1 className="text-white text-center text-[50px] lg:text-[80px]">
            About Us
          </h1>
        </div>
        <div>
          <h1 className="uppercase text-center text-main text-[35px]">
            Who we are
          </h1>
          <p className="text-text my-10 p-5  md:px-24">
            We are a leading ICT company, our offices located in New York,
            Singapore and Dhaka, Bangladesh. We started our journey in the year
            2017. We are a team of technology enthusiasts, developing solutions
            that transform great ideas into impactful innovations. All these
            years, we have followed and delivered the assistance of business
            strategy, managed IT services, cyber security, application design
            and development services to our clients, who look forward to the
            digital invention to expand their businesses. At One ICT, we strive
            hard to deliver custom technical solutions to our clients worldwide.
            Blending their Idea with our expertise – The ultimate recipe for
            success.
          </p>
        </div>

        {/* video */}
        <div className="flex justify-center my-10">
          <video width={1020} height={650} controls preload="none">
            <source src="" type="video/mp4" />
            <track src="" kind="subtitles" srcLang="en" label="English" />
          </video>
        </div>

        <div>
          <h1 className="text-center text-main text-[35px] my-10">WHY US</h1>
          <p className="text-text my-10 px-5 md:px-24">
            You need someone that understands your needs, budget and desire to
            grow. We specialize in the needs of small businesses and the unique
            problems and issues they face every day. We’re budget friendly and
            can help you both remotely and in-person. You’re not going to get
            that kind of service from a big IT firm. We grow with you and scale
            our services to fit your needs.
          </p>
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
              <div className="stat-value text-main">100 +</div>
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
              <div className="stat-value text-main">20 %</div>
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
              <div className="stat-value text-main">$ 10M</div>
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
              <div className="stat-value text-main">2 yrs</div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="uppercase text-center text-main text-[35px] my-10">
            Years in Business
          </h1>
          <p className="text-text px-5 md:px-20 mb-5">
            It is a long-established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English.
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
                <p className="text-center">
                  By 2025, One ICT will be Among the First Three Information
                  Technology Companies in Bangladesh as the Fastest Growing
                  Provider of Complete IT Solutions Matching Customer Needs with
                  Focus on Corporate, Government & International Markets with
                  Leadership Presence in Software.
                </p>
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
                <p className="text-center">
                  One ICT is Committed to Execution Excellence by Maintaining
                  Contractual Obligations Towards Its Customers, Employees,
                  Vendors, Society and Environment in Achieving its Enterprise
                  Objectives Backed by A High Performing Culture.
                </p>
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
                <p className="text-center">
                  One ICT is Committed to Execution Excellence by Maintaining
                  Contractual Obligations Towards Its Customers, Employees,
                  Vendors, Society and Environment in Achieving its Enterprise
                  Objectives Backed by A High Performing Culture.
                </p>
              </div>
            </div>
          </div>

          <div className="my-10">
            <h1 className="text-main text-[40px] text-center">
              Our Technology
            </h1>
            <p className="text-center text-text px-5 mx:10 my-10">
              One ICT LTD is a leading IT firm committed to delivering
              cutting-edge technology solutions to empower businesses and
              organizations. With a focus on innovation and client satisfaction,
              we leverage the latest advancements in technology to provide
              robust and scalable solutions that drive success in the digital
              era.
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

          <div className="lg:mx-10 lg:my-20 px-2">
            <div>
              <div className="w-full">
                {/* Tab buttons */}
                <div className="flex flex-wrap lg:flex-row justify-center border-b-4 shadow-xl p-3 mb-6">
                  <button
                    className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
                      activeTab === 1
                        ? "text-main border-b-4 border-main"
                        : "text-gray-500 hover:text-main"
                    }`}
                    onClick={() => setActiveTab(1)}
                  >
                    Languages
                  </button>
                  <button
                    className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
                      activeTab === 2
                        ? "text-main border-b-4 border-main"
                        : "text-gray-500 hover:text-main"
                    }`}
                    onClick={() => setActiveTab(2)}
                  >
                    Frontend
                  </button>
                  <button
                    className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
                      activeTab === 3
                        ? "text-main border-b-4 border-main"
                        : "text-gray-500 hover:text-main"
                    }`}
                    onClick={() => setActiveTab(3)}
                  >
                    Backend
                  </button>

                  {/* Add more tab buttons */}
                  <button
                    className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
                      activeTab === 4
                        ? "text-main border-b-4 border-main"
                        : "text-gray-500 hover:text-main"
                    }`}
                    onClick={() => setActiveTab(4)}
                  >
                    UI/UX
                  </button>
                  <button
                    className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
                      activeTab === 5
                        ? "text-main border-b-4 border-main"
                        : "text-gray-500 hover:text-main"
                    }`}
                    onClick={() => setActiveTab(5)}
                  >
                    DevOps/Server
                  </button>
                  <button
                    className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
                      activeTab === 6
                        ? "text-main border-b-4 border-main"
                        : "text-gray-500 hover:text-main"
                    }`}
                    onClick={() => setActiveTab(6)}
                  >
                    Mobile
                  </button>
                  <button
                    className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
                      activeTab === 7
                        ? "text-main border-b-4 border-main"
                        : "text-gray-500 hover:text-main"
                    }`}
                    onClick={() => setActiveTab(7)}
                  >
                    Services
                  </button>
                  <button
                    className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
                      activeTab === 8
                        ? "text-main border-b-4 border-main"
                        : "text-gray-500 hover:text-main"
                    }`}
                    onClick={() => setActiveTab(8)}
                  >
                    Other Technologies
                  </button>
                 
                </div>

                {/* Tab content */}
                <div className="p-4">
                  <div
                    className={`transition-opacity duration-500 ${
                      activeTab === 1 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {activeTab === 1 && (
                      <div>
                        <AboutTabContent />
                      </div>
                    )}
                  </div>
                  <div
                    className={`transition-opacity duration-500 ${
                      activeTab === 2 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {activeTab === 2 && <div>Content for Tab 2</div>}
                  </div>
                  <div
                    className={`transition-opacity duration-500 ${
                      activeTab === 3 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {activeTab === 3 && <div>Content for Tab 3</div>}
                  </div>
                  {/* Add more tab content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
