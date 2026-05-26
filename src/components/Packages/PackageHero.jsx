import React from "react";

function PackageHero() {
  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 lg:py-5 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          {/* Heading (slightly smaller like screenshot) */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-snug">
            <span className="text-orange-500">India Tour</span> Packages
          </h1>

          {/* Paragraph (compact like screenshot) */}
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5 max-w-3xl mx-auto md:mx-0">
            India, the world's 7th biggest country by area and one of the oldest
            civilizations, offers a wide range of experiences including nature,
            adventure, heritage, spirituality, and vibrant culture. Explore the
            best of India with carefully curated holiday packages.
             India, the world's 7th biggest country by area and one of the oldest
            civilizations, offers a wide range of experiences including nature,
            adventure, heritage, spirituality, and vibrant culture. Explore the
            best of India with carefully curated holiday packages.
          </p>

          {/* Button (same position, smaller text) */}
          <button className="inline-flex items-center gap-2 text-orange-500 font-semibold text-xs sm:text-sm hover:gap-3 transition-all">
            Know More <span>→</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">

          {/* Decorative Circle */}
          <div className="hidden sm:block absolute -top-3 -right-8 w-24 sm:w-28 lg:w-40 h-24 sm:h-28 lg:h-40 bg-orange-100 rounded-full">
             <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="India Tour"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Image (UNCHANGED) */}
          <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[460px] xl:h-[460px] rounded-e-full overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada"
              alt="India Tour"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dotted Decoration */}
          <div className="hidden lg:block absolute bottom-1 right-8 w-32 h-32 ">
             <img
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
              alt="India Tour"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackageHero;
