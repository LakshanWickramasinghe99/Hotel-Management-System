const Booking = require("../models/booking");

// Controller to create a booking
const createBooking = async (req, res) => {
  const { date, time, duration } = req.body;

  if (!date || !time || !duration) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newBooking = await Booking.create({
      date,
      time,
      duration,
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};

// Controller to get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

// Controller to get bookings based on filters
const searchBookings = async (req, res) => {
  const { date, time, duration } = req.query;

  try {
    const query = {};
    if (date) query.date = new Date(date); // Filter by date
    if (time) query.time = time; // Filter by time
    if (duration) query.duration = Number(duration); // Filter by duration

    const bookings = await Booking.find(query);

    if (bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found" });
    }

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error searching bookings", error });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  searchBookings,
};
