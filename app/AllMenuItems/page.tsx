"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/sideBar";
import { Menu } from "lucide-react";
import Navbar from "../components/navBar";

const MenuItems = () => {
  const [data, setData] = useState<any[]>([]); // Store fetched menu items (array of objects)
  const [error, setError] = useState<string | null>(null); // Error handling
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5005/menu_items", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        setData(result);
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
        <div className="flex flex-wrap gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="box-border h-64 w-64 p-4 border-4 flex flex-col justify-between bg-white shadow-md"
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
    </div>
  );
};

export default MenuItems;
