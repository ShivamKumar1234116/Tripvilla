import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import img from "/src/assets/logonew.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 py-4 ${
        isHomePage
          ? scrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg" // after scroll
            : "bg-transparent text-white" // transparent on hero
          : "bg-gray-200/40 backdrop-blur-lg shadow-md text-gray-900 border border-gray-300/30" // 👈 subtle glass effect on other pages
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={img}
            alt="TripVilla"
            className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
          />
          <span
            className={`text-4xl font-extrabold italic bg-clip-text text-transparent ${
              isHomePage && !scrolled
                ? "bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400"
                : "bg-gradient-to-r from-purple-600 via-pink-400 to-yellow-400"
            }`}
          >
            TripVilla
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            { path: "/", label: "Home" },
            { path: "/HotelFilter", label: "Hotels" },
            { path: "/RestaurantFilter", label: "Restaurants" },
            { path: "/FilterDes", label: "Travel" },
            { path: "/feedback", label: "Feedback" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-semibold px-4 py-2 rounded-xl transition duration-300 ${
                isActive(link.path)
                  ? "bg-purple-500 text-white shadow-lg"
                  : isHomePage && !scrolled
                  ? "text-white hover:bg-white/20"
                  : "text-gray-800 hover:bg-purple-100 hover:text-purple-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Buttons */}
          <Link to="/login">
            <button
              className={`font-bold px-4 py-2 rounded-xl shadow-md transition duration-300 ${
                isHomePage && !scrolled
                  ? "bg-white/20 text-white hover:bg-white/30"
                  : "bg-purple-500 text-white hover:bg-purple-600"
              }`}
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              className={`px-4 py-2 rounded-xl shadow-md transition duration-300 ${
                isHomePage && !scrolled
                  ? "bg-yellow-400 text-white hover:bg-yellow-300"
                  : "bg-yellow-400 text-white hover:bg-yellow-300 hover:text-purple-700"
              }`}
            >
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-3xl focus:outline-none ${
              isHomePage && !scrolled ? "text-white" : "text-gray-800"
            }`}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-lg px-6 py-6 space-y-4 rounded-xl">
          {[
            { path: "/", label: "Home" },
            { path: "/HotelFilter", label: "Hotels" },
            { path: "/RestaurantFilter", label: "Restaurants" },
            { path: "/FilterDes", label: "Travel" },
            { path: "/feedback", label: "Feedback" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 font-semibold px-4 py-2 rounded-xl hover:bg-purple-100 hover:text-purple-600 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-purple-500 text-white font-bold px-4 py-2 rounded-xl shadow-md hover:bg-purple-600 transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-yellow-400 text-white px-4 py-2 rounded-xl shadow-md hover:bg-yellow-300 hover:text-purple-700 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
