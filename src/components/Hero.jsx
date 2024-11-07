import React from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Autoplay, Parallax } from "swiper";

import slide1 from "../assets/kuka1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

SwiperCore.use([Pagination, Autoplay, Parallax]);

const Hero = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    parallax: true,
    speed: 1000,
  };

  const slides = [
    {
      id: 1,
      title: "Work together.",
      description: "",
      image: slide1,
    },
    {
      id: 2,
      title: "Create smart machines.",
      description: "",
      image:
        slide2,
    },
    {
      id: 3,
      title: "Serve Society.",
      description: "",
      image:
        slide3,
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Added pb-16 for bottom padding */}
      <Swiper {...params}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="swiper-slide relative w-full h-screen overflow-hidden"
            data-swiper-parallax="-300"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-0 pointer-events-none"></div>

            <img
              src={slide.image}
              alt={slide.title}
              className="w-full object-cover object-center"
            />
            <div
              className="absolute inset-0 flex items-center justify-center z-10 text-white text-center"
              data-swiper-parallax="-100"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                data-swiper-parallax="-200"
              >
                {slide.title}
              </h2>
              <p
                className="text-base md:text-lg lg:text-xl mt-4"
                data-swiper-parallax="-150"
              >
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Swiper>
      {/* Pagination positioned at the bottom, centered */}
      <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"></div>
    </div>
  );
};

export default Hero;
