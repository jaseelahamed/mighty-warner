import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white">
      <Hero />

      <About />

      {/* Services Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black leading-tight uppercase tracking-tight">
              What We Do
              <br />
              Experts
            </h2>
            <div className="w-12 h-1 bg-blue-500 mt-6 mb-8"></div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our experts specialize in creating dynamic campaigns tailored to
              your specific brand requirements.
            </p>
            <button className="px-8 py-4 bg-black text-white font-bold rounded hover:bg-gray-800 transition-colors">
              View All
            </button>
          </div>

          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Media Relations",
                img: "https://images.unsplash.com/photo-1558403194-611308249d50?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                active: true,
              },
              {
                title: "Influencer Management",
                img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Events",
                img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`group relative h-96 rounded-2xl overflow-hidden cursor-pointer ${service.active ? "ring-4 ring-blue-500 ring-offset-4" : ""}`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold">
                    {service.title}
                  </h3>
                </div>
                {service.active && (
                  <div className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-lg">
                    <svg
                      className="w-5 h-5"
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Process */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-50/50 skew-y-3 origin-top-left -z-10 scale-110"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Why Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Card 1 */}
            <div className="bg-blue-100 rounded-3xl p-10 transform md:translate-y-0 shadow-lg hover:-translate-y-2 transition-transform">
              <div className="text-4xl font-black text-blue-200 mb-6">01</div>
              <h3 className="text-xl font-bold mb-4">
                Evaluate Business
                <br />
                Needs
              </h3>
              <p className="text-gray-700">
                We deeply analyze your business to uncover unique angles that
                align with your overarching goals.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-orange-400 text-white rounded-3xl p-10 transform md:translate-y-12 shadow-xl hover:-translate-y-2 md:hover:translate-y-10 transition-transform">
              <div className="text-4xl font-black text-orange-300 mb-6">02</div>
              <h3 className="text-xl font-bold mb-4">
                Choose Active
                <br />
                PR Strategies
              </h3>
              <p className="text-white/90">
                Our tailored strategies focus on high-impact channels to
                maximize reach and drive tangible results.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-orange-200 rounded-3xl p-10 transform md:translate-y-24 shadow-lg hover:translate-y-22 md:hover:translate-y-20 transition-transform">
              <div className="text-4xl font-black text-orange-300/50 mb-6">
                03
              </div>
              <h3 className="text-xl font-bold mb-4">
                Campaign
                <br />
                Execution
              </h3>
              <p className="text-gray-800">
                Flawless execution ensures every message is delivered
                consistently, capturing public attention effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

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
