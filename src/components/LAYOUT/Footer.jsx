// src/components/common/Footer.jsx
import React from 'react';
import logo from '/src/assets/logonew.jpeg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-10 px-4  shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

        {/* Logo & Name */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <img
            src={logo}
            alt="TripVilla Logo"
            className="w-[150px] h-[150px] object-cover rounded-full shadow-lg"
          />
          <h1 className="text-2xl font-bold text-white pl-7">TripVilla</h1>
          <p className="text-sm text-gray-400">Your trusted travel partner.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-white mb-1">Quick Links</h2>
          <a href="/about" className="hover:text-indigo-400 transition">About Us</a>
          <a href="/destinations" className="hover:text-indigo-400 transition">Destinations</a>
          <a href="/bookings" className="hover:text-indigo-400 transition">My Bookings</a>
          <a href="/contact" className="hover:text-indigo-400 transition">Contact</a>
        </div>

        {/* Top Destinations */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-white mb-1">Top Destinations</h2>
          <a href="#" className="hover:text-indigo-400 transition">Shimla</a>
          <a href="#" className="hover:text-indigo-400 transition">Goa</a>
          <a href="#" className="hover:text-indigo-400 transition">Udaipur</a>
          <a href="#" className="hover:text-indigo-400 transition">Manali</a>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold text-white mb-1">Contact Us</h2>
        
          <p className="text-sm text-gray-400">✉️ support@tripvilla.com</p>
          

          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter size={24} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} TripVilla. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
