"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const paragraphText = "Orange PR is Dubai's leading communication company, specializing in cultural, lifestyle, fashion and art. Our agency was founded on a culture of smart strategic thinking, creativity, and innovation that delivers successful solutions to our local, national, and international customer base. Our ability to create and execute dynamic, forward-thinking PR campaigns quickly, while maintaining quality, increasing visibility, and achieving the targeted objectives or aims, is the key to our success. By offering a full turn-key solution, companies partner with us because of our unique approach, which allows us to build a solid connection with you and your brand. Therefore plan, execute, and evaluate effective cross-media and cross-cultural campaigns.";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
 
    gsap.from('.orang-letter', {
      scrollTrigger: {
        trigger: '.orang-bg-text-container',
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
      x: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'back.out(1.5)',
    });


    gsap.from('.heading-row', {
      scrollTrigger: {
        trigger: '.heading-container',
        start: 'top 85%',
        toggleActions: 'play reverse play reverse',
      },
      rotationX: -90,
      y: 40,
      opacity: 0,
      transformOrigin: "50% 100% -50",
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

   
    gsap.fromTo('.image-container', 
      { clipPath: 'inset(100% 0% 0% 0%)' },
      { 
        clipPath: 'inset(0% 0% 0% 0%)',
        ease: 'none',
        scrollTrigger: {
          trigger: '.image-wrapper',
          start: 'top 90%',
          end: 'top 30%',
          scrub: 1,
        }
      }
    );
    gsap.fromTo('.bento-image',
      { scale: 1.3, y: 50 },
      {
        scale: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.image-wrapper',
          start: 'top 90%',
          end: 'top 30%',
          scrub: 1,
        }
      }
    );

    
    gsap.from('.paragraph-word', {
      scrollTrigger: {
        trigger: '.paragraph-container',
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
      y: "120%",
      opacity: 0,
      duration: 0.6,
      stagger: 0.015,
      ease: 'power2.out',
    });

 
    gsap.from('.read-more-btn', {
      scrollTrigger: {
        trigger: '.read-more-btn',
        start: 'top 90%',
        toggleActions: 'play reverse play reverse',
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'power2.out',
    });

   

    const statNumbers = gsap.utils.toArray('.stat-number') as HTMLElement[];
    statNumbers.forEach((box) => {
      const target = parseFloat(box.getAttribute('data-target') || '0');
      gsap.to(box, {
        textContent: target,
        duration: 4,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: '.stats-container',
          start: "top 85%",
          toggleActions: 'play reverse play reverse',
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pt-24 pb-0 mx-auto relative overflow-hidden bg-white">

      <div className="orang-bg-text-container absolute top-0 right-0 pointer-events-none z-0 overflow-hidden flex justify-end w-full">
        <span className="text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[16rem] font-black text-gray-50 leading-none tracking-tighter select-none -mt-4 -mr-4 flex">
          {"ORANG".split("").map((char, i) => (
            <span key={i} className="orang-letter inline-block">{char}</span>
          ))}
        </span>
      </div>

      <div className="absolute left-0 top-1/4 pointer-events-none z-0 hidden lg:block">
        <img src="/about-bg.svg" alt="" className="w-42" />
      </div>

      <div className="px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto relative z-10">
        <div className="heading-container mb-16">
          <h2 className="text-[2rem] min-[450px]:text-[3rem] sm:text-[3.25rem] md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4rem] font-bold text-gray-900 leading-[1.1] tracking-tight">
            <div className="overflow-hidden" style={{ perspective: '1000px' }}>
              <div className="heading-row inline-block origin-bottom">Think. Create.</div>
            </div>
            <div className="overflow-hidden" style={{ perspective: '1000px' }}>
              <div className="heading-row inline-block origin-bottom">Promote.</div>
            </div>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
          <div className="image-wrapper md:col-span-4 md:col-start-2 relative flex justify-center md:block">
            <div className="image-container overflow-hidden w-full max-w-[23.6875rem] mx-auto md:mx-0">
              <img 
                src="/about-profile.webp" 
                alt="Orange PR Profile" 
                className="bento-image w-full object-cover" 
                style={{ aspectRatio: "379/468" }}
              />
            </div>
          </div>
          <div className="md:col-span-7 max-w-2xl flex flex-col justify-between items-start">
            <p className="paragraph-container text-gray-800 text-[1.125rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.125rem] xl:text-[1.125rem] leading-[1.8] font-medium">
              {paragraphText.split(' ').map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <span className="paragraph-word inline-block">{word}&nbsp;</span>
                </span>
              ))}
            </p>
            <div>
              <button className="cursor-pointer read-more-btn bg-black text-white font-sans text-[16px] font-medium uppercase rounded-[5px] px-12 py-5 hover:bg-gray-800 transition-colors tracking-wide mt-8">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-container mt-22 border-y border-gray-100 bg-white relative z-10">
        <div className="w-full lg:w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row border-l-0 lg:border-l border-gray-100">

          <div className="stat-box flex items-center justify-start sm:justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 border-b border-gray-100 border-r-0 sm:border-r lg:border-r">
            <div className="w-16 h-16 bg-[#DEE4E6] rounded-[10px] flex items-center justify-center mr-6 shrink-0 text-[#475569]">
              <img src="/ix_customer.svg" alt="Customers" className="w-10 h-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-normal text-[#466378] mb-1 leading-none tracking-normal text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.25rem]">Our Clients</span>
              <span className="stat-number font-sans font-medium uppercase tabular-nums tracking-normal text-gray-900 leading-none text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.5rem]" data-target="208">0</span>
            </div>
          </div>
     
          <div className="stat-box flex items-center justify-start sm:justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 border-b border-gray-100 border-r-0 sm:border-r-0 lg:border-r">
            <div className="w-16 h-16 bg-[#DEE4E6] rounded-[10px] flex items-center justify-center mr-6 shrink-0 text-[#475569]">
              <img src="/event.svg" alt="Customers" className="w-10 h-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-normal text-[#466378] mb-1 leading-none tracking-normal text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.25rem]">Events</span>
              <span className="stat-number font-sans font-medium uppercase tabular-nums tracking-normal text-gray-900 leading-none text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.5rem]" data-target="355">0</span>
            </div>
          </div>
   
          <div className="stat-box flex items-center justify-start sm:justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 border-b sm:border-b-0 border-gray-100 border-r-0 sm:border-r lg:border-r">
            <div className="w-16 h-16 bg-[#DEE4E6] rounded-[10px] flex items-center justify-center mr-6 shrink-0 text-[#475569]">
              <img src="/streamline.svg" alt="Customers" className="w-10 h-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-normal text-[#466378] mb-1 leading-none tracking-normal text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.25rem]">Years of Experience</span>
              <span className="stat-number font-sans font-medium uppercase tabular-nums tracking-normal text-gray-900 leading-none text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.5rem]" data-target="10">0</span>
            </div>
          </div>
         
          <div className="stat-box flex items-center justify-start sm:justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 border-gray-100 border-r-0 lg:border-r">
            <div className="w-16 h-16 bg-[#DEE4E6] rounded-[10px] flex items-center justify-center mr-6 shrink-0 text-[#475569]">
              <img src="/carbon.svg" alt="Customers" className="w-10 h-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-normal text-[#466378] mb-1 leading-none tracking-normal text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.25rem]">Materials</span>
              <span className="stat-number font-sans font-medium uppercase tabular-nums tracking-normal text-gray-900 leading-none text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.5rem]" data-target="15049">0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
