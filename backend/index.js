const express = require("express");
const connectDB = require("./server"); // Connects to MongoDB
const bookingRoutes = require("../backend/routes/bookingRoutes");
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/bookings", bookingRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
