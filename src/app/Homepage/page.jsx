"use client";
import React, { useState, useEffect } from "react";
import ProductRange from "@/Components/ProductRange";
import Bestseller from "@/Components/Bestseller";
import Testimonials from "@/Components/Testimonials";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";

function HomePage() {
  const images = [
    "/homepageAsset/oxygenConcentrator.png",
    "/homepageAsset/CPAP.png",
    "/homepageAsset/Wheelchair.png",
  ];
  const Items = [
    "Home and Portable Oxygen Concentrators",
    "CPAP/BiPAP",
    "Electric Wheelchairs",
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
      <div className="h-[480px] w-full">
        <div className="flex flex-row h-[380px] w-full">
          {/* LEFT CONTENT */}
          <div className="w-1/2 flex flex-col gap-2">
            <h1 className="text-6xl font-semibold w-[80%] ml-6 mt-10">
              Quality Medical Equipment for Everyone
            </h1>
            <h4 className="text-lg w-full ml-6">
              OxoLife is a leading provider of high-quality medical equipment
              like{" "}
              <span>
                <motion.p
                  key={index}
                  className="text-xl font-semibold text-[#26C6DA]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  {Items[index]}
                </motion.p>
              </span>
            </h4>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 w-[35%] h-12 ml-6 rounded-full bg-[#B2EBF2]/60 font-semibold text-lg mt-5 hover:cursor-pointer"
            >
              Buy Now
              <span className="text-xl flex items-center">
                <BsHandbag />
              </span>
            </motion.button>
          </div>

          {/* RIGHT CAROUSEL STACK */}
          <div className="w-1/2 flex items-center justify-center relative">
            {images.map((src, i) => {
              const position = (i - index + images.length) % images.length;

              let style = {};
              if (position === 0) {
                // CENTER (front)
                style = { x: 0, scale: 1.4, zIndex: 3, opacity: 1 };
              } else if (position === 1) {
                // RIGHT
                style = { x: 150, scale: 0.5, zIndex: 2, opacity: 0.3 };
              } else {
                // LEFT
                style = { x: -150, scale: 0.5, zIndex: 2, opacity: 0.3 };
              }

              return (
                <motion.img
                  key={i}
                  src={src}
                  className="absolute w-58 h-58 bg-[#6BBF8A]/40 object-contain rounded-full p-4 shadow-xl"
                  animate={style}
                  initial={false}
                  transition={{ duration: 0.8 }}
                />
              );
            })}
          </div>
        </div>
        <div className="flex justify-center h-[100px] w-full bg-[#26C6DA]/30">
          <ul className="w-full flex flex-row items-center justify-center gap-15">
            <li className="flex flex-col items-center">
              <span className="text-4xl">
                <TbTruckDelivery />
              </span>
              <h4 className="text-sm font-semibold">Free & Fast Delivery</h4>
              <p className="text-xs">All Over India</p>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-4xl">
                <RiSecurePaymentLine />
              </span>
              <h4 className="text-sm font-semibold">Easy & Secure Payments</h4>
              <p className="text-xs">UPI . COD . EMI</p>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-4xl">
                <FaRegHandshake />
              </span>
              <h4 className="text-sm font-semibold">
                Assured Quality Equipments
              </h4>
              <p className="text-xs">100% Original</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Product Range Slider */}
      <div className="w-full h-[600px] mt-2">
        <ProductRange />
      </div>

      {/* BestSeller Slider */}
      <div className="w-full h-[1400px] mt-2">
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
