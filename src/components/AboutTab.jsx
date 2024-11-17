"use client";
import React, { useState } from "react";
import AboutTabContent from "./AboutTabContent";

const AboutTab = ({ techItem }) => {
  const [activeTab, setActiveTab] = useState(1);
  const frontEnd = techItem?.filter((item) => item.category === "frontEnd");
  const backend = techItem?.filter((item) => item.category === "backend");
  const uiUx = techItem?.filter((item) => item.category === "uiUx");
  const devOps = techItem?.filter((item) => item.category === "devOps");
  const mobile = techItem?.filter((item) => item.category === "mobile");
  const services = techItem?.filter((item) => item.category === "services");
  const others = techItem?.filter((item) => item.category === "others");
  return (
    <div>
      <div className="lg:mx-10 lg:my-20 px-2">
        <div>
          <div className="w-full">
            {/* Tab buttons */}
            <div className="flex flex-wrap lg:flex-row justify-center shadow-xl p-3 mb-6">
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
                    <AboutTabContent tabData={techItem} />
                  </div>
                )}
              </div>
              <div
                className={`transition-opacity duration-500 ${
                  activeTab === 2 ? "opacity-100" : "opacity-0"
                }`}
              >
                {activeTab === 2 && (
                  <div>
                    {" "}
                    <AboutTabContent tabData={frontEnd} />
                  </div>
                )}
              </div>
              <div
                className={`transition-opacity duration-500 ${
                  activeTab === 3 ? "opacity-100" : "opacity-0"
                }`}
              >
                {activeTab === 3 && (
                  <div>
                    {" "}
                    <AboutTabContent tabData={backend} />
                  </div>
                )}
              </div>
              <div
                className={`transition-opacity duration-500 ${
                  activeTab === 4 ? "opacity-100" : "opacity-0"
                }`}
              >
                {activeTab === 4 && (
                  <div>
                    {" "}
                    <AboutTabContent tabData={uiUx} />
                  </div>
                )}
              </div>
              <div
                className={`transition-opacity duration-500 ${
                  activeTab === 5 ? "opacity-100" : "opacity-0"
                }`}
              >
                {activeTab === 5 && (
                  <div>
                    {" "}
                    <AboutTabContent tabData={devOps} />
                  </div>
                )}
              </div>
              <div
                className={`transition-opacity duration-500 ${
                  activeTab === 6 ? "opacity-100" : "opacity-0"
                }`}
              >
                {activeTab === 6 && (
                  <div>
                    {" "}
                    <AboutTabContent tabData={mobile} />
                  </div>
                )}
              </div>
              <div
                className={`transition-opacity duration-500 ${
                  activeTab === 7 ? "opacity-100" : "opacity-0"
                }`}
              >
                {activeTab === 7 && (
                  <div>
                    {" "}
                    <AboutTabContent tabData={services} />
                  </div>
                )}
              </div>
              <div
                className={`transition-opacity duration-500 ${
                  activeTab === 8 ? "opacity-100" : "opacity-0"
                }`}
              >
                {activeTab === 8 && (
                  <div>
                    {" "}
                    <AboutTabContent tabData={others} />
                  </div>
                )}
              </div>
              {/* Add more tab content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
