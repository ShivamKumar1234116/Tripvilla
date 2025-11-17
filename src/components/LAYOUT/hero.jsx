import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sentences = [
  "Discover Unique Stays & Dining",
  "Explore the Best Villas",
  "Taste the World’s Flavors",
  "Book Your Dream Getaway",
];

const colors = ["#ffffff", "#facc15", "#34d399", "#f472b6", "#60a5fa"];

// ✅ Direct playable .mp4 URLs from Pexels
const videos = [
  //"https://res.cloudinary.com/djcjheaun/video/upload/v1758738925/hvideo_uqyu0h.mp4",
  "https://www.pexels.com/download/video/34197946/",
  "https://cdn.pixabay.com/video/2021/09/11/88207-602915574_large.mp4"
  
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const paragraphAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 1.5 },
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

  const currentSentence = sentences[index];
  const currentColor = colors[colorIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🔥 Crossfade Background Videos */}
      <div className="absolute inset-0">
        {videos.map((vid, i) => (
          <motion.video
            key={i}
            src={vid}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-screen object-cover absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index % videos.length ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
      </div>

      {/* Overlay Content  bg-black/40*/}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Animated Sentence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="text-4xl sm:text-6xl font-bold drop-shadow-lg flex flex-wrap justify-center"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ color: currentColor }}
          >
            {currentSentence.split(" ").map((word, i) => (
              <motion.span key={i} variants={wordAnimation} className="mr-2">
                {word}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Static Paragraph */}
        <motion.p
          className="mt-4 text-lg sm:text-xl text-white max-w-2xl drop-shadow font-bold"
          variants={paragraphAnimation}
          initial="hidden"
          animate="visible"
        >
          Explore handpicked villas, cozy getaways, and delicious restaurants
          around the globe — all in one place.
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
