import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";

function FilterRestoCard({ id, name, price, location, img, rating }) {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 
                    rounded-3xl overflow-hidden w-full max-w-4xl mx-auto border border-transparent 
                    shadow-lg hover:shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
      
      {/* Image */}
      <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden group">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6 w-full md:w-3/5">
        {/* Title & Location */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide hover:text-purple-600 transition-colors duration-300">
            {name}
          </h2>
          <p className="flex items-center text-gray-500 text-sm md:text-md mt-2 md:mt-4 italic">
            <IoLocationSharp className="text-red-500 mr-1 text-lg" /> {location}
          </p>
        </div>

        {/* Price & Rating */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 gap-3 sm:gap-0">
          <p className="flex items-center text-md md:text-lg font-semibold text-gray-700">
            <MdCurrencyRupee className="mr-1 text-xl md:text-2xl" /> {price}
          </p>
          <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm md:text-md px-3 py-1 rounded-full font-medium shadow-md">
            ⭐ {rating}
          </span>
        </div>

        {/* Button */}
        <div className="mt-6">
          <Link
            to={`/restaurant/RestaurantDetail/${id}`}
            className="inline-block w-full md:w-auto px-6 py-3 text-base md:text-lg bg-purple-500 text-white rounded-2xl font-bold 
                       hover:bg-purple-600 hover:shadow-lg transition-all duration-300 text-center"
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterRestoCard;
