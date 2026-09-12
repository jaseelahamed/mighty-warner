import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white">
      <Hero />

      <About />

    
      <Services />

      <WhyChooseUs />

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-16">
            Testimonials
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
            {/* Grid of faces */}
            {[
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/men/46.jpg",
              "https://randomuser.me/api/portraits/women/68.jpg",
              "https://randomuser.me/api/portraits/men/84.jpg",
              "https://randomuser.me/api/portraits/women/12.jpg",
              "https://randomuser.me/api/portraits/men/22.jpg",
              "https://randomuser.me/api/portraits/women/33.jpg",
              "https://randomuser.me/api/portraits/men/62.jpg",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Client"
                className={`w-16 h-16 rounded-xl object-cover shadow-md hover:scale-110 transition-transform cursor-pointer ${i === 4 ? "ring-4 ring-orange-500 ring-offset-2 scale-110" : "grayscale hover:grayscale-0"}`}
              />
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed">
              "Orange PR revolutionized our brand's presence. Their strategic
              insights and flawless execution resulted in unprecedented media
              coverage. They truly understand how to connect with an audience."
            </p>
            <div className="mt-8">
              <h4 className="font-bold text-gray-900">Sarah Jenkins</h4>
              <p className="text-gray-500 text-sm">CMO, TechNova</p>
            </div>
          </div>
        </div>
      </section>

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
