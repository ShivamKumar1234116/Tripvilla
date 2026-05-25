import React from "react";
import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <div className="w-full p-6 md:p-12 mt-5 bg-gradient-to-tr from-indigo-50 via-pink-30 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto p-6 mb-10 text-center"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500 mb-4">
          🏡 About TripVilla – Your Journey, Our Priority
        </h1>
        <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed max-w-6xl mx-auto">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">TripVilla</span>, your
          trusted travel companion in discovering unique destinations and
          unforgettable stays. We believe travel isn’t just about places — it’s
          about{" "}
          <span className="text-blue-500 font-semibold">
            experiences, comfort, and memories
          </span>{" "}
          that last a lifetime.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            icon: "🏡",
            title: "Browse & Book Unique Stays",
            text: "Handpicked villas, cottages, and vacation homes tailored for every traveler.",
          },
          {
            icon: "📅",
            title: "Real-Time Availability",
            text: "View live updates and book instantly with zero delays.",
          },
          {
            icon: "🌐",
            title: "User Dashboard",
            text: "Track bookings, manage saved listings, and upcoming trips.",
          },
          {
            icon: "💬",
            title: "24/7 Support",
            text: "Our team is always ready to help before, during, and after your trip.",
          },
          {
            icon: "🧳",
            title: "Host Portal",
            text: "Hosts can easily manage listings, set availability, and track earnings.",
          },
          {
            icon: "🔐",
            title: "Secure Payments",
            text: "Enjoy fast and protected transactions with multiple payment options.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl shadow-md text-center bg-gradient-to-tr from-indigo-50 via-pink-50 to-purple-50 border border-gray-100 transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-purple-500">
              {card.icon} {card.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-500 mb-8 tracking-wide">
          Why Thousands Love TripVilla
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: "🏠",
              title: "Handpicked Properties",
              text: "Each property is verified for top quality, comfort, and cleanliness.",
            },
            {
              icon: "📍",
              title: "Prime Locations",
              text: "Stay at the best spots: beaches, mountains, or city centers.",
            },
            {
              icon: "🌍",
              title: "Trusted by Thousands",
              text: "Join a growing community of happy travelers worldwide.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-md  border border-gray-100 bg-gradient-to-tr from-indigo-50 via-pink-50 to-purple-50
                         transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-purple-500">
                {card.icon} {card.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default Aboutus;
