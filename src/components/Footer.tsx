import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-16 mb-16 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 max-w-sm">Subscribe to get the latest insights and news from the industry directly to your inbox.</p>
          </div>
          <div className="w-full md:w-auto flex">
            <input type="email" placeholder="Email Address" className="bg-transparent border border-gray-700 px-6 py-4 rounded-l focus:outline-none focus:border-gray-500 w-full md:w-80" />
            <button className="bg-white text-black px-6 py-4 rounded-r font-bold hover:bg-gray-200 transition-colors">→</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-black tracking-tight mb-6">ORANGE PR</div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              A dedicated team of proactive, driven, and results-oriented professionals. 
              We specialize in formulating bespoke PR strategies that ensure your voice 
              cuts through the noise, reaching the right audience at the right time.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>123 PR Avenue, Suite 100<br/>New York, NY 10001</li>
              <li>hello@orangepr.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-gray-800 text-sm text-gray-500">
          <p>&copy; 2026 ORANGE PR. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
