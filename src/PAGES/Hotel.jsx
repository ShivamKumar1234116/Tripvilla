import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HotelList from "../components/HOTELS/HotelList";
import TrueFocus from "../components/Ui/TrueFocus";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHotels = async () => {
    try {
      const response = await axios.get("http://localhost:8080/hotel/all");
      setHotels(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching hotels:", err);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center py-10 md:py-14 gap-10 md:gap-16">
      {/* Hero Section */}
      <div
        className="relative w-[95%] md:w-[90%] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] bg-cover bg-center rounded-sm overflow-hidden shadow-2xl"
        style={{
          backgroundImage: "url('./src/assets/HOTELIMG/hotelchat.png')",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 sm:px-6 md:px-6 flex flex-col justify-center items-center h-full"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-snug md:leading-tight">
            Find Your Dream Stay
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg opacity-90 max-w-xl md:max-w-2xl">
            Indulge in comfort, elegance, and world-class hospitality designed
            to make your trip unforgettable.
          </p>

          <Link
            to="/HotelFilter"
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-bold text-white bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            ✨ Explore Hotels
          </Link>
        </motion.div>
      </div>

      {/* Section Heading with TrueFocus */}
      <div className="text-center text-purple-600">
        <div className="inline-block">
          <TrueFocus
            sentence=" MOST POPULAR HOTELS "
            manualMode={false}
            blurAmount={3}
            borderColor="sky"
            animationDuration={2}
            pauseBetweenAnimations={1}
            borderSize={2}
          />
        </div>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg italic mt-2 sm:mt-3">
          Handpicked luxury stays for an unforgettable journey
        </p>
      </div>

      {/* Hotel List with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full px-4 sm:px-6 md:px-12"
      >
        {loading ? (
          <div className="text-center text-gray-500 animate-pulse">
            Fetching latest hotels...
          </div>
        ) : (
          <HotelList hotels={hotels} />
        )}
      </motion.div>
    </section>
  );
}
