import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import Loader from "../Ui/Loader";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch restaurant by ID with loader
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // start loader
      try {
        const response = await axios.get(`http://localhost:8080/restaurant/${id}`);
        // Artificial 6-second delay for loader
        setTimeout(() => {
          setData(response.data.data);
          setLoading(false);
        }, 6000);
      } catch (err) {
        console.error("Error fetching restaurant:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      )}

      {!loading && !data && (
        <div className="text-center mt-20 text-lg text-red-500">
          ❌ Restaurant not found!
        </div>
      )}

      {!loading && data && (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 mt-20">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 drop-shadow-md">
              {data.name}
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
              {data.location?.city}, {data.location?.state}, {data.location?.country}
            </p>
            <p className="mt-2 text-yellow-500 font-semibold text-xl">
              ⭐ {data.rating} / 5
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <img
              src={data.images?.[0]?.url || "https://png.pngtree.com/background/20230604/original/pngtree-expensive-modern-restaurant-and-bar-hall-picture-image_2873154.jpg"}
              alt="restaurant-main"
              className="col-span-2 w-full h-80 md:h-[28rem] object-cover rounded-2xl shadow-2xl hover:scale-[1.01] transition-transform duration-300"
            />
            <div className="grid grid-rows-2 gap-4">
              <img
                src={data.images?.[1]?.url || "https://tse1.mm.bing.net/th/id/OIP.APf8sfgu28mT-7IXz-eQ_QHaEK?pid=Api&P=0&h=180"}
                alt="restaurant-1"
                className="w-full h-[13rem] object-cover rounded-2xl shadow-lg hover:opacity-90 transition"
              />
              <img
                src={data.images?.[2]?.url || "https://wallpaperaccess.com/full/826921.jpg"}
                alt="restaurant-2"
                className="w-full h-[13rem] object-cover rounded-2xl shadow-lg hover:opacity-90 transition"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Description + Amenities */}
            <div className="lg:col-span-2 bg-gradient-to-br from-white to-pink-50 p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-pink-700 mb-4">About this Restaurant</h2>
              <p className="text-gray-700 leading-relaxed text-justify">{data.description}</p>

              <h3 className="text-xl font-bold text-pink-700 mt-8 mb-3">Amenities / Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-gray-700">
                {data.amenities?.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow hover:shadow-md transition">
                    <FaCheckCircle className="text-green-500" /> {amenity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Booking / Reservation Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
              <h2 className="text-3xl font-bold text-pink-800">
                ₹{data.price}<span className="text-lg text-gray-500"> / person</span>
              </h2>
              <p className="text-gray-500 mt-1">Inclusive of taxes</p>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Reservation Date</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Guests</label>
                  <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                  </select>
                </div>

                <button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:from-pink-700 hover:to-pink-800 transition-transform transform hover:scale-[1.02]">
                  Reserve Now
                </button>
              </div>
            </div>
          </div>

          <div className="h-30 w-full border border-pink-500 text-md font-bold my-10 mx-10 text-purple-500">
            View on Map
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantDetail;
