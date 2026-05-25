import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/HotelFilter", label: "Hotels" },
    { path: "/RestaurantFilter", label: "Restaurants" },
    { path: "/packages", label: "Packages 🇮🇳" },
    { path: "/FilterDes", label: "Travel" },
    { path: "/feedback", label: "Feedback" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isHomePage
          ? scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-md"
            : "bg-transparent"
          : "bg-white/90 backdrop-blur-xl shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* TEXT LOGO */}
        <Link to="/" className="flex flex-col leading-tight">
          <h1
            className={`text-3xl font-extrabold tracking-wide bg-clip-text text-transparent ${
              isHomePage && !scrolled
                ? "bg-gradient-to-r from-white via-indigo-300 to-white"
                : "bg-gradient-to-r from-indigo-600 to-purple-600"
            }`}
          >
            TripVilla
          </h1>
          <span className="text-xs text-gray-500 font-medium">
            Explore India Your Way
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-[17px] font-semibold transition ${
                isActive(link.path)
                  ? "text-indigo-600"
                  : isHomePage && !scrolled
                  ? "text-white hover:text-indigo-300"
                  : "text-gray-800 hover:text-indigo-600"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-500 transition-all duration-300 ${
                  isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* LOGIN */}
          <Link to="/login">
            <button className="px-5 py-2 rounded-lg font-semibold text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white transition">
              Login
            </button>
          </Link>

          {/* SIGNUP */}
          <Link to="/signup">
            <button className="px-5 py-2 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md">
              Sign Up
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-3xl ${
            isHomePage && !scrolled ? "text-white" : "text-gray-900"
          }`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl px-6 py-6 space-y-4 shadow-lg rounded-b-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-semibold text-gray-800 hover:text-indigo-600 transition"
            >
              {link.label}
            </Link>
          ))}

          <Link to="/login" onClick={() => setMenuOpen(false)} className="block w-full">
            <button className="w-full border border-indigo-600 text-indigo-600 font-semibold py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition">
              Login
            </button>
          </Link>

          <Link to="/signup" onClick={() => setMenuOpen(false)} className="block w-full">
            <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
