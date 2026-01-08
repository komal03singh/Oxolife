"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function Services() {
  return (
    <div className="flex flex-col items-center justify-centerspace-y-16 mt-6 lg:mt-0">
      <section className="relative flex justify-between items-center h-[200px] lg:h-[390px] w-[90%] rounded-l-2xl ">
        {/* Background Image */}
        <Image
          src="/section.jpg"
          alt="sleeping"
          width={900}
          height={700}
          className="object-cover w-full h-full rounded-l-2xl"
        />

        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0077b6]/40 to-transparent z-10 rounded-l-2xl"></div>

        {/* Text Content */}
        <div className="absolute z-20 px-4 lg:px-8">
          <div className="flex flex-col gap-2 lg:gap-4 text-white">
            <h2 className="text-2xl lg:text-6xl font-semibold">Our Services</h2>
            <p className="text-sm lg:text-base font-medium w-full lg:max-w-2/5">
              At our organisation, we are committed to delivering high-quality
              respiratory care solutions that support better breathing, improved
              sleep health, and enhanced overall well-being.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col h-auto items-center text-center gap-4 lg:px-5">
        <div className="flex flex-col lg:flex-row gap-4 p-4 lg:mt-5">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount:0.2,once:true}}
            className="bg-[#0077b6]/40 p-4 m-4 text-left rounded-xl lg:w-1/3"
          >
            <div className="rounded-full w-13 h-13 flex-shrink-0 flex items-center justify-center bg-[#F5F5F5] m-4">
              <Image
                src="https://www.reshot.com/preview-assets/icons/7SJT2D5QLV/oxygen-mask-7SJT2D5QLV.svg"
                alt="icon"
                width={30}
                height={30}
              />
            </div>
            <h2 className="mb-1 text-2xl font-medium px-5 py-2">
              Medical Device Sales
            </h2>
            <p className="mb-1 text-base font-light px-5 py-2 ">
              Explore high-quality Oxygen Concentrators and CPAP/BiPAP range
              sourced from trusted manufacturers.
            </p>
        <div className="px-4 py-2 mt-3">
              <Link href="/AllCategories" className="bg-black text-white text-base font-light px-5 py-2 rounded-full">
                Explore Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{amount:0.2,once:true}}
            className="bg-[#0077b6]/40 p-4 m-4 text-left rounded-xl lg:w-1/3"
          >
            <div className="rounded-full w-13 h-13 flex-shrink-0 flex items-center justify-center bg-[#F5F5F5] m-4">
              <Image
                src="https://www.reshot.com/preview-assets/icons/X5YAMKP9BE/rental-X5YAMKP9BE.svg"
                alt="icon"
                width={30}
                height={30}
              />
            </div>
            <h2 className="mb-1 text-2xl font-medium px-5 py-2">
              Equipment Rental
            </h2>
            <p className="text-base font-light px-5 py-2">
              Get access to the medical equipment you need—without long-term
              commitments.
            </p>
            <div className="px-4 py-2 mt-3">
              <Link href="/AllCategories" className="bg-black text-white text-base font-light px-5 py-2 rounded-full">
                Explore Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{amount:0.2,once:true}}
            className="bg-[#0077b6]/40 p-4 m-4 text-left rounded-xl lg:w-1/3"
          >
            <div className="rounded-full w-13 h-13 flex-shrink-0 flex items-center justify-center bg-[#F5F5F5] m-4">
              <Image
                src="https://www.reshot.com/preview-assets/icons/7SLFANCXGJ/sleep-7SLFANCXGJ.svg"
                alt="icon"
                width={30}
                height={30}
              />
            </div>
            <h2 className="mb-1 text-2xl font-medium px-5 py-2">
              Sleep Diagnostics
            </h2>
            <p className="text-base font-light px-5 py-2">
              Our experts conducts comprehensive sleep studies for better sleep
              health.
            </p>
            <div className="px-4 py-2 mt-3">
              <Link href="/ContactUs" className="bg-black text-white text-base font-light px-5 py-2 rounded-full">
                Book an Appointment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div id='WhyUs' className=' md:mt-15 lg:mt-6 overflow-x-hidden'>

      <h4 className='text-xl lg:text-4xl font-medium max-w-full md:text-2xl text-center'>Why Choose SNK Global Consultancy Services? </h4>
      
      <div className='lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 lg:h-4/5 py-5 lg:py-15 px-10 gap-3'> 
        <div className='w-full h-full flex justify-center items-center'>
          <Image src="/whyUs.jpg" alt="question-mark" height={500} width={500}></Image>
        </div>

        <div className='flex flex-col gap-3 lg:gap-12 justify-center lg:px-4 md:gap-4' >

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{amount:0.2,once:true}}
          className='bg-black text-white h-auto p-4 shadow-gray-600 shadow-lg'>
            <h3 className='text-sm lg:text-xl font-medium px-2 md:text-sm'>Expertise</h3>
            <p className='text-xs lg:text-base font-light px-5 py-2 md:text-xs'> Our team has <span className="font-semibold">35+ years</span> of experience in the respiratory care industry, ensuring that our clients receive the best possible service.</p>
          </motion.div >

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{amount:0.2,once:true}}
            className=' bg-black text-white h-auto p-4 ml-10 shadow-gray-600 shadow-md'>
            <h3 className='text-sm lg:text-xl font-medium px-2 md:text-sm'>Quality Products</h3>
            <p className='text-xs lg:text-base font-light px-5 py-2 md:text-xs'> We offer high-quality products from leading manufacturers, ensuring that our clients receive the best possible outcomes.</p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{amount:0.2,once:true}}
            className=' bg-black text-white h-auto p-4 shadow-gray-600 shadow-md'>
            <h3 className='text-sm lg:text-xl font-medium px-2 md:text-sm'>Personalized Support</h3>
            <p className='text-xs lg:text-base font-light px-5 py-2 md:text-xs'> We prioritize building strong relationships with our clients, providing personalized support and service to meet their unique needs.</p>
          </motion.div>

        </div>

      </div>

    </div>
    </div>
  );
}
