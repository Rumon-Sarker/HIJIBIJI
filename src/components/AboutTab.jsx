"use client";
import React, { Suspense, useEffect, useState } from "react";
import AboutTabContent from "./AboutTabContent";
import {
  getTechnologyByCategory,
  getTechnologyCategories,
} from "@/controls/fetchData/fetchData";
import Loader from "@/app/loader";
import Loading from "@/app/loading";

const AboutTab = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [technology, setTechnology] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const categories = await getTechnologyCategories();
      // Add an "ALL" category at the start of the categories array
      const allCategories = [{ id: "All", name: "All" }, ...categories];
      setCategories(allCategories);
      setActiveTab("All"); // Default to "ALL" tab
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchTechnologies() {
      if (activeTab !== null) {
        let fetchedTechnology;
        if (activeTab === "All") {
          // Fetch all Technology if "ALL" tab is active
          fetchedTechnology = await getTechnologyByCategory(null); // Pass `null` or omit the filter
        } else {
          // Fetch Technology by category
          fetchedTechnology = await getTechnologyByCategory(activeTab);
        }
        setTechnology(fetchedTechnology);
      }
    }
    fetchTechnologies();
  }, [activeTab]);
  return (
    <div>
      <Loader>
        <Suspense fallback={<Loading />}>
          <div>
            <div className="w-full">
              {/* Dynamic Tabs */}
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-5 mx-5 lg:mx-10 rounded-lg shadow-xl p-3 mb-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
                      activeTab === category.id
                        ? "text-main border-b-4 border-main"
                        : "text-gray-500 hover:text-main"
                    }`}
                    onClick={() => setActiveTab(category.id)}
                  >
                    {category.name.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Portfolio Content */}
              <div className="p-4">
                <AboutTabContent tabData={technology} />
              </div>
            </div>
          </div>
        </Suspense>
      </Loader>
    </div>
  );
};

export default AboutTab;
