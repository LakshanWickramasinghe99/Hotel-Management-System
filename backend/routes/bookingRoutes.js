const express = require("express");
const {
  createBooking,
  getAllBookings,
  searchBookings,
} = require("../controllers/bookingController");

const router = express.Router();

// Route to create a new booking
router.post("/", createBooking);

// Route to get all bookings
router.get("/", getAllBookings);

// Route to search for bookings
router.get("/search", searchBookings);

module.exports = router;
