import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function RestaurantsCard({ id, name, img, desc, location, price, rating }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-56 sm:w-60 md:w-[280px] rounded-2xl overflow-hidden m-3 
                    border border-transparent bg-gradient-to-tr from-indigo-100 via-pink-100 to-purple-100 
                    shadow-md hover:shadow-xl transition-all duration-500 ease-in-out 
                    hover:-translate-y-2 hover:scale-[1.03] relative group">

      {/* Glow Border Effect */}
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-[linear-gradient(90deg,#efd5ff_0%,#515ada_100%)] 
                      opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

      {/* Inner Card */}
      <div className="relative bg-white rounded-2xl h-full flex flex-col justify-between overflow-hidden">
        {/* Image */}
        <div className="w-full h-36 relative overflow-hidden rounded-t-2xl">
          <img
            src={img}
            alt={name || "restaurant"}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Wishlist Icon */}
          <button
            onClick={() => setLiked(!liked)}
            className="absolute top-2 right-2 text-white text-xl drop-shadow-lg hover:text-red-500 transition-colors duration-300"
          >
            {liked ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
        </div>

        {/* Info */}
        <div className="p-4 space-y-2 flex-grow">
          <h1 className="text-base font-bold text-gray-900 text-center uppercase tracking-wide">
            {name}
          </h1>

          <p className="text-xs text-gray-600 leading-snug text-start italic line-clamp-3">
            {desc}
          </p>

          {/* Location */}
          <p className="text-sm text-gray-700 flex items-center gap-1 italic">
            <IoLocationSharp className="text-red-500" /> {location}
          </p>

          {/* Price & Rating */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1 text-indigo-700 font-semibold text-sm">
              <MdCurrencyRupee className="text-sm" />
              <span>{price}</span>
            </div>

            <div className="text-xs bg-[linear-gradient(90deg,#667eea,#764ba2)] text-white rounded-md px-2 py-1 shadow-md">
              ⭐ {rating}
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="p-4 flex justify-center">
          <Link 
            to={`/restaurant/RestaurantDetail/${id}`}
            className="w-full py-2 text-center font-bold text-white rounded-lg 
                       bg-gradient-to-r from-purple-400 to-indigo-400
                       shadow-md hover:shadow-lg hover:scale-[1.02] 
                       transition duration-300 ease-in-out"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantsCard;
