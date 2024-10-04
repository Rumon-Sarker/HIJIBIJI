"use client";
import React, { useState } from "react";
import BlogData from "../components/BlogData";
const BlogComponents = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <div className="w-full">
        {/* Tab buttons */}
        <div className="flex flex-wrap lg:mx-10 lg:flex-row justify-center space-x-5 rounded-lg border-b-4 shadow-xl p-3 my-8">
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
            Category 1
          </button>
          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 3
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(3)}
          >
            Category 2
          </button>

          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 4
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(4)}
          >
            Category 3
          </button>
          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 5
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(5)}
          >
            Category 4
          </button>
          <button
            className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
              activeTab === 6
                ? "text-main border-b-4 border-main"
                : "text-gray-500 hover:text-main"
            }`}
            onClick={() => setActiveTab(6)}
          >
            Category 5
          </button>
        </div>

        {/* Tab content */}
        <div>
          {/* Tab 1 content */}
          {activeTab === 1 && (
            <div className="transition-opacity duration-500 opacity-100">
              <BlogData cardData={data} />
            </div>
          )}

          {/* Tab 2 content */}
          {activeTab === 2 && (
            <div className="transition-opacity duration-500 opacity-100">
              {" "}
              <BlogData />
            </div>
          )}
          {/* Tab 3 content */}
          {activeTab === 3 && (
            <div className="transition-opacity duration-500 opacity-100"></div>
          )}
          {/* Tab 4 content */}
          {activeTab === 4 && (
            <div className="transition-opacity duration-500 opacity-100"></div>
          )}
          {/* Tab 5 content */}
          {activeTab === 5 && (
            <div className="transition-opacity duration-500 opacity-100"></div>
          )}
          {/* Tab 6 content */}
          {activeTab === 6 && (
            <div className="transition-opacity duration-500 opacity-100"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogComponents;
