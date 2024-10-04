'use client'
import React, {useState} from 'react';
import AboutTabContent from './AboutTabContent';

const AboutTab = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div>
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
    );
};

export default AboutTab;