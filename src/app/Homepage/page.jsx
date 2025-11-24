"use client";
import React, { useState, useEffect } from "react";
import { TiStarburst } from "react-icons/ti";
import ProductRange from "@/Components/ProductRange";
import ProductLogo from "@/Components/ProductLogo.jsx"
import Advantage from "@/Components/Advantage.jsx";
import Bestseller from "@/Components/Bestseller";
import Testimonials from "@/Components/Testimonials";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link"
import Image from "next/image"
function HomePage() {

  const ItemsOne = [
    {
      icon: <TbTruckDelivery />,
      title: "Free & Fast Delivery",
      desc: "All Over India",
    },
    {
      icon: <RiSecurePaymentLine />,
      title: "Easy & Secure Payments",
      desc: "UPI . COD . EMI",
    },
    {
      icon: <FaRegHandshake />,
      title: "Assured Quality Equipments",
      desc: "100% Original",
    },
  ];

  const images = [
    "/homepageAsset/oxygenConcentrator.png",
    "/homepageAsset/CPAP.png",
    "/homepageAsset/endoscopy-camera.png",
  ];
  const Items = [
    "Home and Portable Oxygen Concentrators",
    "CPAP/BiPAP",
    "CPAP Masks",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col gap-6 w-full min-h-screen h-auto">
      {/* Hero Section */}
      <div className="flex flex-col items-center h-auto md:h-auto lg:h-auto w-full lg:mt-0 mt-5">
        <div className="flex flex-col md:flex-row lg:flex-row h-full w-full gap-5">
          {/* LEFT CONTENT */}
          <div className="w-full h-1/2 md:h-full items-center md:items-start md:px-6 lg:px-3 text-center md:text-left lg:w-1/2 flex flex-col gap-2">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold w-full lg:w-[80%] md:w-full lg:ml-6 md:mt-8 lg:mt-15">
              S<span className="text-[#0285CB]">N</span>K Global
            </h1>
            <h4 className="text-sm w-[60%] md:text-lg lg:text-2xl lg:w-full lg:ml-6 lg:mt-2 tracking-wide">
              Expert in respiratory field and your trusted partner for top-quality medical machinery
              like{" "}
              <span>
                <motion.p
                  key={index}
                  className="text:sm h-10 md:text-lg lg:text-2xl font-semibold text-[#0285CB] mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  {Items[index]}
                </motion.p>
              </span>
            </h4>
            <Link href="/AllCategories">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 lg:w-[160px] lg:h-12 w-40 h-10 lg:ml-6 rounded-full bg-black text-white font-semibold text-sm lg:text-xl md:mt-5 lg:mt-8 hover:cursor-pointer"
            >
              Buy Now
              <span className="text-base lg:text-lg flex items-center">
                <BsHandbag />
              </span>
            </motion.button>
          </Link>
          </div>

          {/* RIGHT CAROUSEL STACK */}
          <div className="w-full h-1/2 md:h-full lg:w-1/2 flex md:items-center lg:items-start items-center justify-center relative">
                <Image 
                src="/doc.png"
                height={400}
                width={400}
                alt="doc"
                ></Image>
          </div>
        </div>
        <div className="overflow-hidden flex items-center h-[50px] lg:h-[60px] w-[99%] bg-[#F6F6F6] shadow-lg rounded-lg text-black">
        {/* Outer wrapper */}
        <motion.div
          className="flex whitespace-nowrap lg:px-4"
          animate={{ x: ["0%", "-30%"] }} // move half width (since content is duplicated)
          transition={{
          duration: 25, // adjust speed
          ease: "linear",
          repeat: Infinity,
          }}
        >
        {/* We duplicate the list twice for a perfect seamless scroll */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="mx-12 flex items-center gap-10 lg:gap-30">
              {ItemsOne.map((item, index) => (
              <div
                key={`${i}-${index}`}
                className="flex items-center gap-2 min-w-max"
              >
                <span className="text-xl lg:text-4xl">{item.icon}</span>
                <div>
                  <h4 className="text-xs lg:text-sm font-semibold text-center">
                    {item.title}
                  </h4>
                  <p className="text-[9px] lg:text-xs">{item.desc}</p>
                </div>
              </div>
              ))}
          </div>
        ))}
        </motion.div>
    </div>

    </div>

      {/* Product Range Slider */}
      <div className="w-full h-auto md:h-auto lg:h-[600px] mt-2">
        <ProductRange />
      </div>

      {/* BestSeller Slider */}
      <div className="w-full h-auto md:h-auto lg:h-[1400px] mt-2">
        <Bestseller />
      </div>
      {/*product logos*/}
      <div>
        <ProductLogo/>
      </div>
      {/*Advantages*/}
      <div>
        <Advantage/>
      </div>
      {/* Testimonals */}
      <div className="w-full h-[600px] mt-2 overflow-hidden">
        <Testimonials />
      </div>
    </div>
  );
}

export default HomePage;
