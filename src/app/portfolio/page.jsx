"use client";
import { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="h-[200px] bg-main mx-10 flex justify-center items-center rounded-lg my-10">
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

          {/* Add more tab buttons */}
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
          <div
            className={`transition-opacity duration-500 ${
              activeTab === 1 ? "opacity-100" : "opacity-0"
            }`}
          > All
            {activeTab === 1 && <div></div>}
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
  );
};

export default Portfolio;
