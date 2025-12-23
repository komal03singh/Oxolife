"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/Context/CartContext";
import { ImSearch } from "react-icons/im";
import { GrList } from "react-icons/gr";
import { PiUserLight, PiPhoneCallThin } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header() {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart() || {};
  const searchItems = ["Oxygen Concentrators", "CPAP/BiPAP", "Wheelchairs"];

  useEffect(() => {
    if (value) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % searchItems.length);
    }, 3000);
    return () => clearInterval(t);
  }, [value, searchItems.length]);

  useEffect(() => {
    const runSequence = () => {
      controls
        .start({ x: -5, width: 110, transition: { duration: 0.5 } })
        .then(() =>
          controls.start({
            rotate: [0, -12, 12, -8, 8, 0],
            transition: { duration: 0.8 },
          })
        )
        .then(() =>
          controls.start({
            x: 0,
            width: 48,
            rotate: 0,
            transition: { duration: 0.45 },
          })
        );
    };

    // first run after a small delay so it doesn't run immediately on mount
    const initialTimeout = setTimeout(runSequence, 1500);
    const interval = setInterval(runSequence, 6500); // repeats every 6.5s

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
      controls.stop();
    };
  }, [controls]);

  return (
    <div className="flex flex-col items-center lg:h-35 w-full mt-2">
      <div className=" bg-[#0077b6] flex justify-center items-center w-[99%] rounded-lg h-8">
        <h1 className="text-white text-sm font-semibold">
          Trusted Equipments, Trusted Care
        </h1>
      </div>
      {/*small screen header*/}
      <div className="flex flex-col md:hidden lg:hidden h-32 w-full gap-3 ">
        <div className="flex">
          <div className="h-18 w-[40%] px-4 py-2">
            <Image height={300} width={600} src="/snkNewLogo.png" alt="logo" />
          </div>
          <div className="flex w-[60%] h-[80%] gap-4 items-center justify-end text-2xl">
            <Link href="" className="flex flex-col justify-center items-center">
              <PiUserLight />
            </Link>
            <Link href="/Cart" className="relative">
              <CiShoppingCart className="text-2xl" />
              {cartCount >= 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <div className="flex justify-center items-center gap-1 bg-black text-white h-10 rounded-l-full px-3 overflow-hidden">
              <span>
                <PiPhoneCallThin className="text-xl" />
              </span>
              <p className="text-sm whitespace-nowrap font-semibold pr-4">
                Call Us
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[90%] h-full flex items-center justify-center">
            <div className="relative w-3/4">
              <input
                className=" text-sm px-3 py-2 w-full border border-black/20 outline-none rounded-full"
                type="text"
                placeholder="Search for"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />

              <div className="absolute left-22 text-sm top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none flex items-center">
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait">
                    {!value && (
                      <motion.div
                        key={index}
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -8, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="h-5"
                      >
                        {searchItems[index]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <button className="text-xl px-4 py-1">
              <ImSearch />
            </button>
          </div>
          {/* Mobile Hamburger */}
          <button
            className="relative lg:hidden text-3xl flex justify-end items-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}

            {menuOpen && (
        <motion.div 
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute top-8 -left-54 z-20 lg:hidden bg-[#B2EBF2] p-2 py-6 h-80 w-65">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link href="/Homepage">Home</Link>
            </li>
            <li>
              <Link href="/AllCategories">All Categories</Link>
            </li>
            <li>
              <Link href="/AllCategories/OxygenConcentrators">
                Oxygen Concentrators
              </Link>
            </li>
            <li>
              <Link href="/AllCategories/CPAPandBiPAP">CPAP/BiPAP</Link>
            </li>
            <li>
              <Link href="/AllCategories/Wheelchairs">Patient Monitoring System</Link>
            </li>
            <li>
              <Link href="">Product Guides</Link>
            </li>
          </ul>
        </motion.div>
      )}
          </button>
            
        </div>
      </div>
      {/*large screen header*/}
      <div className="hidden md:flex lg:flex h-24 w-full">
        <div className="flex justify-center h-full w-[20%] p-3">
          <Image height={30} width={180} src="/snkNewLogo.png" alt="logo" />
        </div>
        <div className="w-full h-full">
          <div className="flex items-center h-full ">
            <div className="w-9/12 h-full flex items-center justify-center">

            <div className="rounded-l-full h-[30%]">
            <ul className="h-full flex justify-evenly items-center gap-7 text-base">

              <motion.li
                initial={{y:0}}
                whileHover={{y:-4}}
                transition={{duration:0.2, ease:"easeInOut"}}
                className="hover:text-[#0077b6] hover:cursor-pointer hover:font-semibold"
              >
                <Link href="/Homepage">
                  <h4 className="hover:cursor-pointer flex items-center gap-2">
                    Home
                  </h4>
                </Link>
              </motion.li>

              <motion.li
                initial={{y:0}}
                whileHover={{y:-4}}
                transition={{duration:0.2, ease:"easeInOut"}}
                className="group relative py-4 hover:text-[#0077b6] hover:cursor-pointer hover:font-semibold">
                <Link
                  href="/AllCategories"
                  className=" hover:cursor-pointer flex items-center gap-2"
                >
                  All Products
                </Link>
                <div className="opacity-0 invisible grid grid-cols-4 group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out absolute -left-20 mt-5 shadow-2xl p-4 rounded-b-3xl rounded-tr-3xl bg-[#0077b6]/80 text-white w-[960px] gap-4 z-50">
                  <div className="flex flex-col ">
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="hover:text-[#0077b6] font-semibold pb-1.5 px-3 text-base"
                    >
                      Our Services
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      5 LPM
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      10 LPM
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Portable (Battery-Powered)
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Used Concentrators
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                     Concentrators on rent
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 text-[#0077b6]  hover:bg-white hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                     View More
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="hover:text-[#0077b6] font-semibold pb-1.5 px-3 text-base"
                    >
                      CPAP Machines
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Resmed Airsense 11 CPAP Machine
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      ResMed AirCurve 10 Vauto CPAP Machine
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Resmed Airmini AutoSet CPAP Machine
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Deck Mount Respirare VT 30D Compact CPAP Machine
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 text-[#0077b6] hover:bg-white hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      View More
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="hover:text-[#0077b6] font-semibold pb-1.5 px-3 text-base"
                    >
                      BiPAP Machines
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Philips BiPAP Machine
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Yuwell YH 830 Breathcare BiPAP Machine
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Deck Mount  VT300 ST BiPAP Machine
                    </Link>
                  </div>
                
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="hover:text-[#0077b6] font-semibold pb-1.5 px-3 text-base"
                    >
                      CPAP Mask
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      ResMed AirFit F20 Full Face  Mask
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      ResMed AirFit F20 Full Face  Mask
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href=""
                      className="hover:text-[#0077b6] font-semibold pb-1.5 px-3 text-base"
                    >
                      Explore All
                    </Link>
                    <Link
                      href=""
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#0077b6]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#0077b6]/30 hover:font-medium hover:translate-x-1.5">
                      Explore All
                    </Link>
                  </div>
                </div>
              </motion.li>

              <motion.li
                initial={{y:0}}
                whileHover={{y:-4}}
                transition={{duration:0.2, ease:"easeInOut"}}
                className="group relative py-4 hover:text-[#0077b6] hover:cursor-pointer hover:font-semibold">
                <Link
                  href="/AboutUs"
                  className=" hover:cursor-pointer flex items-center gap-2"
                >
                  About Us
                </Link>
              </motion.li>

              <motion.li 
                initial={{y:0}}
                whileHover={{y:-4}}
                transition={{duration:0.2, ease:"easeInOut"}}
                className="group relative py-4 hover:text-[#0077b6] hover:cursor-pointer hover:font-semibold">
                <Link
                  href="/Services"
                  className=" hover:cursor-pointer flex items-center gap-2"
                >
                  Our Services
                </Link>
              </motion.li>

              <motion.li 
                initial={{y:0}}
                whileHover={{y:-4}}
                transition={{duration:0.2, ease:"easeInOut"}}
                className="group relative py-4 hover:text-[#0077b6] hover:cursor-pointer hover:font-semibold">
                <Link
                  href="/ContactUs"
                  className=" hover:cursor-pointer flex items-center gap-2"
                >
                  Contact Us
                </Link>
              </motion.li>

              <motion.li 
                initial={{y:0}}
                whileHover={{y:-4}}
                transition={{duration:0.2, ease:"easeInOut"}}
                className="group relative py-4 hover:text-[#0077b6] hover:cursor-pointer hover:font-semibold">
                <Link href="/Blogs" className="hover:cursor-pointer">
                  Blogs
                </Link>
              </motion.li>
            </ul>
          </div>
              
            </div>
            <div className="flex w-3/12 h-full items-center gap-3 px-3 text-3xl">
              <button className="text-2xl py-1">
                <ImSearch />
              </button>
              <Link
                href=""
                className="flex flex-col justify-center items-center"
              >
                <PiUserLight />
              </Link>
              <Link href="/Cart" className="relative">
                <CiShoppingCart className="text-3xl" />
                {cartCount >= 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <motion.div
                initial={{ x: 0, width: 130 }}
                className="absolute right-2 flex justify-center items-center gap-1 bg-black text-white h-12 rounded-full px-3 overflow-hidden"
              >
                <motion.span animate={controls}>
                  <PiPhoneCallThin className="text-2xl" />
                </motion.span>
                <a href="/ContactUs" className="text-sm whitespace-nowrap font-semibold pr-4">
                  Call Us
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
