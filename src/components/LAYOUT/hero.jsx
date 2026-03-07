import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sentences = [
  "Discover Unique Stays & Dining",
  "Explore the Best Villas",
  "Taste the World’s Flavors",
  "Book Your Dream Getaway",
];

const colors = ["#ffffff", "#facc15", "#34d399", "#f472b6", "#60a5fa"];

// 🌄 Background Images
const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🌄 Animated Background Images */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index % images.length]})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* 🌈 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="text-4xl sm:text-6xl font-extrabold flex flex-wrap justify-center drop-shadow-xl"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ color: colors[colorIndex] }}
          >
            {sentences[index].split(" ").map((word, i) => (
              <motion.span key={i} variants={wordAnimation} className="mr-2">
                {word}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-white max-w-2xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Explore handpicked villas, cozy getaways, and delicious restaurants
          around the globe — all in one place.
        </motion.p>

        {/* 🔥 CTA Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-12 py-3 rounded-full bg-yellow-400 text-black font-extrabold shadow-lg"
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
