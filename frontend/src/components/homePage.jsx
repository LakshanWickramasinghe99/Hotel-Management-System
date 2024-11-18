import React, { useState } from "react";
import axios from "axios"; // You will need axios for API calls

const HomePage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5000/api/bookings/search", {
        params: { date, time, duration },
      });
      setBookings(response.data);
      setError("");
    } catch (err) {
      setError("Error fetching bookings");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-3xl font-bold">Booking Search</h1>
      <form onSubmit={handleSearch} className="my-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="date" className="block text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-gray-700">Time</label>
            <input
              type="text"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="HH:MM"
              className="mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="duration" className="block text-gray-700">Duration (minutes)</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="mt-1 p-2 border rounded"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Display Search Results */}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {bookings.length > 0 ? (
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Bookings:</h2>
          <ul>
            {bookings.map((booking) => (
              <li key={booking._id} className="my-2">
                <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {booking.time}</p>
                <p><strong>Duration:</strong> {booking.duration} minutes</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No bookings found matching your search criteria.</p>
      )}
    </div>
  );
};

export default HomePage;
