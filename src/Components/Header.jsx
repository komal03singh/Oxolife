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
    <div className="lg:h-40 w-full">
      <div className="bg-black/80 flex justify-center items-center w-full h-7">
        <h1 className="text-white text-xs font-semibold">
          Trusted Equipments, Trusted Care
        </h1>
      </div>
      {/*small screen header*/}
      <div className="flex flex-col md:hidden lg:hidden h-32 w-full gap-3 ">
        <div className="flex">
          <div className="h-18 w-[40%] px-4 py-2">
            <Image height={300} width={600} src="/logo.png" alt="logo" />
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
            <div className="flex justify-center items-center gap-1 bg-[#BDBDBD] h-10 rounded-l-full px-3 overflow-hidden">
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
                <div className="overflow-hiddenh-6">
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
              <Link href="/AllCategories/Wheelchairs">Wheelchairs</Link>
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
      <div className="hidden md:flex lg:flex h-33 w-full">
        <div className="h-30 w-1/4 px-4 py-2">
          <Image height={400} width={400} src="/logo.png" alt="logo" />
        </div>
        <div className="w-full h-full">
          <div className="flex items-center h-[70%] ">
            <div className="w-9/12 h-full flex items-center justify-center">
              <div className="relative w-3/4">
                <input
                  className="px-4 py-2 w-full border border-black/20 outline-none rounded-full"
                  type="text"
                  placeholder="Search for"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />

                {/* only show animated fake placeholder when input is empty */}
                <div className="absolute left-26 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none flex items-center">
                  <div className="overflow-hidden h-6">
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
              <button className="text-2xl px-4 py-1">
                <ImSearch />
              </button>
            </div>
            <div className="flex w-3/12 h-full items-center gap-6 text-3xl">
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
                className="absolute right-0 flex justify-center items-center gap-1 bg-[#BDBDBD] h-12 rounded-l-full px-3 overflow-hidden"
              >
                <motion.span animate={controls}>
                  <PiPhoneCallThin className="text-2xl" />
                </motion.span>
                <p className="text-sm whitespace-nowrap font-semibold pr-4">
                  Call Us
                </p>
              </motion.div>
            </div>
          </div>

          <div className="rounded-l-full h-[30%] bg-[#B2EBF2]/60">
            <ul className="h-full flex justify-evenly items-center gap-3 text-sm">
              <li>
                <Link href="/Homepage">
                  <h4 className="hover:cursor-pointer flex items-center gap-2">
                    <span className="text-xl">
                      <IoHomeOutline />
                    </span>
                    Home
                  </h4>
                </Link>
              </li>
              <li className="group relative py-4">
                <Link
                  href="/AllCategories"
                  className=" hover:cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">
                    <GrList />
                  </span>
                  All Categories
                </Link>
                <div className="opacity-0 invisible grid grid-cols-4 group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out absolute -left-20 mt-2 shadow-2xl p-4 rounded-b-3xl rounded-tr-3xl bg-[#F5F5F5] w-[960px] gap-4 z-40">
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="hover:text-[#37a9b8] font-semibold pb-1.5 px-3 text-base"
                    >
                      Oxygen Concentrators
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      5 LPM
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      8 LPM
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      10 LPM
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Portable (Battery-Powered)
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Dual Flow
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Adjustable Purity
                    </Link>
                    <Link
                      href="/AllCategories?type=oxygen-concentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      9 LPM
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="hover:text-[#37a9b8] font-semibold pb-1.5 px-3 text-base"
                    >
                      Oxygen Concentrator Accessories
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Filter
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Humidifier Bottle
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Nasal Cannula
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Oxygen Mask
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Connector Tube
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Battery
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Charger
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Backpack
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Water Trap
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="hover:text-[#37a9b8] font-semibold pb-1.5 px-3 text-base"
                    >
                      Oxygen Concentrator Rental
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      5 Liter Oxygen Concentrator on Rent
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      10 Liter Oxygen Concentrator on Rent
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Portable Oxygen Concentrator on Rent
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="hover:text-[#37a9b8] font-semibold pb-1.5 px-3 text-base"
                    >
                      CPAP & BiPAP
                    </Link>
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      CPAP
                    </Link>
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      BiPAP
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="hover:text-[#37a9b8] font-semibold pb-1.5 px-3 text-base"
                    >
                      CPAP & BiPAP Rental
                    </Link>
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      CPAP Machine on Rent
                    </Link>
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      BiPAP Machine on Rent
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="hover:text-[#37a9b8] font-semibold pb-1.5 px-3 text-base"
                    >
                      CPAP & BiPAP Accessories
                    </Link>
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Humidifier
                    </Link>
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Mask
                    </Link>
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Tube
                    </Link>
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Power Supply
                    </Link>
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      CPAP/BiPAP Battery
                    </Link>
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      CPAP/BiPAP Filter
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="hover:text-[#37a9b8] font-semibold pb-1.5 px-3 text-base"
                    >
                      Wheelchair
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Foldable Wheelchair (Manual)
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Commodable WheelChair
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Pediatric Wheelchair
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Electric Wheelchair (Motorized)
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Transport Wheelchair
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Stair Climbing Wheelchair
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href=""
                      className="hover:text-[#37a9b8] font-semibold pb-1.5 px-3 text-base"
                    >
                      Sleep Test
                    </Link>
                    <Link
                      href=""
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Sleep Test
                    </Link>
                  </div>
                </div>
              </li>

              <li className="group relative py-4">
                <Link
                  href="/AllCategories/OxygenConcentrators"
                  className=" hover:cursor-pointer flex items-center gap-2"
                >
                  Oxygen Concentrators
                </Link>
                <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out absolute left-0 mt-2 shadow-2xl bg-[#F5F5F5] p-4 rounded-b-3xl rounded-tr-3xl w-[250px] gap-4 z-40">
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      5 LPM
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      8 LPM
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      10 LPM
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Portable (Battery-Powered)
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Dual Flow
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Adjustable Purity
                    </Link>
                    <Link
                      href="/AllCategories/OxygenConcentrators"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      9 LPM
                    </Link>
                  </div>
                </div>
              </li>

              <li className="group relative py-4">
                <Link
                  href="/AllCategories/CPAPandBiPAP"
                  className=" hover:cursor-pointer flex items-center gap-2"
                >
                  CPAP/BiPAP
                </Link>
                <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out absolute left-0 mt-2 shadow-2xl p-4 rounded-b-3xl rounded-tr-3xl bg-[#F5F5F5] w-[250px] gap-4 z-40">
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      CPAP
                    </Link>
                    <Link
                      href="/AllCategories/CPAPandBiPAP"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      BiPAP
                    </Link>
                  </div>
                </div>
              </li>

              <li className="group relative py-4">
                <Link
                  href="/AllCategories/Wheelchairs"
                  className=" hover:cursor-pointer flex items-center gap-2"
                >
                  Wheelchairs
                </Link>
                <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out absolute left-0 mt-2 shadow-2xl p-4 rounded-b-3xl rounded-tr-3xl bg-[#F5F5F5] w-[250px] gap-4 z-40">
                  <div className="flex flex-col">
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Foldable Wheelchair (Manual)
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Commodable WheelChair
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Pediatric Wheelchair
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Electric Wheelchair (Motorized)
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Transport Wheelchair
                    </Link>
                    <Link
                      href="/AllCategories/Wheelchairs"
                      className="px-4 py-1 rounded-3xl transition-all duration-300 hover:bg-[#80DEEA]/25 hover:backdrop-blur-3xl hover:shadow-lg hover:shadow-[#4DD0E1]/30 hover:font-medium hover:translate-x-1.5"
                    >
                      Stair Climbing Wheelchair
                    </Link>
                  </div>
                </div>
              </li>

              <li>
                <Link href="" className="hover:cursor-pointer">
                  Product Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
