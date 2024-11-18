"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFoodCategoriesOpen, setIsFoodCategoriesOpen] = useState(false);

  // Toggle the sidebar visibility on mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle the Food Categories dropdown
  const toggleFoodCategories = () => {
    setIsFoodCategoriesOpen(!isFoodCategoriesOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-gray-800 text-white p-4 transition-all duration-300 ease-in-out sm:w-64 sm:block sm:relative absolute top-0 left-0 h-full z-10`}
      >
        {/* Button to toggle sidebar (visible on mobile) */}
        <button
          onClick={toggleSidebar}
          className="sm:hidden text-white p-2 bg-gray-600 rounded-md mb-4"
        >
          {isSidebarOpen ? "Close" : "Open"}
        </button>

        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-lg hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-lg hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-lg hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-lg hover:text-gray-400">
              Contact
            </a>
          </li>

          {/* Food Categories Dropdown */}
          <li>
            <button
              onClick={toggleFoodCategories}
              className="text-lg hover:text-gray-400 w-full text-left"
            >
              Food Categories
            </button>
            {isFoodCategoriesOpen && (
              <ul className="space-y-2 pl-4 mt-2">
                <li>
                  <a href="#" className="text-lg hover:text-gray-400">
                  Forret
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-gray-400">
                  Hovedret
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-gray-400">
                  Dessert
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-gray-400">
                  Drikkevare
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
