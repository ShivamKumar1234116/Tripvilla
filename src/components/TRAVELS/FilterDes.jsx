import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearchSharp } from "react-icons/io5";

const FilterDes = () => {
  const headings = [
    "✈ Plan Your Perfect Journey",
    "🗺️ Explore the World Your Way",
    "🚄 Find the Best Routes",
    "🌍 Your Adventure Starts Here"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[65vh] md:h-[80vh] bg-cover bg-center rounded-b-3xl flex items-center justify-center"
        style={{
          backgroundImage: "url('./src/assets/TRAVELIMG/travelfil.jpg')",
        }}
      >

        {/* Animated Heading */}
        <div className="absolute top-8 z-10 text-center px-4 mt-60">
          <AnimatePresence mode="wait">
            <motion.h1
              key={headings[index]}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg"
            >
              {headings[index]}
            </motion.h1>
          </AnimatePresence>

          <p className="mt-2 text-white text-xl md:text-lg font-semibold drop-shadow-sm">
            Search travel options by route and date with ease
          </p>
        </div>

        {/* Filter Box */}
        <div className="absolute bottom-[-60px] w-full flex justify-center px-4 z-10">
          <div className="w-full max-w-4xl bg-white/90 backdrop-blur-xl p-6 rounded-xl shadow-2xl grid gap-4 sm:grid-cols-3 md:grid-cols-3 items-center">

            {/* From Location */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 gap-2 bg-white shadow-sm">
              <FaLocationDot className="text-red-500 text-lg" />
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-gray-500"
                placeholder="From"
              />
            </div>

            {/* To Location */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 gap-2 bg-white shadow-sm">
              <FaLocationDot className="text-green-500 text-lg" />
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-gray-500"
                placeholder="To"
              />
            </div>

            {/* Date */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 gap-2 bg-white shadow-sm">
              <FaCalendarAlt className="text-indigo-500 text-lg" />
              <input
                type="date"
                className="outline-none w-full bg-transparent placeholder-gray-500"
              />
            </div>

            {/* Search Button */}
            <div className="sm:col-span-3 w-full flex justify-center mt-2">
              <button className="px-6 py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-200 flex items-center gap-2 text-lg">
                <IoSearchSharp /> Search Travel
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-24 sm:h-32 md:h-40"></div>
    </>
  );
};

export default FilterDes;
