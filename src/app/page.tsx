import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white">
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <WhyChooseUs />
      <Testimonials />
      <div id="contact"><Contact /></div>
    </div>
  );
}
