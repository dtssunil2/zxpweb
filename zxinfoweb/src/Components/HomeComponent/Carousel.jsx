import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Typed from "react-typed";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition ease-out duration-400"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <img 
              src={slide.img} 
              alt={slide.text} 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl text-center p-4 bg-black bg-opacity-50 text-white">
                {/* <Typed strings={[slide.text]} typeSpeed={100} loop={true} /> */}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-between items-center px-4">
        <button 
          onClick={previousSlide}
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="Previous slide"
        >
          <BsFillArrowLeftCircleFill className="w-8 h-8 md:w-10 md:h-10" />
        </button>
        <button 
          onClick={nextSlide}
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="Next slide"
        >
          <BsFillArrowRightCircleFill className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={`circle-${i}`}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            } transition-colors`}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;