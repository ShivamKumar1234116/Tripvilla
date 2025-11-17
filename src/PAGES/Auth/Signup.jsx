import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpass: "",
  });

  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState(""); // success / error
  const navigate = useNavigate();

  // 🔹 Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password Match Validation
    if (data.password !== data.confirmpass) {
      setPopupMessage("Passwords do not match");
      setPopupType("error");
      setTimeout(() => setPopupMessage(""), 3000);
      return;
    }

    try {
      // 🔹 Backend API Call
      const response = await axios.post("http://localhost:8080/user/signup", {
        username: data.username,
        email: data.email,
        password: data.password,
      });

      // 🔹 Optional: Store token if backend returns it
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      // 🔹 Success Message
      setPopupMessage("Signup successful!");
      setPopupType("success");
      setTimeout(() => setPopupMessage(""), 3000);

      // 🔹 Redirect to Login after delay
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      const msg = err.response?.data?.message || "Signup failed";
      setPopupMessage(msg);
      setPopupType("error");
      setTimeout(() => setPopupMessage(""), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-[#0072ff] mb-6">
          Sign Up to TripVilla
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleInputChange}
            placeholder="Username"
            required
            className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0072ff]"
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0072ff]"
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
            placeholder="Password"
            required
            className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0072ff]"
          />
          <input
            type="password"
            name="confirmpass"
            value={data.confirmpass}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            required
            className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0072ff]"
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-bold rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-transform"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4 text-[14px]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#0072ff] font-semibold hover:underline"
          >
            Login
          </Link>
        </div>

        {/* 🔹 Popup Notification */}
        {popupMessage && (
          <div
            className={`fixed top-10 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white z-50 transition-all duration-300 ${
              popupType === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {popupMessage}
          </div>
        )}
      </div>
    </div>
  );
}
