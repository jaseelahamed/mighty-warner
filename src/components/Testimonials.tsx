"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    id: "01",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "James Andrews",
    title: "CEO and Founder of the Company",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "02",
    text: "Orange PR revolutionized our brand's presence. Their strategic insights and flawless execution resulted in unprecedented media coverage. They truly understand how to connect with an audience.",
    name: "Sarah Jenkins",
    title: "CMO, TechNova",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "03",
    text: "Working with this team has been a game-changer for our public relations. We've seen a 300% increase in brand mentions across all major industry publications within just six months.",
    name: "Michael Chen",
    title: "Director of Communications, GlobalEdge",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];


const archColumns = [
  { items: [{ type: "gray", h: "h-[80px]", mt: "mt-0" }, { type: "img", src: "https://randomuser.me/api/portraits/men/22.jpg", h: "h-[156px]", mt: "mt-2" }, { type: "img", src: "https://randomuser.me/api/portraits/women/44.jpg", h: "h-[156px]", mt: "mt-2" }] },
  { items: [{ type: "gray", h: "h-[40px]", mt: "mt-0" }, { type: "img", src: "https://randomuser.me/api/portraits/men/32.jpg", h: "h-[156px]", mt: "mt-2" }, { type: "img", src: "https://randomuser.me/api/portraits/men/46.jpg", h: "h-[156px]", mt: "mt-2" }] },
  { items: [{ type: "gray", h: "h-[80px]", mt: "mt-0" }, { type: "img", src: "https://randomuser.me/api/portraits/men/84.jpg", h: "h-[156px]", mt: "mt-2" }] },
  { items: [{ type: "gray", h: "h-[40px]", mt: "mt-0" }, { type: "img", src: "https://randomuser.me/api/portraits/men/62.jpg", h: "h-[156px]", mt: "mt-2" }] },
  { items: [{ type: "gray", h: "h-[80px]", mt: "mt-0" }, { type: "img", src: "https://randomuser.me/api/portraits/men/91.jpg", h: "h-[156px]", mt: "mt-2" }] },
  { items: [{ type: "gray", h: "h-[40px]", mt: "mt-0" }, { type: "img", src: "https://randomuser.me/api/portraits/women/12.jpg", h: "h-[156px]", mt: "mt-2" }] },
  { items: [{ type: "gray", h: "h-[80px]", mt: "mt-0" }, { type: "img", src: "https://randomuser.me/api/portraits/women/33.jpg", h: "h-[156px]", mt: "mt-2" }] },
  { items: [{ type: "gray", h: "h-[40px]", mt: "mt-0" }, { type: "img", src: "https://randomuser.me/api/portraits/men/33.jpg", h: "h-[156px]", mt: "mt-2" }, { type: "img", src: "https://randomuser.me/api/portraits/men/29.jpg", h: "h-[156px]", mt: "mt-2" }] },
  { items: [{ type: "gray", h: "h-[80px]", mt: "mt-0" }, { type: "img", src: "https://randomuser.me/api/portraits/women/68.jpg", h: "h-[156px]", mt: "mt-2" }, { type: "img", src: "https://randomuser.me/api/portraits/women/44.jpg", h: "h-[156px]", mt: "mt-2" }] },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [archImages, setArchImages] = useState([
    "https://randomuser.me/api/portraits/men/22.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/46.jpg",
    "https://randomuser.me/api/portraits/men/84.jpg",
    "https://randomuser.me/api/portraits/men/62.jpg",
    "https://randomuser.me/api/portraits/men/91.jpg",
    "https://randomuser.me/api/portraits/women/12.jpg",
    "https://randomuser.me/api/portraits/women/33.jpg",
    "https://randomuser.me/api/portraits/men/33.jpg",
    "https://randomuser.me/api/portraits/men/29.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg"
  ]);

  const [isAnimating, setIsAnimating] = useState(false);
  const { contextSafe } = useGSAP({ scope: containerRef });

  useGSAP(() => {
    gsap.from('.flip-inner', {
      scrollTrigger: {
        trigger: '.arch-container',
        start: 'top 75%',
        toggleActions: 'play none none reset',
      },
      rotationY: -180,
      opacity: 0,
      duration: 1.2,
      stagger: {
        each: 0.1,
        from: 'random'
      },
      ease: 'back.out(1.2)',
      clearProps: 'all'
    });
  }, { scope: containerRef });

  const changeSlide = contextSafe((direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tlOut = gsap.timeline({
      onComplete: () => {
        setActiveIndex((prev) => {
          if (direction === 'next') {
            return prev === testimonialsData.length - 1 ? 0 : prev + 1;
          } else {
            return prev === 0 ? testimonialsData.length - 1 : prev - 1;
          }
        });
        
        setArchImages(prev => {
          if (direction === 'next') {
            return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
          } else {
            return [...prev.slice(1), prev[0]];
          }
        });

        setTimeout(() => {
          gsap.set('.avatar-wrapper', { y: 60, opacity: 0 });
          gsap.set('.avatar-image', { opacity: 0 }); 
          gsap.set('.testimonial-content', { opacity: 0, y: 20 });
          
          gsap.set('.arch-img', { y: '-100%', opacity: 0 });
          
          const tlIn = gsap.timeline({
            onComplete: () => setIsAnimating(false)
          });
          
          tlIn.to('.arch-img', {
            y: '0%',
            opacity: 1,
            duration: 0.6,
            stagger: {
              each: 0.05,
              from: 'random'
            },
            ease: 'back.out(1.2)'
          }, 0);
          
          tlIn.to('.avatar-wrapper', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out'
          }, 0);
          
          tlIn.to('.avatar-image', {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.inOut'
          }, "+=0.1");
          
          tlIn.to('.testimonial-content', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
          }, "<0.1");
        }, 50);
      }
    });

    tlOut.to('.avatar-wrapper, .testimonial-content', {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.1,
      ease: 'power2.in'
    }, 0);
    
    tlOut.to('.arch-img', {
      y: '100%',
      opacity: 0,
      duration: 0.4,
      stagger: {
        each: 0.02,
        from: 'end'
      },
      ease: 'power2.in'
    }, 0);
  });

  const handlePrev = () => changeSlide('prev');
  const handleNext = () => changeSlide('next');

  let globalImgIndex = 0;

  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <section ref={containerRef} className="py-12 px-8 md:px-16 lg:px-32 bg-white relative overflow-hidden flex flex-col items-center">
      
      <div className="arch-container w-full max-w-[1400px] relative mb-10 hidden md:block">
        <div className="flex justify-center items-start gap-2">
          {archColumns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col w-[105px]">
              {col.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className={`w-full ${item.h} ${item.mt || ''} ${itemIdx === 0 ? 'rounded-b-[1rem]' : 'rounded-[1rem]'} shadow-sm transition-transform hover:scale-105 duration-300 bg-[#EFEFEF] overflow-hidden`}
                  style={{
                    ...(item.clip ? { clipPath: item.clip } : {}),
                    perspective: '1000px'
                  }}
                >
                  {item.type === 'img' && (
                    <div className="flip-inner w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
                      <img src={archImages[globalImgIndex++ % archImages.length]} alt="Portrait" className="arch-img absolute inset-0 w-full h-full object-cover" style={{ backfaceVisibility: 'hidden' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="absolute inset-x-0 bottom-0 translate-y-1 flex justify-center z-10 pointer-events-none">
           <h2 className="md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-semibold leading-none tracking-normal uppercase text-[#1a1a1a] font-[family-name:var(--font-inter)] z-10 px-10 py-3 rounded-3xl">
             TESTIMONIALS
           </h2>
        </div>
      </div>
      
      <h2 className="text-[1.5rem] sm:text-[2rem] md:hidden font-semibold leading-none tracking-normal uppercase text-[#1a1a1a] font-[family-name:var(--font-inter)] mb-10">
        TESTIMONIALS
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mt-6">
        
        <div className="avatar-wrapper w-20 h-20 md:w-24 md:h-24 rounded-full mb-8 border-4 border-white shadow-lg overflow-hidden bg-[#EFEFEF]">
          <img 
            src={currentTestimonial.avatar} 
            alt={currentTestimonial.name} 
            className="avatar-image w-full h-full object-cover"
          />
        </div>

        <div className="testimonial-content flex flex-col items-center">
          <p className="text-base md:text-[1.125rem] text-[#333333] font-medium leading-relaxed font-[family-name:var(--font-inter)] max-w-3xl  min-h-[120px]">
            {currentTestimonial.text}
          </p>

          <div className="mb-8">
            <h4 className="font-bold text-[#1a1a1a] font-[family-name:var(--font-inter)] text-lg mb-1">{currentTestimonial.name}</h4>
            <p className="text-[#666666] text-sm font-[family-name:var(--font-inter)]">{currentTestimonial.title}</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-[#666666] font-[family-name:var(--font-inter)] font-semibold text-lg">
          <button onClick={handlePrev} className="cursor-pointer hover:text-[#1a1a1a] transition-colors p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          
          <div className="flex items-center space-x-2 text-sm tracking-widest">
            {testimonialsData.map((item, index) => (
              <React.Fragment key={item.id}>
                <span className={`cursor-pointer transition-colors ${index === activeIndex ? 'text-[#1a1a1a] font-bold' : 'text-[#a3abb1] hover:text-[#666]'}`} onClick={() => setActiveIndex(index)}>
                  {item.id}
                </span>
                {index < testimonialsData.length - 1 && <span className="text-[#a3abb1] font-light">/</span>}
              </React.Fragment>
            ))}
          </div>

          <button onClick={handleNext} className="cursor-pointer hover:text-[#1a1a1a] transition-colors p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}
