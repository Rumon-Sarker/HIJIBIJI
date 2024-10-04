"use client";
import { useState } from "react";
import PortfolioDataFilter from "../components/PortfolioDataFilter";

const PortfolioComponents = ({ portfolioData }) => {
  const [activeTab, setActiveTab] = useState(1);

  //   --------------data filtering-------------
  const softwareData = portfolioData?.filter(
    (item) => item.category === "software"
  );
  const mobileAppData = portfolioData?.filter(
    (item) => item.category === "mobileApp"
  );

  const webAppData = portfolioData?.filter(
    (item) => item.category === "webDevelopment"
  );
  const infrastructureData = portfolioData?.filter(
    (item) => item.category === "infrastructure"
  );

  return (
    <div>
      <div className="h-[200px] bg-main mx-5 lg:mx-10 flex justify-center items-center rounded-lg my-10">
        <h1 className="text-white text-center text-[50px] lg:text-[80px]">
          Portfolio
        </h1>
      </div>
      <div className="w-full">
        {/* Tab buttons */}
        <div className="flex flex-wrap lg:flex-row justify-center space-x-5 mx-10 rounded-lg border-b-4 shadow-xl p-3 mb-6">
          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 1
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(1)}
          >
            ALL
          </button>
          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 2
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(2)}
          >
            SOFTWARE
          </button>
         

          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 3
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(3)}
          >
            MOBILE APP
          </button>
          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 4
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(4)}
          >
            WEB DEVELOPMENT
          </button>
          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 5
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(5)}
          >
            INFRASTRUCTURE
          </button>
        </div>

        {/* Tab content */}
        <div className="p-4">
          {/* Tab 1 content */}
          {activeTab === 1 && (
            <div className="transition-opacity duration-500 opacity-100">
              <PortfolioDataFilter cardData={portfolioData} />
            </div>
          )}

          {/* Tab 2 content */}
          {activeTab === 2 && (
            <div className="transition-opacity duration-500 opacity-100">
              <PortfolioDataFilter cardData={softwareData} />
            </div>
          )}
          {/* Tab 3 content */}
          {activeTab === 3 && (
            <div className="transition-opacity duration-500 opacity-100">
              <PortfolioDataFilter cardData={mobileAppData} />
            </div>)}
          {/* Tab 4 content */}
          {activeTab === 4 && (
            <div className="transition-opacity duration-500 opacity-100">
              <PortfolioDataFilter cardData={webAppData} />
            </div>
          )}
          {/* Tab 5 content */}
          {activeTab === 5 && (
            <div className="transition-opacity duration-500 opacity-100">
              <PortfolioDataFilter cardData={infrastructureData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponents;
