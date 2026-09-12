"use client";

import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLElement>(null);
  const headingText = "Why Choose Concept PR?";

  useGSAP(() => {
    gsap.from('.wave-letter', {
      scrollTrigger: {
        trigger: '.heading-container',
        start: 'top 85%',
        toggleActions: 'play none none reset',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'back.out(1.5)',
    });

    
    gsap.set('.cards-container', { perspective: 1200 });
    
    const cards = gsap.utils.toArray('.cards-container > div') as HTMLElement[];
    gsap.from(cards, {
      scrollTrigger: {
        trigger: '.cards-container',
        start: 'top 80%',
        toggleActions: 'play none none reset',
        onEnter: () => {
          cards.forEach(card => card.classList.remove('transition-transform', 'duration-300'));
        },
        onLeaveBack: () => {
          cards.forEach(card => card.classList.remove('transition-transform', 'duration-300'));
        }
      },
      rotationX: -60,
      y: 50,
      z: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      transformOrigin: 'top center -50',
      ease: 'power3.out',
      clearProps: 'all',
      onComplete: () => {
        cards.forEach(card => card.classList.add('transition-transform', 'duration-300'));
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 relative bg-white z-0">
     
      <div className="absolute top-12 left-4 right-4 md:left-12 md:right-12 lg:left-24 lg:right-24 h-[50%] bg-[#EFEFEF] rounded-t-[2rem] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-8 relative z-10 pt-4 ">
        <div className="heading-container text-center mb-8 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase tracking-tight text-[#1a1a1a] font-[family-name:var(--font-inter)] ">
            {headingText.split('').map((char, index) => (
              <span key={index} className="wave-letter inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
        </div>

        <div className="cards-container grid md:grid-cols-3 gap-6 lg:gap-8 pb-12">
        
          <div className="card-left bg-[#a3abb1] rounded-[20px] p-6 md:p-8 flex flex-col shadow-sm transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-between items-start mb-24 md:mb-32">
              <span className="text-6xl md:text-7xl font-bold text-white leading-none font-[family-name:var(--font-inter)]  font-semibold">
                01
              </span>
              <img
                src="/Mask.webp"
                alt="Market Entry"
                className="w-16 h-16 md:w-20 md:h-20  object-cover shadow-sm"
              />
            </div>
            <h3 className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.5rem]  font-[family-name:var(--font-inter)]  font-semibold  text-white uppercase tracking-wider mb-4 leading-snug">
              Market Entry
              <br />
              Expertise
            </h3>
            <p className="text-white/90 text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] font-normal leading-relaxed">
              We provide end-to-end PR and digital marketing solutions for
              businesses entering India.
            </p>
          </div>


          <div className="card-center bg-[#f28b71] rounded-[20px] p-6 md:p-8 flex flex-col shadow-sm transform md:translate-y-24 mt-6 md:mt-0 transition-transform duration-300 hover:md:translate-y-14 hover:-translate-y-2">
            <div className="flex justify-between items-start mb-24 md:mb-32">
              <span className="text-6xl md:text-7xl  text-white leading-none font-[family-name:var(--font-inter)]  font-semibold">
                02
              </span>
              <img
                src="/Media-img.webp"
                alt="Media Relationships"
                className="w-16 h-16 md:w-20 md:h-20  object-cover shadow-sm"
              />
            </div>
            <h3 className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.5rem] font-[family-name:var(--font-inter)]  font-semibold text-white uppercase tracking-wider mb-4 leading-snug">
              Strong Media
              <br />
              Relationships
            </h3>
            <p className="text-white/90 text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] font-normal leading-relaxed">
              Our network spans top Indian publications, ensuring maximum
              visibility for your brand.
            </p>
          </div>

       
          <div className="card-right bg-[#f7b287] rounded-[20px] p-6 md:p-8 flex flex-col shadow-sm mt-6 md:mt-0 transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-between items-start mb-24 md:mb-32">
              <span className="text-6xl md:text-7xl font-bold text-white leading-none font-[family-name:var(--font-inter)]  font-semibold">
                03
              </span>
              <img
                src="/Localized.webp"
                alt="Localized Storytelling"
                className="w-16 h-16 md:w-20 md:h-20  object-cover shadow-sm"
              />
            </div>
            <h3 className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] xl:text-[1.5rem] font-[family-name:var(--font-inter)]  font-semibold text-white uppercase tracking-wider mb-4 leading-snug">
              Localized
              <br />
              Storytelling
            </h3>
            <p className="text-white/90 text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] font-normal leading-relaxed">
              We tailor messaging to resonate with Indian consumers, investors,
              and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
