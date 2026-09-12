"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

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

  // GSAP Animation for Mobile Menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Slide menu in
      gsap.to(menuRef.current, {
        x: "0%",
        duration: 0.7,
        ease: "power4.out"
      });
      
      // Stagger links in
      gsap.fromTo(linksRef.current, 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3, ease: "power3.out" }
      );
    } else {
      // Slide menu out
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut"
      });
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header 
        className={`fixed left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "top-0 bg-white shadow-md" : "top-0 md:top-[1.5rem] bg-transparent"
        }`}
      >
        <nav className={`cmpad flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
          <div className={`font-[family-name:var(--font-inter)] font-black uppercase leading-none tracking-normal text-[1.3rem] min-[400px]:text-[1.5rem] sm:text-[1.9rem] md:text-[2.35rem] lg:text-[2.65rem] xl:text-[3rem] transition-all duration-300 origin-left ${isScrolled ? "text-orange-500 scale-[0.85]" : "text-white scale-100"}`}>
            ORANGE PR
          </div>
          
          <div className={`hidden lg:flex items-center space-x-10 font-[family-name:var(--font-inter)] font-semibold uppercase leading-none tracking-normal text-[0.625rem] min-[400px]:text-[0.6875rem] sm:text-[0.75rem] md:text-[0.8125rem] lg:text-[0.875rem] xl:text-[0.9375rem] transition-colors ${isScrolled ? "text-gray-600" : "text-white/90"}`}>
            <a href="#home" className={`relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full transition-colors ${isScrolled ? "hover:text-orange-500 after:bg-orange-500" : "hover:text-white after:bg-white"}`}>HOME</a>
            <a href="#services" className={`relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full transition-colors ${isScrolled ? "hover:text-orange-500 after:bg-orange-500" : "hover:text-white after:bg-white"}`}>PR SERVICES</a>
            <a href="#about" className={`relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full transition-colors ${isScrolled ? "hover:text-orange-500 after:bg-orange-500" : "hover:text-white after:bg-white"}`}>ABOUT US</a>
            <a href="#contact" className={`relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full transition-colors ${isScrolled ? "hover:text-orange-500 after:bg-orange-500" : "hover:text-white after:bg-white"}`}>CONTACT</a>
            <button className={`transition-all cursor-pointer  duration-300 hover:scale-105 ${isScrolled ? "brightness-0" : ""}`}>
              <img src="/nav-bottun.svg" alt="Menu" className={`object-contain transition-all duration-300 ${isScrolled ? "w-[35px] h-[35px]" : "w-[45px] h-[45px]"}`} />
            </button>
          </div>
  
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 transition-colors ${isScrolled ? "text-orange-500" : "text-white"}`}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Modern Full-Screen Mobile Menu */}
      <div 
        ref={menuRef}
        className="fixed inset-0 w-full h-full bg-orange-500 z-[70] flex flex-col justify-center items-center translate-x-full lg:hidden"
      >
        {/* Close Button */}
        <button 
          onClick={closeMenu}
          className="absolute top-6 right-6 p-4 text-white hover:text-black transition-colors z-[80]"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Decorative Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none overflow-hidden">
          <span className="text-[15rem] font-black font-[family-name:var(--font-inter)] text-black whitespace-nowrap transform -rotate-12">ORANGE PR</span>
        </div>

        {/* Links Container */}
        <div className="flex flex-col items-center space-y-10 font-[family-name:var(--font-inter)] font-black uppercase text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] text-white relative z-10 w-full px-8">
          {[
            { name: "HOME", href: "#home" },
            { name: "PR SERVICES", href: "#services" },
            { name: "ABOUT US", href: "#about" },
            { name: "CONTACT", href: "#contact" },
          ].map((link, i) => (
            <a 
              key={link.name}
              href={link.href} 
              ref={(el) => { linksRef.current[i] = el; }}
              onClick={closeMenu}
              className="relative group overflow-hidden"
            >
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">{link.name}</span>
              <span className="absolute inset-0 text-black block transition-transform duration-500 translate-y-full group-hover:translate-y-0">{link.name}</span>
            </a>
          ))}
        </div>
        
        {/* Footer info in menu */}
        <div className="absolute bottom-10 left-0 w-full text-center text-white/70 text-sm tracking-widest uppercase font-[family-name:var(--font-inter)]">
          <p>Dubai's Leading PR Agency</p>
        </div>
      </div>
    </>
  );
}
