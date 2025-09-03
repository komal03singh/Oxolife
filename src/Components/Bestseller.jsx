"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Bestseller() {
  const [oxygenProducts, setOxygenProducts] = useState([]);
  const [cpapProducts, setCpapProducts] = useState([]);
  const [wheelchairProducts, setWheelchairProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch oxygen concentrators
        const resOxygen = await fetch(
          "/api/products?type=oxygen-concentrators"
        );
        const dataOxygen = await resOxygen.json();
        setOxygenProducts(dataOxygen.data.slice(0, 5));

        // Fetch CPAP & BiPAP
        const resCpap = await fetch("/api/products?type=cpap");
        const dataCpap = await resCpap.json();
        setCpapProducts(dataCpap.data.slice(0, 5));

        //fetch wheelchairs
        const resWheelchairs = await fetch("/api/products?type=wheelchairs");
        const dataWheelchairs = await resWheelchairs.json();
        setWheelchairProducts(dataWheelchairs.data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <h1 className="h-[90px] flex items-center justify-center text-3xl font-semibold bg-[#B2EBF2]/60">
        Bestsellers
      </h1>

      <div className="flex flex-col w-full h-auto gap-4 mt-3">
        {/* Oxygen Concentrators */}
        <div className="h-[400px] w-full p-4">
          <h3 className="text-lg font-semibold mb-5">Oxygen Concentrators</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {oxygenProducts.map((p) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
                key={p.id}
                className="bg-[#e7e6e6] flex flex-col items-center rounded-xl shadow-lg p-2 gap-2 hover:-translate-y-1 hover:cursor-pointer hover:scale-105 hover:bg-[#B2EBF2]/50 transition-transform duration-300 ease-in-out"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-light text-base text-left w-full">
                    {p.name}
                  </p>
                  <p className="font-medium text-base text-left w-full">
                    ₹{p.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CPAP & BiPAP */}
        <div className="h-[400px] w-full p-4">
          <h3 className="text-lg font-semibold mb-5">CPAP and BiPAP</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {cpapProducts.map((p) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
                key={p.id}
                className="bg-[#e7e6e6] flex flex-col items-center rounded-xl shadow-lg p-2 gap-2 hover:-translate-y-1 hover:cursor-pointer hover:scale-105 hover:bg-[#B2EBF2]/50 transition-transform duration-300 ease-in-out"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-light text-base text-left w-full">
                    {p.name}
                  </p>
                  <p className="font-medium text-base text-left w-full">
                    ₹{p.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* wheelchairs */}
        <div className="h-[400px] w-full p-4">
          <h3 className="text-lg font-semibold mb-5">Wheelchairs</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {wheelchairProducts.map((p) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
                key={p.id}
                className="bg-[#e7e6e6] flex flex-col items-center rounded-xl shadow-lg p-2 gap-2 hover:-translate-y-2 hover:cursor-pointer hover:scale-105 hover:bg-[#B2EBF2]/50 transition-transform duration-300 ease-in-out"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-light text-base text-left w-full">
                    {p.name}
                  </p>
                  <p className="font-medium text-base text-left w-full">
                    ₹{p.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bestseller;
