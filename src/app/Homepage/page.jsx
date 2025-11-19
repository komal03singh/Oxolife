"use client";
import React, { useState, useEffect } from "react";
import { TiStarburst } from "react-icons/ti";
import ProductRange from "@/Components/ProductRange";
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
    "Endoscopy Cameras",
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
      <div className="relative h-auto md:h-auto lg:h-screen w-full lg:mt-0 mt-5">
        <div className="flex flex-col md:flex-row lg:flex-row h-full w-full gap-5">
          {/* LEFT CONTENT */}
          <div className="w-full h-1/2 md:h-full items-center md:items-start md:px-6 lg:px-3 text-center md:text-left lg:w-1/2 flex flex-col gap-2">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold w-full lg:w-[80%] md:w-full lg:ml-6 md:mt-8 lg:mt-15 tracking-wide">
              Quality Medical Equipment for Everyone
            </h1>
            <h4 className="text-sm w-[80%] md:text-lg lg:text-xl lg:w-full lg:ml-6 lg:mt-2">
              <span className="text-[#0285CB]">SNK Global</span> is your trusted partner for top-quality medical machinery
              like{" "}
              <span>
                <motion.p
                  key={index}
                  className="text:sm h-10 md:text-lg lg:text-xl font-semibold text-[#0285CB]"
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
              className="flex items-center justify-center gap-2 lg:w-[160px] lg:h-12 w-40 h-10 lg:ml-6 rounded-full bg-black text-white font-semibold text-sm lg:text-base md:mt-5 lg:mt-6 hover:cursor-pointer"
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
                height={450}
                width={450}
                alt="doc"
                ></Image>
          </div>
        </div>
        <div className="absolute bottom-0 overflow-hidden flex items-center h-[60px] lg:h-[70px] w-full bg-[#0077b6] text-white">
        {/* Outer wrapper */}
        <motion.div
          className="flex whitespace-nowrap"
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
      {/* Testimonals */}
      <div className="w-full h-[600px] mt-2 overflow-hidden">
        <Testimonials />
      </div>
    </div>
  );
}

export default HomePage;
