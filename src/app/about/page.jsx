"use client";
import React, { useState } from "react";
import logo1 from "./../../../public/project-plan.png";
import logo2 from "./../../../public/raise.png";
import logo3 from "./../../../public/rating (1).png";
import logo4 from "./../../../public/timeline 1.png";
import icon1 from "./../../../public/ph_target-bold.png";
import icon2 from "./../../../public/tabler_bulb.png";
import icon3 from "./../../../public/game-icons_achievement.png";
import tab1 from "./../../../public/Swift_logo_svg 2.png";
import tab2 from "./../../../public/ruby 2.png";
import tab3 from "./../../../public/Python-Symbol 2.png";
import tab4 from "./../../../public/php.png";
import tab5 from "./../../../public/kotlin_jfif 2.png";
import tab6 from "./../../../public/javascript-vector-logo-yellow-png-transparent-javascript-vector-12 2.png";
import tab7 from "./../../../public/Java_programming_language_logo_svg 2.png";
import tab8 from "./../../../public/c-sharp-c-logo-02F17714BA-seeklogo_com 2.png";
import Image from "next/image";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

const AboutUs = () => {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };
  return (
    <div>
      <div>
        <div className="h-[200px] bg-main mx-10 flex justify-center items-end rounded-lg my-10">
          <h1 className="text-white text-center text-[50px] lg:text-[80px]">
            About Us
          </h1>
        </div>
        <div>
          <h1 className="uppercase text-center text-main text-[35px]">
            Who we are
          </h1>
          <p className="text-text my-10 px-24">
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
          <p className="text-text my-10 px-24">
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
          <p className="text-text px-20 mb-5">
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
            <p className="text-center text-text my-10">
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

          <div className="px-20 mx-10 my-20">
            <div>
              <div className="mb-3">
                <TETabs className="bg-base-100 shadow-xl py-2">
                  <TETabsItem
                    onClick={() => handleBasicClick("tab1")}
                    active={basicActive === "tab1"}
                  >
                    Languages
                  </TETabsItem>
                  <TETabsItem
                    onClick={() => handleBasicClick("tab2")}
                    active={basicActive === "tab2"}
                  >
                    Frontend
                  </TETabsItem>
                  <TETabsItem
                    onClick={() => handleBasicClick("tab3")}
                    active={basicActive === "tab3"}
                  >
                    Backend
                  </TETabsItem>
                  <TETabsItem
                    onClick={() => handleBasicClick("tab4")}
                    active={basicActive === "tab4"}
                
                  >
                    UI/UX
                  </TETabsItem>
                  <TETabsItem
                    onClick={() => handleBasicClick("tab5")}
                    active={basicActive === "tab5"}
                
                  >
                    DevOps/Server
                  </TETabsItem>
                  <TETabsItem
                    onClick={() => handleBasicClick("tab6")}
                    active={basicActive === "tab6"}
                
                  >
              Mobile
                  </TETabsItem>
                  <TETabsItem
                    onClick={() => handleBasicClick("tab7")}
                    active={basicActive === "tab7"}
                
                  >
                   Services
                  </TETabsItem>
                  <TETabsItem
                    onClick={() => handleBasicClick("tab8")}
                    active={basicActive === "tab8"}
                
                  >
                   Other Technologies
                  </TETabsItem>
                </TETabs>

                <TETabsContent>
                  <TETabsPane show={basicActive === "tab1"}>
                   <ul className="flex lg:flex-row space-x-28 items-center">
                    <li><Image className="object-cover" width={50} height={50} src={tab1} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab2} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab3} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab4} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab5} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab6} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab7} alt=""/></li>
                    <li><Image className="object-cover" width={50} height={50} src={tab8} alt=""/></li>
                   </ul>
                   <ul className="flex space-x-28 mt-5 mb-10">
                    <li>Swift</li>
                    <li>Ruby</li>
                    <li>Python</li>
                    <li>Php</li>
                    <li>Kotlin</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>C#</li>
                   </ul>
                  </TETabsPane>
                  <TETabsPane show={basicActive === "tab2"}>
                    Tab 2 content
                  </TETabsPane>
                  <TETabsPane show={basicActive === "tab3"}>
                    Tab 3 content
                  </TETabsPane>
                  <TETabsPane show={basicActive === "tab4"}>
                    Tab 4 content
                  </TETabsPane>
                </TETabsContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
