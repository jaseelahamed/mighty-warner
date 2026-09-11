import React from 'react';

export default function About() {
  return (
    <section className="pt-24 pb-0 mx-auto relative overflow-hidden bg-white">

      <div className="absolute top-0 right-0 pointer-events-none z-0 overflow-hidden flex justify-end w-full">
        <span className="text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[16rem] font-black text-gray-50 leading-none tracking-tighter select-none -mt-4 -mr-4">
          ORANG
        </span>
      </div>


      <div className="absolute left-0 top-1/4 pointer-events-none z-0 hidden lg:block">
        <img src="/about-bg.svg" alt="" className="w-42" />
      </div>

      <div className="px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-[2rem] min-[450px]:text-[3rem] sm:text-[3.25rem] md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4rem] font-bold text-gray-900 leading-[1.1] tracking-tight">
            Think. Create.<br />
            Promote.
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
          <div className="md:col-span-4 md:col-start-2 relative flex justify-center md:block">
            <img 
              src="/about-profile.webp" 
              alt="Orange PR Profile" 
              className="w-full max-w-[23.6875rem] object-cover mx-auto md:mx-0" 
              style={{ aspectRatio: "379/468" }}
            />
          </div>
          <div className="md:col-span-7 max-w-2xl flex flex-col justify-between items-start">
            <p className="text-gray-800 text-[1.125rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.125rem] xl:text-[1.125rem] leading-[1.8] font-medium">
              Orange PR is Dubai's leading communication company, specializing in cultural, 
              lifestyle, fashion and art. Our agency was founded on a culture of smart strategic 
              thinking, creativity, and innovation that delivers successful solutions to our local, 
              national, and international customer base. Our ability to create and execute dynamic, 
              forward-thinking PR campaigns quickly, while maintaining quality, increasing visibility, 
              and achieving the targeted objectives or aims, is the key to our success. By offering a 
              full turn-key solution, companies partner with us because of our unique approach, 
              which allows us to build a solid connection with you and your brand. Therefore plan, 
              execute, and evaluate effective cross-media and cross-cultural campaigns.
            </p>
            <button className="bg-black text-white font-sans text-[16px] font-medium uppercase rounded-[5px] px-12 py-5 hover:bg-gray-800 transition-colors tracking-wide mt-8">
              Read More
            </button>
          </div>
        </div>
      </div>


      <div className="mt-22 border-y border-gray-100 bg-white relative z-10">
        <div className="w-fit mx-auto flex flex-col lg:flex-row border-l-0 lg:border-l border-gray-100">

          <div className="flex items-center justify-center px-16 py-10 border-r border-b lg:border-b-0 border-gray-100">
            <div className="w-16 h-16 bg-[#e2e8f0] rounded-2xl flex items-center justify-center mr-6 shrink-0 text-[#475569]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-medium text-[#475569] mb-1">Our Clients</span>
              <span className="text-[40px] font-semibold text-gray-900 leading-none">208</span>
            </div>
          </div>
     
          <div className="flex items-center justify-center px-16 py-10 border-r border-b lg:border-b-0 border-gray-100">
            <div className="w-16 h-16 bg-[#e2e8f0] rounded-2xl flex items-center justify-center mr-6 shrink-0 text-[#475569]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-medium text-[#475569] mb-1">Events</span>
              <span className="text-[40px] font-semibold text-gray-900 leading-none">355</span>
            </div>
          </div>
   
          <div className="flex items-center justify-center px-16 py-10 border-r border-b lg:border-b-0 border-gray-100">
            <div className="w-16 h-16 bg-[#e2e8f0] rounded-2xl flex items-center justify-center mr-6 shrink-0 text-[#475569]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-medium text-[#475569] mb-1">Years of Experience</span>
              <span className="text-[40px] font-semibold text-gray-900 leading-none">10</span>
            </div>
          </div>
         
          <div className="flex items-center justify-center px-16 py-10 border-r border-b-0 border-gray-100">
            <div className="w-16 h-16 bg-[#e2e8f0] rounded-2xl flex items-center justify-center mr-6 shrink-0 text-[#475569]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-medium text-[#475569] mb-1">Materials</span>
              <span className="text-[40px] font-semibold text-gray-900 leading-none">15049</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
