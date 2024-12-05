"use client";
import { Suspense, useEffect, useState } from "react";
import PortfolioDataFilter from "../components/PortfolioDataFilter";
import {
  getPortfolioCategories,
  getPortfoliosByCategory,
} from "@/controls/fetchData/fetchData";
import Loading from "@/app/loading";
import Loader from "@/app/loader";

const PortfolioComponents = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const categories = await getPortfolioCategories();
      // Add an "ALL" category at the start of the categories array
      const allCategories = [{ id: "all", name: "All" }, ...categories];
      setCategories(allCategories);
      setActiveTab("all"); // Default to "ALL" tab
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchPortfolios() {
      if (activeTab !== null) {
        let fetchedPortfolios;
        if (activeTab === "all") {
          // Fetch all portfolios if "ALL" tab is active
          fetchedPortfolios = await getPortfoliosByCategory(null); // Pass `null` or omit the filter
        } else {
          // Fetch portfolios by category
          fetchedPortfolios = await getPortfoliosByCategory(activeTab);
        }
        setPortfolios(fetchedPortfolios);
      }
    }
    fetchPortfolios();
  }, [activeTab]);

  return (
    <Loader>
      <Suspense fallback={<Loading />}>
        <div>
          <div className="h-[200px] bg-main mx-5 lg:mx-10 flex justify-center items-center rounded-lg my-10">
            <h1 className="text-white text-center text-[50px] lg:text-[80px]">
              Portfolio
            </h1>
          </div>
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
              <PortfolioDataFilter cardData={portfolios} />
            </div>
          </div>
        </div>
      </Suspense>
    </Loader>
  );
};

export default PortfolioComponents;
