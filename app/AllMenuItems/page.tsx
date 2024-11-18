import React, { useState } from "react";
import Sidebar from "../components/sideBar";
import Link from "next/link";

const MenuItems = () => {
  // Static data for now
  const menuItems = [
    {
      id: 1,
      name: "Bruschetta",
      description: "Grilled bread with tomato and basil",
      price: 4500, // Assuming price is in cents
    },
    {
      id: 2,
      name: "Steak",
      description: "Grilled sirloin steak with sides",
      price: 15000,
    },
    {
      id: 3,
      name: "Cheesecake",
      description: "Classic New York cheesecake",
      price: 6000,
    },
    {
      id: 4,
      name: "Red Wine",
      description: "Glass of premium red wine",
      price: 8000,
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        {/* Row layout for items */}
        <div className="flex flex-wrap gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="box-border h-64 w-64 p-4 border-4 flex flex-col justify-between"
            >
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm">{item.description}</p>
              <p className="text-lg font-bold">{(item.price / 100).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
