import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TrueFocus from "../components/Ui/TrueFocus";
import RestaurantList from '../components/RESTAURANTS/RestaurantList';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/restaurant/all");
      const data = response.data.data;
      setRestaurants(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center py-14 gap-16">
      {/* Hero Section */}
      <div
        className="relative w-[95%] lg:w-[90%] h-[350px] md:h-[450px] lg:h-[550px] bg-cover bg-center rounded-sm overflow-hidden shadow-2xl"
        style={{
          backgroundImage: "url('./src/assets/restaurantsimage/restchat.png')",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 flex flex-col justify-center items-center h-full"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
            Good Food, Great Memories
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
            Share delicious meals and create unforgettable moments with your
            loved ones in a warm, cozy setting.
          </p>

          <Link
            to="/RestaurantFilter"
            className="mt-8 px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
             Explore Restaurants
          </Link>
        </motion.div>
      </div>

      {/* Section Heading with TrueFocus */}
      <div className="text-center text-purple-600">
        <div className="inline-block">
          <TrueFocus
            sentence=" MOST POPULAR RESTAURANTS "
            manualMode={false}
            blurAmount={3}
            borderColor="sky"
            animationDuration={2}
            pauseBetweenAnimations={1}
            borderSize={2}
          />
        </div>
        <p className="text-gray-600 text-lg italic mt-3">
          Discover the finest flavors and dining experiences loved by foodies
          everywhere
        </p>
      </div>

      {/* Restaurant List with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full px-6 md:px-12"
      >
        {loading ? (
          <div className="text-center text-gray-500 animate-pulse">
            Fetching delicious places...
          </div>
        ) : (
          <RestaurantList data={restaurants} />
        )}
      </motion.div>
    </section>
  );
}
