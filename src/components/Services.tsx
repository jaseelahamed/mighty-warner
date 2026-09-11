"use client";

import React, { useState } from 'react';

const services = [
  {
    id: 1,
    title: "Media",
    subtitle: "Relations",
    desc: "Orange PR takes charge of all media relations on behalf of our clients, enabling them to concentrate on their brand's daily requirements.",
    img: "/media.webp",
  },
  {
    id: 2,
    title: "Influencer",
    subtitle: "Management",
    img: "/influencer.webp",
  },
  {
    id: 3,
    title: "Events",
    subtitle: "",
    img: "/party.webp",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Helper to get exact sizes to maintain the stair-step layout
  const getCardClasses = (index: number) => {
    if (index === activeIndex) {
      // Active (Largest)
      return "lg:w-[26.4375rem] h-[400px] lg:h-[35.75rem]";
    }
    
    // Determine which of the two inactive sizes this card gets
    // First inactive card from left gets medium, second gets small
    const isFirstInactive = 
      (activeIndex === 0 && index === 1) || 
      (activeIndex === 1 && index === 0) || 
      (activeIndex === 2 && index === 0);

    if (isFirstInactive) {
      // Medium
      return "lg:w-[15.75rem] h-[300px] lg:h-[32.0625rem]";
    }
    
    // Small
    return "lg:w-[12.1875rem] h-[250px] lg:h-[27.5625rem]";
  };

  return (
    <section className="py-24 pl-6 md:pl-12 lg:pl-24 bg-white overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-[30%] shrink-0 flex flex-col justify-center">
          <h2 className="text-[1.875rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem] font-[family-name:var(--font-inter)] font-bold uppercase text-[#1a1a1a] leading-[1.2] tracking-tight">
            What We Do
            <br />
            Experts
          </h2>
          <p className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-[family-name:var(--font-inter)] font-medium text-[#466378] mt-4 lg:mt-6 leading-tight">
            We build brands.
          </p>
          
          <p className="font-sans text-[#1a1a1a] mt-12 mb-16 text-[1.125rem] leading-[1.8] max-w-[22rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
          
          <div className="flex items-center justify-between mt-auto w-full max-w-[22rem]">
            <button className="cursor-pointer bg-[#050505] text-white font-sans text-[13px] font-normal uppercase px-8 py-5 rounded-[5px] hover:bg-gray-800 transition-colors tracking-wider">
              Read More
            </button>
            <div className="text-[15px] font-sans font-bold tracking-widest flex items-center gap-1">
              {services.map((_, i) => (
                <React.Fragment key={i}>
                  <button 
                    onClick={() => setActiveIndex(i)}
                    className={`cursor-pointer transition-colors ${activeIndex === i ? 'text-[#050505]' : 'text-[#8B9DB0] font-normal hover:text-gray-700'}`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </button>
                  {i < services.length - 1 && <span className="text-[#8B9DB0] font-normal mx-1">/</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Expanding Cards Gallery */}
        <div className="w-full lg:w-[70%] flex flex-col lg:flex-row items-start justify-end gap-6 lg:h-[35.75rem]">
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className={`group relative rounded-[20px] overflow-hidden cursor-pointer transition-all duration-700 ease-out flex-shrink-0 w-full ${getCardClasses(index)}`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Frosted Glass Overlay at the bottom */}
                <div 
                  className={`absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent backdrop-blur-md pointer-events-none transition-all duration-700 ${isActive ? 'h-[60%] from-black/90 via-black/50' : 'h-[50%] from-black/80 via-black/30'}`}
                  style={{
                    maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)'
                  }}
                ></div>

                {/* Card Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex items-end justify-between z-10">
                  <div className="flex flex-col">
                    <h3
                      className={`font-sans font-semibold text-white leading-none transition-all duration-700 ${isActive ? "text-[2.5rem]" : "text-[1.75rem]"}`}
                    >
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <h4
                        className={`font-sans text-white mt-2 transition-all duration-700 ${isActive ? "text-[1.5rem] font-medium" : "text-[1.125rem] font-normal"}`}
                      >
                        {service.subtitle}
                      </h4>
                    )}
                    
                    {/* Description - only shown when active, faded in */}
                    <div className={`overflow-hidden transition-all duration-700 ${isActive ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                      <p className="text-white/80 text-[13px] max-w-[280px] leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Circular Arrow Button - only shown when active */}
                  <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-lg ml-4 cursor-pointer hover:bg-gray-100 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-50 absolute right-8'}`}>
                    <svg
                      className="w-5 h-5 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
