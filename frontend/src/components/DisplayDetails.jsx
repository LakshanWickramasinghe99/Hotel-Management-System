import React from "react";
import { useLocation } from "react-router-dom";

const DisplayDetails = () => {
  const location = useLocation();
  const { bookings } = location.state || { bookings: [] };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-3xl font-bold mb-6">Booking Details</h1>

      {bookings.length > 0 ? (
        <ul className="mt-4">
          {bookings.map((booking) => (
            <li
              key={booking._id}
              className="border rounded p-4 mb-4 shadow"
            >
              <p>
                <strong>Date:</strong>{" "}
                {new Date(booking.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {booking.time}
              </p>
              <p>
                <strong>Duration:</strong> {booking.duration} minutes
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-700">No bookings to display.</p>
      )}
    </div>
  );
};

export default DisplayDetails;
