"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import NavBar from "../components/navBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Reservation() {
  const [activeTab, setActiveTab] = useState("calendar"); // manage active tab

  const generateTimeOptions = () => {
    const times = [];
    let currentTime = new Date();
    currentTime.setHours(10, 30, 0, 0); // Start time: 10:30
    const endTime = new Date();
    endTime.setHours(19, 30, 0, 0); // End time: 19:30

    while (currentTime <= endTime) {
      times.push(
        currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      currentTime.setMinutes(currentTime.getMinutes() + 15);
    }

    return times;
  };

  const timeOptions = generateTimeOptions();

  return (
    <div>
      <NavBar />
      <main>
        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="flex justify-center">
            <TabsTrigger value="calendar">Dato</TabsTrigger>
            <TabsTrigger value="empty">Gæster</TabsTrigger>
            <TabsTrigger value="time-selector">Tid</TabsTrigger>
            <TabsTrigger value="Bekræft">Bekræft</TabsTrigger>
          </TabsList>

          <TabsContent value="calendar">
            <div>
              <Calendar />
            </div>
          </TabsContent>
          <TabsContent value="Gæster">
            <div className="flex gap-2">
              {Array.from({ length: 20 }, (_, index) => (
                <button
                  key={index}
                  className="rounded-full bg-blue-500 text-white w-10 h-10 flex items-center justify-center"
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="time-selector">
            <div>
              <h2 className="text-lg font-bold mb-4">Select a Time:</h2>
              <select className="border rounded p-2 w-full max-w-xs">
                {timeOptions.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </TabsContent>
        </Tabs>

        {/* Button to manually switch to a specific tab */}
        <button onClick={() => setActiveTab("Gæster")}>
          Click me after selection
        </button>
      </main>
    </div>
  );
  {
    /* TODO: Add guest count input */
  }
  {
    /* TODO: Add user information form */
  }
  {
    /* TODO: get availability from API */
  }
  {
    /* TODO: if date selected navigate to the next tab and replace the tab name with the selected information */
  }
}

export default Reservation;
