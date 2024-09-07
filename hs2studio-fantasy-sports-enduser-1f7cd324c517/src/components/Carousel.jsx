import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = ({
  slides,
  slideDesc,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <div className="overflow-hidden relative w-full h-[90vh]">
      <div
        className="block transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
          whiteSpace: "nowrap",
        }}
      >
        {slides.map((slide, index) => (
          // <div className="h-full bg-green-300">
          <img
            key={index}
            src={slide}
            className="h-[100vh] w-full inline-block object-cover object-top"
          />
        ))}
      </div>
      <div className="bg-violet-950 bg-opacity-50 px-2 absolute bottom-[40px] w-full text-center font-bold text-4xl font-caveat text-white">
        {slideDesc[curr]}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaAngleRight />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${
                curr === i ? "p-0.5" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
