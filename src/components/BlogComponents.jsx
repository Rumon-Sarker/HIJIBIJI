"use client";
import { Suspense, useEffect, useState } from "react";
import {
  getBlogCategories,
  getBlogsByCategory,
} from "@/controls/fetchData/fetchData";
import BlogData from "./BlogData";
import Loading from "@/app/loading";

const BlogComponents = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const categories = await getBlogCategories();
      // Add an "ALL" category at the start of the categories array
      const allCategories = [{ id: "all", name: "All" }, ...categories];
      setCategories(allCategories);
      setActiveTab("all"); // Default to "ALL" tab
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchBlog() {
      if (activeTab !== null) {
        let fetchedBlog;
        if (activeTab === "all") {
          // Fetch all portfolios if "ALL" tab is active
          fetchedBlog = await getBlogsByCategory(null); // Pass `null` or omit the filter
        } else {
          // Fetch portfolios by category
          fetchedBlog = await getBlogsByCategory(activeTab);
        }
        setBlog(fetchedBlog);
      }
    }
    fetchBlog();
  }, [activeTab]);

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <div className="w-full">
          {/* Dynamic Tabs */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-5 mx-5 lg:mx-10 rounded-lg shadow-xl p-3 my-8">
            {categories?.map((category) => (
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
            <BlogData cardData={blog} />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default BlogComponents;
