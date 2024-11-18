import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingModal from "./LoadingModel";

const HomePage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const timeSlots = [
    "00:00",
    "00:15",
    "00:30",
    "00:45",
    "01:00",
    "01:15",
    "01:30",
    "01:45",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:30",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:30",
  ];

  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!date || !time || !duration) {
      setError("All fields are required.");
      return;
    }

    setError("");
    setLoading(true);

    // Simulate a 3-second loading animation
    setTimeout(async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/bookings/search",
          {
            params: { date, time, duration },
          }
        );

        if (response.data.length === 0) {
          setError("No bookings found matching your search criteria.");
        } else {
          // Navigate to DisplayDetails and pass the data
          navigate("/details", { state: { bookings: response.data } });
        }
      } catch (err) {
        setError("Error fetching bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    }, 3000); // 3-second delay
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-3xl font-bold mb-6">Search Bookings</h1>

      <form
        onSubmit={handleSearch}
        className="bg-white shadow-md rounded px-8 py-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Date Input */}
          <div>
            <label
              htmlFor="date"
              className="block text-gray-700 font-medium mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Time Dropdown */}
          <div>
            <label
              htmlFor="time"
              className="block text-gray-700 font-medium mb-2"
            >
              Time
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select a Time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Duration Dropdown */}
          <div>
            <label
              htmlFor="duration"
              className="block text-gray-700 font-medium mb-2"
            >
              Duration
            </label>
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Duration</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
              <option value="180">3 hours</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary"
        >
          Search
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      {/* Loading Animation */}
      <LoadingModal message="Checking availability..." isVisible={loading} />
    </div>
  );
};

export default HomePage;
