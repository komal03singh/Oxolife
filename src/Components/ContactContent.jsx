"use client"
import React from 'react'

import { motion } from "framer-motion";

import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube 
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";



function ContactContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Column: Intro Text and Contact Info */}
      <div className="space-y-10">
        <p className="text-sm uppercase tracking-wider text-gray-500">/ get in touch /</p>
        
        <h2 className="text-4xl font-bold leading-tight mb-4">
          Have questions about oxygen therapy or sleep support? Our experts are here to help you breathe and sleep better.
        </h2>
        
        <p className="text-gray-600 mb-8">
          Contact us for more info
        </p>

        {/* Contact Details (Flexbox/Grid for alignment) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
          {/* Call Center */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+91-9811522009 or</p>
            <p className="text-gray-600">+91-9289700933</p>
          </div>

          {/* Our Location */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-gray-600">SNK Global Consultancy Services Basement, Shop no-10, Part-01, Sector-16A, Huda Market, Faridabad, Haryana, 121002 </p>
          </div>
          
          {/* Email */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-[#0077b6]">rajeev.anand@snkgcs.com</p>
          </div>

          {/* Social Network */}
          {/* Social Network */}
<div>
  <h3 className="text-xl font-semibold mb-2">Social Network</h3>

  <div className="flex space-x-6 text-2xl mt-3">
    {/* Facebook */}
    <motion.a
      href="#"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-600 hover:text-blue-600 transition"
    >
      <FaFacebookF />
    </motion.a>

    {/* Twitter/X */}
    <motion.a
      href="#"
      whileHover={{ scale: 1.2, rotate: -5 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-600 hover:text-black transition"
    >
      <FaXTwitter />
    </motion.a>

    {/* LinkedIn */}
    <motion.a
      href="#"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-600 hover:text-blue-700 transition"
    >
      <FaLinkedinIn />
    </motion.a>

    {/* Instagram */}
    <motion.a
      href="#"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-600 hover:text-pink-600 transition"
    >
      <FaInstagram />
    </motion.a>

    {/* YouTube */}
    <motion.a
      href="#"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-600 hover:text-red-600 transition"
    >
      <FaYoutube />
    </motion.a>
  </div>
</div>

        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="p-8 bg-[#F6F6F6] shadow-xl rounded-lg">
        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
        <p className="text-gray-600 mb-6">
          Improving sleep, breathing, and overall wellbeing with world-class respiratory solutions.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full name"
            className="w-full border-b border-gray-300 focus:border-[#0077b6] focus:outline-none py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 focus:border-[#0077b6] focus:outline-none py-2"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b border-gray-300 focus:border-[#0077b6] focus:outline-none py-2"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border-b border-gray-300 focus:border-[#0077b6] focus:outline-none py-2 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white font-medium px-8 py-3 rounded-full hover:bg-[#0077b6] transition duration-300 flex items-center"
          >
            <span className="mr-2">✉️</span> Send a message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactContent