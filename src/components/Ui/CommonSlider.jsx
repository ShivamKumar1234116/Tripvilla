import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* LEFT ARROW */
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-20
               bg-white shadow-xl rounded-full p-3
               hover:bg-orange-500 hover:text-white transition"
  >
    <ChevronLeft size={24} />
  </button>
);

/* RIGHT ARROW */
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-20
               bg-white shadow-xl rounded-full p-3
               hover:bg-orange-500 hover:text-white transition"
  >
    <ChevronRight size={24} />
  </button>
);

function CommonSlider({ children, slidesToShow = 3 }) {
  const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerPadding: "40px",
    slidesToShow,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default CommonSlider;
