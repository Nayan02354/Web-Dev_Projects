import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./Pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./Pages/ContactUs";
import { Toaster } from "react-hot-toast";
import User_Dashboard from "./Pages/Dashboard/User_Dashboard";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Dashboard Routes */}
          <Route path="/user/dashboard" element={<User_Dashboard />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
