"use client";
import Image from "next/image";

export default function ProductLogo() {
  return (
    <div className="w-full flex flex-col items-center justify-center">

      <h2 className="text-lg lg:text-2xl font-semibold text-center mb-6">
        Trusted Providers of Top Healthcare Brands
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl px-6">
        {/* Brand 1 */}
        <div className="flex items-center justify-center bg-white rounded-2xl px-6">
          <Image
            src="/phillipsLogo.png"
            alt="Phillips"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Brand 2 */}
        <div className="flex items-center justify-center bg-white rounded-2xl px-6">
          <Image
            src="/resmedLogo.png"
            alt="ResMed"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Brand 3 */}
        <div className="flex items-center justify-center bg-white rounded-2xl px-6">
          <Image
            src="/YuwellLogo.png"
            alt="Yuwell"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
