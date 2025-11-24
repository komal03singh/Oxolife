"use client";

import React from "react";
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className="px-6 lg:px-24 py-16 space-y-16">
      {/* Header / Intro */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">Types of Sleep Studies</h1>
        <p className="text-lg text-gray-700">
          
        </p>
      </div>

      {/* Types of Sleep Studies */}
      <section className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-medium"></h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold"></h3>
            <p className="text-gray-600">
              Full channel tests cover all parameters and are called Type I or II. Type III diagnostic test is suitable for sleep breathing disorders only.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">PAP Titration Tests</h3>
            <p className="text-gray-600">
              Once diagnosed with a breathing disorder, CPAP or BiPAP titration tests are done to determine which mode and what pressure settings to set for your therapy.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Split Night Tests</h3>
            <p className="text-gray-600">
              A mix of diagnostic and PAP titration test. Saves cost by combining both in a single night.
            </p>
          </div>
        </div>
      </section>




       <div className='flex flex-col px-4 h-[500px] items-center text-center gap-6'>
      
      <div className='flex flex-col gap-6 mt-6'>
        <h2 className='text-4xl font-medium'>Types of Sleep Studies</h2>
        <p className='text-lg font-medium text-gray-600 dark:text-gray-800'>We bridge the gap between learning and employability by helping students build portfolio-worthy projects that recruiters love.</p>
      </div>

      <div className='flex flex-col lg:flex-row gap-4 p-4 lg:mt-5'>
        
        <motion.div
          initial={{y:100,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.5}}
          className=' p-4 m-4 text-left border border-black/20 rounded-lg'>
            <h2 className='mb-2 text-lg font-semibold px-5 py-2'>Polysomnography or Diagnostic Tests</h2>
            <p className='text-base font-light px-5 py-2 '>A sleep study is a test that records your body’s activity during sleep to help detect disorders and shape the right treatment plan.</p>
        </motion.div>

        <motion.div
          initial={{y:100,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.5,delay:0.5}}
          className=' p-4 m-4 text-left border border-cyan-400/70 dark:border-cyan-200/30 rounded-md'>
          <h2 className='mb-2 text-lg font-semibold px-5 py-2'>🧠 Smart Project Design</h2>
          <p className='text-base font-light px-5 py-2 text-gray-600 dark:text-gray-300'>Each project is scoped to demonstrate technical depth while staying short enough to complete and deploy quickly.</p>
        </motion.div>

        <motion.div
          initial={{y:100,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.5,delay:1}}
          className=' p-4 m-4 text-left border border-cyan-400/70 dark:border-cyan-200/30 rounded-md'>
          <h2 className='mb-2 text-lg font-semibold px-5 py-2'>🌐 Resume-Ready Output</h2>
          <p className='text-base font-light px-5 py-2 text-gray-600 dark:text-gray-300'>Get a GitHub repo, live hosted demo, and project thumbnail — all ready to slot directly into your resume and LinkedIn.</p>
        </motion.div>
        
      </div>
    </div>

      {/* Diagnostic Equipment / Partners */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-medium">Diagnostic Equipment Partners</h2>
        <p className="text-gray-700">
          We use advanced testing equipment from world-class medical technology partners.
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
