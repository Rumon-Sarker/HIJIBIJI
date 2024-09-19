"use client";
import { useState } from "react";
import PortfolioDataFilter from "./../../components/PortfolioDataFilter";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1);
  const demoData = [
    {
      id: "1",
      clientName: "Client A",
      projectName: "Project Alpha",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "A comprehensive project for developing a new web platform for Client A. Includes UI/UX design, backend development, and deployment.",
      category: "webDevelopment",
    },
    {
      id: "2",
      clientName: "Client B",
      projectName: "Project Beta",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "An extensive e-commerce platform for Client B. Features include a shopping cart, user authentication, and payment integration.",
      category: "webDevelopment",
    },
    {
      id: "3",
      clientName: "Client C",
      projectName: "Project Gamma",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "A mobile app for Client C aimed at improving customer engagement through personalized notifications and in-app purchases.",
      category: "mobileDevelopment",
    },
    {
      id: "4",
      clientName: "Client D",
      projectName: "Project Delta",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "A cloud-based CRM system for Client D designed to streamline customer management, sales tracking, and reporting.",
      category: "software",
    },
    {
      id: "5",
      clientName: "Client E",
      projectName: "Project Epsilon",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "A data visualization tool for Client E that allows users to generate custom reports and dashboards with interactive charts and graphs.",
      category: "software",
    },
    {
      id: "6",
      clientName: "Client F",
      projectName: "Project Zeta",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "An online education platform for Client F, featuring course management, video lectures, quizzes, and a discussion forum.",
      category: "software",
    },
    {
      id: "7",
      clientName: "Client G",
      projectName: "Project Eta",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "A travel booking system for Client G with integration for hotel reservations, flight bookings, and car rentals.",
      category: "webDevelopment",
    },
    {
      id: "8",
      clientName: "Client H",
      projectName: "Project Theta",
      image: "https://i.ibb.co.com/rkLKgzW/Link-2.png",
      details:
        "A social networking app for Client H focused on community building, with features such as user profiles, posts, and messaging.",
      category: "mobileDevelopment",
    },
  ];


//   --------------data filtering-------------

  const softwareData = demoData.filter((item) => item.category === "software");
  const mobileAppData = demoData.filter(
    (item) => item.category === "mobileDevelopment"
  );
  const WebAppData = demoData.filter(
    (item) => item.category === "webDevelopment"
  );
  const infrastructureData = demoData.filter(
    (item) => item.category === "infrastructure"
  );

  
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
              <PortfolioDataFilter cardData={demoData} />
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
            </div>
          )}
          {/* Tab 4 content */}
          {activeTab === 4 && (
            <div className="transition-opacity duration-500 opacity-100">
              <PortfolioDataFilter cardData={WebAppData} />
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

export default Portfolio;
