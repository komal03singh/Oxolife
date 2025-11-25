"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-centerspace-y-16">
      <section className="border-1 relative flex justify-between items-center h-[400px] w-[80%]">
        <Image
          src="/sleeping.jpg"
          alt="sleeping"
          width={950}
          height={900}
          className="object-cover"
        ></Image>
        <div className="absolute z-20">
          <div className="flex flex-col gap-4 text-white">
            <h2 className="text-4xl font-medium">Our Services</h2>
            <p className="text-base font-medium max-w-3/5">
              At our organisation, we are committed to delivering high-quality
              respiratory care solutions that support better breathing, improved
              sleep health, and enhanced overall well-being.
            </p>
          </div>
        </div>
        
      </section>

      <section className="flex flex-col h-auto items-center text-center gap-4 px-5">
        <div className="flex flex-col lg:flex-row gap-4 p-4 lg:mt-5">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" p-4 m-4 text-left"
          >
            <div className="rounded-full w-13 h-13 flex-shrink-0 flex items-center justify-center bg-[#F5F5F5] m-4">
              <Image 
                src="https://www.reshot.com/preview-assets/icons/7SJT2D5QLV/oxygen-mask-7SJT2D5QLV.svg" 
                alt="icon" 
                width={30} 
                height={30}
              />
            </div>
            <h2 className="mb-2 text-2xl font-medium px-5 py-2">
              Medical Device Sales
            </h2>
            <p className="text-base font-light px-5 py-2 ">Choose high-quality Oxygen Concentrators andCPAP/BiPAP range sourced from trusted manufacturers.</p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" p-4 m-4 text-left"
          >
            <div className="rounded-full w-13 h-13 flex-shrink-0 flex items-center justify-center bg-[#F5F5F5] m-4">
              <Image 
                src="https://www.reshot.com/preview-assets/icons/X5YAMKP9BE/rental-X5YAMKP9BE.svg" 
                alt="icon" 
                width={30} 
                height={30}
              />
            </div>
            <h2 className="mb-2 text-2xl font-medium px-5 py-2">
              Equipment Rental
            </h2>
            <p className="text-base font-light px-5 py-2">
              Get access to the medical equipment you need—without long-term commitments.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=" p-4 m-4 text-left"
          >
            <div className="rounded-full w-13 h-13 flex-shrink-0 flex items-center justify-center bg-[#F5F5F5] m-4">
              <Image 
                src="https://www.reshot.com/preview-assets/icons/7SLFANCXGJ/sleep-7SLFANCXGJ.svg" 
                alt="icon" 
                width={30} 
                height={30}
              />
            </div>
            <h2 className="mb-2 text-2xl font-medium px-5 py-2">
              Sleep Diagnostics
            </h2>
            <p className="text-base font-light px-5 py-2">
              Our experts conducts comprehensive sleep studies for better sleep health.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="bg-[#0077b6] text-white flex flex-col h-[500px] items-center text-center gap-6">
        <div className="flex flex-col gap-6 mt-6">
          <h2 className="text-4xl font-medium">Types of Sleep Studies</h2>
          <p className="text-lg font-medium text-gray-100">
            We bridge the gap between learning and employability by helping
            students build portfolio-worthy projects that recruiters love.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 p-4 lg:mt-5">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" p-4 m-4 text-left"
          >
            <h2 className="mb-2 text-2xl font-medium px-5 py-2">
              Polysomnography or Diagnostic Tests
            </h2>
            <p className="text-base font-light px-5 py-2 ">
              Once diagnosed with a breathing disorder, CPAP or BiPAP titration
              tests are done to determine which mode and what pressure settings
              to set for your therapy.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" p-4 m-4 text-left"
          >
            <h2 className="mb-2 text-2xl font-medium px-5 py-2">
              PAP Titration Tests
            </h2>
            <p className="text-base font-light px-5 py-2">
              Each project is scoped to demonstrate technical depth while
              staying short enough to complete and deploy quickly.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=" p-4 m-4 text-left"
          >
            <h2 className="mb-2 text-2xl font-medium px-5 py-2">
              Split Night Tests
            </h2>
            <p className="text-base font-light px-5 py-2">
              A mix of diagnostic and PAP titration test. Saves cost by
              combining both in a single night.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Diagnostic Equipment / Partners */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-medium">Diagnostic Equipment Partners</h2>
        <p className="text-gray-700">
          We use advanced testing equipment from world-class medical technology
          partners.
        </p>
      </section>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto text-center pt-12">
        <button className="bg-[#0077b6] text-white px-6 py-3 rounded-lg hover:bg-[#005f87] transition">
          Book Your Sleep Study
        </button>
      </div>
    </div>
  );
}
