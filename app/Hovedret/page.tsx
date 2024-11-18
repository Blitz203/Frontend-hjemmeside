import React, { useState } from "react";
import Sidebar from "../components/sideBar";

const hovedRet = () => {
  // Static data for now
  const menuItems = [
    {
      id: 2,
      name: "Steak",
      description: "Grilled sirloin steak with sides",
      price: 15000,
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
              <p className="text-lg font-bold">
                {(item.price / 100).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default hovedRet;
