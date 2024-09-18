"use client";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="h-[50vh] xl:h-[80vh] overflow-hidden bg-[url('/local/hero-1.jpg')] relative bg-cover bg-center bg-no-repeat">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000af] to-[#0000007e] z-0"></div>

      {/* Text Container */}
      <div className="relative z-10 text-white flex justify-center items-center h-full flex-col">
        <h1 className="text-4xl xl:text-8xl text-center font-extrabold">
          Island Ways Tours
        </h1>
        <p className="text-lg xl:text-xl my-4 text-center">
          We offer the best Jamaica tours and airport transfers at the most
          affordable prices
        </p>

        {/* Book Now Button */}
        <button
          onClick={() => {
            const searchElement = document.getElementById("search-input");

            searchElement.focus();
          }}
          className="bg-[#ff6b6b] hover:bg-[#ff4d4d] text-white font-bold py-3 px-6 w-1/2 lg:w-1/4 mx-auto rounded-full shadow-lg transition-all duration-300 mt-6"
        >
          Book Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
