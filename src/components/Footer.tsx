import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white font-[family-name:var(--font-inter)] w-full">
      <div className="max-w-[1400px] mx-auto">
        
      
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-16 px-6 md:px-12 gap-8 border-b border-[#1A1A1A]">
          <div className="max-w-xl">
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] font-semibold leading-none tracking-normal mb-3">Newsletter</h2>
            <p className="text-[#a3abb1] text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] font-normal leading-[28px] tracking-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
          
          <div className="w-full lg:w-[45%] xl:w-[650px] flex-shrink-0 mt-6 lg:mt-0">
            <div className="relative w-full">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full h-[60px] bg-[#000000] border border-[#474747] rounded-[10px] pl-6 md:pl-8 pr-16 text-sm md:text-base text-white placeholder-[#a3abb1] focus:outline-none focus:border-gray-500 transition-colors"
              />
              <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

      
        <div className="flex flex-col lg:flex-row justify-between py-20 px-6 md:px-12 gap-16 lg:gap-8">
          
         
          <div className="lg:max-w-2xl">
            <h2 className="text-[2.5rem] font-black uppercase mb-6 tracking-tight">ORANGE PR</h2>
            <p className="text-[#a3abb1] text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] font-normal leading-[28px] tracking-normal">
              Orange PR is Dubai's leading communication company, specializing in cultural, lifestyle, fashion and art. Our agency was founded on a culture of smart strategic thinking, creativity, and innovation that delivers successful solutions to our local, national, and international customer base. Our ability to create and execute dynamic, forward-thinking PR campaigns quickly, while maintaining quality, increasing visibility, and achieving the targeted objectives or aims, is the key to our success.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-16 lg:gap-24">
          
            <div>
              <h4 className="text-[13px] font-bold uppercase tracking-wider mb-8">QUICK LINKS</h4>
              <ul className="space-y-5 text-[13px] text-[#a3abb1]">
                <li><a href="#home" className="hover:text-white transition-colors uppercase block">HOME</a></li>
                <li><a href="#services" className="hover:text-white transition-colors uppercase block">PR SERVICES</a></li>
                <li><a href="#about" className="hover:text-white transition-colors uppercase block">ABOUT US</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors uppercase block">CONTACT US</a></li>
              </ul>
            </div>

          
            <div className="max-w-[300px]">
              <h4 className="text-[13px] font-bold uppercase tracking-wider mb-8">CONTACT INFO</h4>
              <ul className="space-y-6 text-[13px] text-[#a3abb1]">
                <li className="flex items-start gap-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="leading-relaxed">FD - First Floor<br/>Incubator Building<br/>Masdar City, Abu Dhabi<br/>United Arab Emirates</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                  <span>+971 58 58 7 3195</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>maria@orangepragency.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-12 border-t border-[#1A1A1A] text-[11px] text-[#a3abb1]">
          <p>© 2025 Orange PR Agency. | Design & Development by : MightyWarners Technologies</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Pinterest">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.66 7.9 6.44 9.34-.1-.78-.18-1.98.04-2.84l1.37-5.83s-.34-.68-.34-1.7c0-1.59.92-2.78 2.07-2.78 1 0 1.47.74 1.47 1.63 0 1-.63 2.5-.95 3.88-.27 1.15.58 2.09 1.7 2.09 2.05 0 3.63-2.16 3.63-5.28 0-2.76-1.98-4.69-4.83-4.69-3.32 0-5.28 2.49-5.28 5.07 0 1 .39 2.08.87 2.66.1.12.11.22.08.34l-.28 1.16c-.04.16-.14.19-.3.12-1.12-.53-1.82-2.22-1.82-3.57 0-2.9 2.1-5.57 6.09-5.57 3.2 0 5.69 2.28 5.69 5.33 0 3.19-2.01 5.75-4.81 5.75-.94 0-1.82-.49-2.12-1.06l-.58 2.21c-.2.78-.77 1.75-1.14 2.34C10.07 23.83 11.02 24 12 24c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
