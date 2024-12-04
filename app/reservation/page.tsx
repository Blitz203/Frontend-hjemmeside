"use client";

import React, { useState } from "react";
import axios from "axios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ReservationForm = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [time, setTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");

  const currentTimestamp = new Date().toISOString(); // ISO format for timestamp

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Ensure time is a valid date
    const reservationTime = new Date(time);
    if (isNaN(reservationTime.getTime())) {
      alert("Invalid time entered. Please select a valid date and time.");
      return;
    }

    // Collect the data dynamically from the form
    const reservationData = {
      time: reservationTime.toISOString(),
      duration_in_minutes: 90,
      number_of_people: numberOfPeople,
      waiter_id: 1,
      status: "confirmed",
      comment,
      customer_name: customerName,
      customer_phone_number: customerPhoneNumber,
      email,
      created_at: currentTimestamp,
      updated_at: currentTimestamp,
    };

    console.log("Sending reservation data:", reservationData); // Log data to verify

    try {
      const response = await axios.post(
        "http://localhost:5005/reservations",
        reservationData
      );
      console.log("Reservation created:", response.data);
      alert("Reservation successfully created!");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response status:", error.response.status); 
        console.error("Error response data:", error.response.data); 
        alert(`Error: ${JSON.stringify(error.response.data)}`); 
      } else {
        console.error("Error creating reservation:", error);
        alert("There was an error creating the reservation.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex justify-center">
          <TabsTrigger value="details">Customer Details</TabsTrigger>
          <TabsTrigger value="reservation">Reservation</TabsTrigger>
          <TabsTrigger value="confirmation">Confirmation</TabsTrigger>
        </TabsList>

        {/* Customer Details Tab */}
        <TabsContent value="details">
          <div>
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              className="border p-2"
            />
          </div>

          <div>
            <label htmlFor="customerPhoneNumber">Phone Number</label>
            <input
              type="tel"
              id="customerPhoneNumber"
              value={customerPhoneNumber}
              onChange={(e) => setCustomerPhoneNumber(e.target.value)}
              required
              className="border p-2"
            />
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white p-2"
            onClick={() => setActiveTab("reservation")}
          >
            Next
          </button>
        </TabsContent>

        {/* Reservation Details Tab */}
        <TabsContent value="reservation">
          <div>
            <label htmlFor="time">Reservation Time</label>
            <input
              type="datetime-local"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="border p-2"
            />
          </div>

          <div>
            <label htmlFor="numberOfPeople">Number of People</label>
            <input
              type="number"
              id="numberOfPeople"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
              min="1"
              required
              className="border p-2"
            />
          </div>

          <div>
            <label htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border p-2"
            />
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white p-2"
            onClick={() => setActiveTab("confirmation")}
          >
            Next
          </button>
        </TabsContent>

        {/* Confirmation Tab */}
        <TabsContent value="confirmation">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border p-2"
            />
          </div>

          <div>
            <button type="submit" className="bg-blue-500 text-white p-2">
              Create Reservation
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </form>
  );
};

export default ReservationForm;
