import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer Component
import '@fortawesome/fontawesome-free/css/all.css';
import FAQPage from "./components/FAQs";
import HomePage from "./components/homePage";

const App = () => {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <header>
          <Navbar />
        </header>

        {/* Main Content Placeholder */}
        <main className="flex-grow">
          <Routes>
            {/* Define Routes for Pages */}
            <Route path="/" element={<HomePage/>} />
            <Route path="/faq" element={<FAQPage />} /> {/* Define Route for FAQ page */}
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
