"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductRange() {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <h1 className="h-[15%] flex items-center justify-center text-3xl font-semibold bg-[#B2EBF2]/60">
        Shop By Category
      </h1>

      <div className="flex flex-row w-full h-[85%] overflow-hidden">
        <div className="relative w-1/2 m-2 rounded-3xl overflow-hidden">
          <Image
            src="/ProductRange/oxygenConcentrator.webp"
            alt="Oxygen Concentrators"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 z-10 bg-white rounded-3xl p-4 text-xl shadow-lg">
            <h2 className="font-semibold">Oxygen Concentrators</h2>
            <Link
              href="/AllCategories/OxygenConcentrators"
              className="text-sm text-blue-600"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-1/2 h-full gap-1">
          <div className="flex flex-row h-1/2 w-full">
            <div className="relative w-[60%] h-[94%] m-2 rounded-3xl overflow-hidden">
              <Image
                src="/ProductRange/CPAPmachine.webp"
                alt="CPAP machine"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center bg-[#BDBDBD] w-[40%] rounded-3xl text-xl m-2 p-4">
              <h2 className="font-semibold">CPAP/BiPAP</h2>
              <Link
                href="/AllCategories/CPAPandBiPAP"
                className="text-sm text-blue-600"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="flex flex-row h-1/2 w-full">
            <div className="flex flex-col items-center justify-center bg-[#BDBDBD] w-[40%] rounded-3xl text-xl m-2 p-4">
              <h2 className="font-semibold">Wheelchairs</h2>
              <Link
                href="/AllCategories/Wheelchairs"
                className="text-sm text-blue-600"
              >
                Shop Now
              </Link>
            </div>
            <div className="relative w-[60%] h-[94%] m-2 rounded-3xl overflow-hidden">
              <Image
                src="/ProductRange/wheelchair.webp"
                alt="Wheelchair"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRange;
