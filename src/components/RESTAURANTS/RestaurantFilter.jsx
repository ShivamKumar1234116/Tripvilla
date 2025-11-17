import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FilterRestoCard from './FilterRestoCard';
import Loader from "../Ui/Loader";

const RestaurantFilter = () => {
  const headings = [
    "🍲 Discover Delicious Dining",
    "🍽️ Taste the Best Nearby",
    "🌆 Explore Local Restaurants",
    "😋 Satisfy Your Cravings",
  ];

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // 🔹 Initial state false
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState({
    location: "HARIDWAR",
    budget: "500",
  });

  const [restaurants, setRestaurants] = useState([]);

  // 🔹 Handle Search with loader
  const handleSearch = async () => {
    setLoading(true); // 🔹 loader only when search clicked
    let price1 = 0, price2 = 20000;

    if (filter.budget === "500") price1=0, price2=500;
    else if (filter.budget === "500-1000") price1=500, price2=1000;
    else if (filter.budget === "1000-2000") price1=1000, price2=2000;
    else if (filter.budget === "2000+") price1=2000, price2=1000000;

    navigate(`/RestaurantFilter?location=${filter.location}&price1=${price1}&price2=${price2}`);

    try {
      const response = await axios.get(
        `http://localhost:8080/restaurant/all/${filter.location}/${price1}/${price2}`
      );

      // 🔹 Artificial 6-second delay for loader
      setTimeout(() => {
        setRestaurants(response.data.data);
        setLoading(false);
      }, 6000);

    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setLoading(false);
    }

    setFilter({ location: "", budget: "" });
  };

  // 🔹 Animated heading
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
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center mt-20"
        style={{ backgroundImage: "url('./src/assets/restaurantsimage/backrest.jpg')" }}
      >
        <div className="absolute top-12 text-center z-10 px-4">
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
          <p className="mt-2 text-white text-lg md:text-xl font-medium drop-shadow">
            Discover food options by your location and budget with ease
          </p>
        </div>

        {/* Filter Box */}
        {/* Filter Box */}
<div className="absolute bottom-10 w-full flex justify-center z-20 px-4">
  <div
    className="
      w-full sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[60%]
      bg-white/90 backdrop-blur-md 
      p-6 rounded-2xl shadow-2xl 
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center
    "
  >
    {/* Location Input */}
    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 gap-2 bg-white shadow-sm w-full">
      <FaLocationDot className="text-red-500 text-lg" />
      <input
        type="text"
        placeholder="Enter Location"
        value={filter.location}
        onChange={(e) => setFilter(prev => ({ ...prev, location: e.target.value }))}
        className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
      />
    </div>

    {/* Budget Input */}
    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 gap-2 bg-white shadow-sm w-full">
      <MdCurrencyRupee className="text-indigo-500 text-lg" />
      <input
        list="budgetOptions"
        type="text"
        placeholder="Select Budget"
        value={filter.budget}
        onChange={(e) => setFilter(prev => ({ ...prev, budget: e.target.value }))}
        className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
      />
      <datalist id="budgetOptions">
        <option value="500">Below ₹500</option>
        <option value="500-1000">₹500 - ₹1000</option>
        <option value="1000-2000">₹1000 - ₹2000</option>
        <option value="2000+">Above ₹2000</option>
      </datalist>
    </div>

    {/* Search Button */}
    <div className="col-span-1 sm:col-span-2 md:col-span-1 flex justify-center">
      <button
        onClick={handleSearch}
        className="
          w-full sm:w-auto
          px-8 py-2 rounded-md 
          bg-gradient-to-r from-purple-500 to-indigo-500 
          text-white font-semibold 
          shadow-md hover:scale-105 
          transition-transform duration-200 
          flex items-center justify-center gap-2 text-lg
        "
      >
        <IoSearchSharp /> Search
      </button>
    </div>
  </div>
</div>

      </div>

      {/* Restaurant Results with Loader */}
      <div className="w-full mx-auto mt-15 px-4 grid grid-cols-1 gap-y-14 justify-items-center">
        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <Loader />
          </div>
        ) : restaurants.length > 0 ? (
          restaurants.map((restaurant, index) => (
            <FilterRestoCard
              id={restaurant._id}
              key={index}
              name={restaurant.name}
              price={restaurant.price}
              img={restaurant.images?.[0]?.url || "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"}
              rating={restaurant.rating}
              location={restaurant.location.city}
            />
          ))
        ) : (
          <p className="text-center text-sky-600 col-span-full font-bold text-xl">
            NO RESTAURANTS FOUND... TRY ANOTHER LOCATION !
          </p>
        )}
      </div>
    </>
  );
};

export default RestaurantFilter;
