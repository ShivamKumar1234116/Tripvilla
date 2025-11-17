import React from 'react';
import Slider from 'react-slick';


import bali from '../../assets/Destinations/desti1.jpg';
import paris from '../../assets/Destinations/desti2.jpg';
import maldives from '../../assets/Destinations/desti3.jpg';
import switzerland from '../../assets/Destinations/desti4.webp';
import dubai from '../../assets/Destinations/desti6.avif';
import london from '../../assets/Destinations/desti2.jpg';
import goa from '../../assets/Destinations/desti1.jpg';
import tokyo from '../../assets/Destinations/desti2.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrendingDestinations() {
  const destinations = [
    { label: "Goa", img: bali },
    { label: "TajMahal", img: paris },
    { label: "India Gate", img: maldives },
    { label: "Nainital", img: switzerland },
    { label: "Kashmir", img: dubai },
    { label: "TajMahal", img: london },
    { label: "Goa", img: goa },
    { label: "Tokyo", img: tokyo },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="w-full pt-10">
      {/* Heading */}
      <h2 className="flex justify-center text-center mt-5 font-bold text-4xl md:text-5xl text-purple-600">
        <AnimatedHeading />
      </h2>

      {/* Slider */}
      <div className="py-10 px-4">
        <Slider {...settings}>
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="px-2 group transition-transform duration-300 ease-in-out hover:scale-105 pt-6 "
            >
              <div className="flex flex-col items-center space-y-2 gap-2">
                <div className="border-2 border-sky-200 rounded-full overflow-hidden w-35 h-35 sm:w-32 sm:h-32 md:h-57 md:w-57 flex items-center justify-center shadow-md">
                  <img
                    src={destination.img}
                    alt={destination.label}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm text-center font-medium text-gray-800">
                  {destination.label}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TrendingDestinations;
