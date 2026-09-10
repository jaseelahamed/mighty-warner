"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "top-0 bg-white shadow-md" : "top-[1.5rem] bg-transparent"
      }`}
    >
      <nav className={`cmpad flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
        <div className={`font-[family-name:var(--font-inter)] font-black uppercase leading-none tracking-normal text-[1.3rem] min-[400px]:text-[1.5rem] sm:text-[1.9rem] md:text-[2.35rem] lg:text-[2.65rem] xl:text-[3rem] transition-all duration-300 origin-left ${isScrolled ? "text-orange-500 scale-[0.85]" : "text-white scale-100"}`}>
          ORANGE PR
        </div>
        
        <div className={`hidden lg:flex items-center space-x-10 font-[family-name:var(--font-inter)] font-semibold uppercase leading-none tracking-normal text-[0.625rem] min-[400px]:text-[0.6875rem] sm:text-[0.75rem] md:text-[0.8125rem] lg:text-[0.875rem] xl:text-[0.9375rem] transition-colors ${isScrolled ? "text-gray-600" : "text-white/90"}`}>
          <a href="#" className={`relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full transition-colors ${isScrolled ? "hover:text-orange-500 after:bg-orange-500" : "hover:text-white after:bg-white"}`}>HOME</a>
          <a href="#" className={`relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full transition-colors ${isScrolled ? "hover:text-orange-500 after:bg-orange-500" : "hover:text-white after:bg-white"}`}>PR SERVICES</a>
          <a href="#" className={`relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full transition-colors ${isScrolled ? "hover:text-orange-500 after:bg-orange-500" : "hover:text-white after:bg-white"}`}>ABOUT US</a>
          <a href="#" className={`relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full transition-colors ${isScrolled ? "hover:text-orange-500 after:bg-orange-500" : "hover:text-white after:bg-white"}`}>CONTACT</a>
          <button className={`transition-all cursor-pointer  duration-300 hover:scale-105 ${isScrolled ? "brightness-0" : ""}`}>
            <img src="/nav-bottun.svg" alt="Menu" className={`object-contain transition-all duration-300 ${isScrolled ? "w-[35px] h-[35px]" : "w-[45px] h-[45px]"}`} />
          </button>
        </div>
 
        <div className="lg:hidden">
          <button className={`p-2 transition-colors  ${isScrolled ? "text-gray-900" : "text-white"}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
