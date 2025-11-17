import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      setPopupMessage("Please fill all fields");
      setPopupType("error");
      setTimeout(() => setPopupMessage(""), 3000);
      return;
    }

    try {
      // API Call
      const response = await axios.post("https://tripvilla-backend.vercel.app/user/login", {
        email: data.email,
        password: data.password,
      });

      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token); // Save token in localStorage
      }

      setPopupMessage("Login successful!");
      setPopupType("success");

      setTimeout(() => {
        setPopupMessage("");
        navigate("/"); // Redirect to home
      }, 1500);
    } catch (err) {
      const msg = err.response?.data?.message || "Invalid email or password";
      setPopupMessage(msg);
      setPopupType("error");
      setTimeout(() => setPopupMessage(""), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-[#0072ff] mb-6">
          Login to TripVilla
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0072ff]"
          />

          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0072ff]"
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-bold rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-transform"
          >
            Log In
          </button>
        </form>

        <span className="block mt-2 ml-2 text-[11px]">
          <a href="#" className="text-[#0072ff] hover:underline">
            Forgot Password?
          </a>
        </span>

        <div className="text-center mt-4 text-[14px]">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#0072ff] font-semibold hover:underline"
          >
            Signup
          </Link>
        </div>

        {/* Popup Notification */}
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
