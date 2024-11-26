"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/sideBar";
import Navbar from "../components/navBar";

const MenuItems = () => {
  const [data, setData] = useState<any[]>([]); // Store fetched menu items (array of objects)
  const [error, setError] = useState<string | null>(null); // Error handling
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5005/Menu", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        setData(result); // Set the fetched data
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 p-8 bg-gray-100 overflow-auto">
        <div className="flex flex-col gap-6">
          {data.map((category) => (
            <div key={category.name} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
              <div className="flex flex-wrap gap-6">
                {category.menu_item.map((item: any) => (
                  <div
                    key={item.name}
                    className="box-border h-64 w-64 p-4 border-4 flex flex-col justify-between bg-white shadow-md cursor-pointer hover:opacity-40"
                  >
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm">{item.description}</p>
                    <p className="text-lg font-bold">
                      {(item.price_in_oere / 100).toFixed(2)} kr
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
