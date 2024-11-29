"use client"
import React, { useState } from "react";
import axios from "axios";

const ReservationForm = () => {
  const [time, setTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [roleId, setRoleId] = useState(""); // This will be your roleId, e.g., waiter, customer, etc.

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const reservationData = {
      time,
      number_of_people: numberOfPeople,
      comment,
      email,
      customer_name: customerName,
      customer_phone_number: customerPhoneNumber,
      roleId, // Add roleId here if needed
    };

    try {
      const response = await axios.post(
        "http://localhost:5005/api/reservations", // Replace with your API endpoint
        reservationData
      );
      console.log("Reservation created:", response.data);
      alert("Reservation successfully created!");
    } catch (error) {
      console.error("Error creating reservation:", error);
      alert("There was an error creating the reservation.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      <div>
        <label htmlFor="roleId">Role ID (optional)</label>
        <input
          type="text"
          id="roleId"
          value={roleId}
          onChange={(e) => setRoleId(e.target.value)}
          className="border p-2"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2">
        Create Reservation
      </button>
    </form>
  );
};

export default ReservationForm;
