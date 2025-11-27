"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-centerspace-y-16">
      <section className="relative flex justify-between items-center h-[390px] w-[90%] rounded-l-2xl ">
        {/* Background Image */}
        <Image
          src="/sleeping.jpg"
          alt="sleeping"
          width={1100}
          height={1000}
          className="object-cover w-full h-full rounded-l-2xl"
        />

        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0077b6]/40 to-transparent z-10 rounded-l-2xl"></div>

        {/* Text Content */}
        <div className="absolute z-20 px-8">
          <div className="flex flex-col gap-4 text-white">
            <h2 className="text-6xl font-semibold">Our Services</h2>
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
            className="bg-[#0077b6]/40 p-4 m-4 text-left rounded-xl w-1/3"
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
            <p className="text-base font-light px-5 py-2 ">
              Choose high-quality Oxygen Concentrators andCPAP/BiPAP range
              sourced from trusted manufacturers.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#0077b6]/40 p-4 m-4 text-left rounded-xl w-1/3"
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
              Get access to the medical equipment you need—without long-term
              commitments.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-[#0077b6]/40 p-4 m-4 text-left rounded-xl w-1/3"
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
              Our experts conducts comprehensive sleep studies for better sleep
              health.
            </p>
          </motion.div>
        </div>
      </section>

      <div id='WhyUs' className=' md:mt-15 lg:mt-6'>

      <h4 className='text-xl lg:text-4xl font-medium max-w-full md:text-2xl text-center'>Why Choose SNK Global Consultancy Services? </h4>
      
      <div className='lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 lg:h-4/5 py-15 px-10'> 
        <div className='w-full h-full flex justify-center items-center'>
          <Image src="/whyUs.jpg" alt="question-mark" height={500} width={500}></Image>
        </div>

        <div className='flex flex-col gap-3 lg:gap-12 justify-center px-4 md:gap-4' >

          <div className=' bg-black text-white h-auto p-4 shadow-gray-600 shadow-lg'>
            <h3 className='text-sm lg:text-xl font-extrabold px-2 md:text-sm'>Expertise</h3>
            <p className='text-xs lg:text-base font-extralight px-5 py-2 md:text-xs'> Our team has extensive experience in the respiratory care industry, ensuring that our clients receive the best possible service.</p>
          </div >

          <div className=' bg-black text-white h-auto p-4 ml-10 shadow-gray-600 shadow-md'>
            <h3 className='text-sm lg:text-xl font-extrabold px-2 md:text-sm'>Quality Products</h3>
            <p className='text-xs lg:text-base font-extralight px-5 py-2 md:text-xs'> We offer high-quality products from leading manufacturers, ensuring that our clients receive the best possible outcomes.</p>
          </div>

          <div className=' bg-black text-white h-auto p-4 shadow-gray-600 shadow-md'>
            <h3 className='text-sm lg:text-xl font-extrabold px-2 md:text-sm'>Personalized Support</h3>
            <p className='text-xs lg:text-base font-extralight px-5 py-2 md:text-xs'> We prioritize building strong relationships with our clients, providing personalized support and service to meet their unique needs.</p>
          </div>

        </div>

      </div>

    </div>
    </div>
  );
}
