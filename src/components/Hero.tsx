"use client";
import React, { useState } from "react";

const thumbnails = [
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516280440502-3c66f57e62a1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1533174000255-a681c15f4039?auto=format&fit=crop&w=800&q=80"
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % thumbnails.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + thumbnails.length) % thumbnails.length);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col">
   
      <div className="absolute inset-0 " />
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-orange-200" /> */}
      <div 
        className=" hero-bg" 
      />




      <div className="relative z-10 flex-grow flex flex-col justify-end pt-20">
        <div className="cmpad pb-8 flex justify-between items-end w-full">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-inter)] text-white leading-[0.95] tracking-normal uppercase flex flex-col">
              <span className="font-light text-[2.5rem] min-[400px]:text-[3rem] sm:text-[4rem] md:text-[4.75rem] lg:text-[5.75rem] xl:text-[6.25rem] lg:pl-[8rem] md:pl-[4rem] pl-0">FRESH</span>
              <span className="font-semibold text-[2.5rem] min-[400px]:text-[3rem] sm:text-[4rem] md:text-[4.75rem] lg:text-[5.75rem] xl:text-[6.25rem] lg:pl-[6rem] md:pl-[2rem] pl-0">JUICY</span>
              <span className="font-black text-[2.5rem] min-[400px]:text-[3rem] sm:text-[4rem] md:text-[4.75rem] lg:text-[5.75rem] xl:text-[6.25rem] lg:pl-[8rem] md:pl-[4rem] pl-0">BRIGHT</span>
            </h1>
            <p className="mt-8 text-white/90 max-w-[550px] font-normal leading-none lg:pl-[8rem] md:pl-[4rem] pl-0 text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.0625rem] xl:text-[1.125rem]">
              Streamlining Media Relations for Brands. Orange PR manages media relations,
              freeing clients to focus on daily operations, while ensuring campaign initiatives
              are constantly monitored and updated for success.
            </p>
          </div>


          <div className="hidden lg:block bg-white/10 p-2 rounded-[14px] border border-white mb-2 backdrop-blur-sm shadow-2xl">
            <div className="relative w-[14.5rem] h-[11rem] xl:w-[17rem] xl:h-[13rem] 2xl:w-[19.25rem] 2xl:h-[14.65rem] bg-gray-200 rounded-[10px] overflow-hidden group cursor-pointer">
              <img src={thumbnails[activeIndex]} alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/10 transition-colors duration-500">
                <div className="w-14 h-14 xl:w-16 xl:h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center pl-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 xl:w-6 xl:h-6 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4l12 6-12 6z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

   
        <div className="w-full border-t border-white/30">
          <div className="cmpad flex flex-wrap gap-6 items-center justify-between py-6">
            <button className="px-10 py-3.5 bg-white text-gray-900 font-bold text-[0.8rem] tracking-widest uppercase hover:bg-gray-100 transition-colors rounded-sm">
              EXPLORE
            </button>

            {/* Carousel Controls */}
            <div className="flex items-center space-x-6 border border-white/50 rounded-full px-8 py-3 text-white">
              <button type="button" onClick={prevSlide} className="hover:opacity-70 transition-opacity cursor-pointer">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              
              <div className="flex items-center space-x-2">
                {thumbnails.map((_, index) => (
                  <div 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="w-[34px] h-[34px] flex items-center justify-center cursor-pointer"
                  >
                    <div 
                      className={`flex items-center justify-center transition-all duration-300 ${
                        index === activeIndex 
                          ? "w-[34px] h-[34px] rounded-full border border-white" 
                          : "w-3.5 h-3.5 bg-white rounded-full hover:opacity-70"
                      }`}
                    >
                      {index === activeIndex && (
                        <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button type="button" onClick={nextSlide} className="hover:opacity-70 transition-opacity cursor-pointer">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
