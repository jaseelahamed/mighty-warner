import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white">
      <Hero />

      <About />

    
      <Services />

      <WhyChooseUs />

      <Testimonials />

      {/* Contact Section */}
      <section className="py-0 flex flex-col md:flex-row bg-gray-50">
        <div className="w-full md:w-1/2 min-h-[400px] relative">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Contact us"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-24 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-black uppercase mb-10">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-orange-500 transition-colors bg-transparent placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-orange-500 transition-colors bg-transparent placeholder-gray-400"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-orange-500 transition-colors bg-transparent placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-orange-500 transition-colors bg-transparent placeholder-gray-400"
                />
              </div>
            </div>
            <div>
              <textarea
                placeholder="Tell us about your project"
                rows={3}
                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-orange-500 transition-colors bg-transparent placeholder-gray-400 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-10 py-4 bg-black text-white font-bold rounded hover:bg-gray-800 transition-colors mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
