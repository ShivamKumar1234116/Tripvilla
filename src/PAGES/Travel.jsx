import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FilterDes from "../components/TRAVELS/FilterDes";

export default function Travel() {
  return (
    <section className="flex flex-col justify-center items-center py-14 gap-16">
      {/* Hero Section */}
      <div
        className="relative w-[95%] lg:w-[90%] h-[350px] md:h-[450px] lg:h-[550px] bg-cover bg-center rounded-sm overflow-hidden shadow-2xl"
        style={{
          backgroundImage: "url('./src/assets/TRAVELIMG/trav3.png')",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* Content with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 flex flex-col justify-center items-center h-full"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
            Explore the World, One Trip at a Time
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
            Discover curated travel experiences, handpicked stays, and guides
            that make every journey unforgettable.
          </p>

          <Link
            to="/FilterDes"
            className="mt-8 px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            🌍 Explore Travel Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
