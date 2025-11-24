"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0077b6] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <div className="border-1 bg-white flex justify-center h-[25%] w-[80%] p-3">
            <Image height={30} width={180} src="/snkNewLogo.png" alt="logo" />
          </div>
          <h3 className="text-lg font-semibold mb-4 mt-5">About</h3>
          <p className="text-sm leading-relaxed">
            Established in 2024, SNK Global Consultancy Services is your trusted partner for top-quality medical machinery from leading brands like Deck Munt, ResMed, and Yuwell.
            With years of industry experience, we focus on delivering reliable products and lasting relationships built on trust, quality, and care.
          </p>
        </div>

        {/* Shop Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/AllCategories/OxygenConcentrators" className="hover:underline">Oxygen Concentrators</Link></li>
            <li><Link href="/AllCategories/CPAPandBiPAP" className="hover:underline">CPAP & BiPAP Machines</Link></li>
            <li><Link href="/AllCategories/Wheelchairs" className="hover:underline">Oxygen Masks</Link></li>
            <li><Link href="/AllCategories" className="hover:underline">Shop All</Link></li>
          </ul>
        </div>

        {/* Customer Care Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">FAQs</Link></li>
            <li><Link href="#" className="hover:underline">Shipping & Delivery</Link></li>
            <li><Link href="#" className="hover:underline">Return Policy</Link></li>
            <li><Link href="#" className="hover:underline">Warranty</Link></li>
            <li><Link href="#" className="hover:underline">Support</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-lg" />
              <span>
                SNK Global Consultancy Services <br />
                Ground, 288, Dr Ambedkar Marg, Near Circuit House, Sector 16A, Faridabad-121002, Haryana, India
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+91 8043842058</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>support@SNKGlobal.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} SNK Global Consultancy Services. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
