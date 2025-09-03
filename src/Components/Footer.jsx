"use client";
import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black/80 text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <p className="text-sm leading-relaxed">
            OxoLife provides trusted, certified medical equipment—from oxygen 
            concentrators to mobility aids—ensuring comfort, safety, and timely 
            care for patients and caregivers.
          </p>
        </div>

        {/* Shop Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/AllCategories/OxygenConcentrators" className="hover:underline">Oxygen Concentrators</Link></li>
            <li><Link href="/AllCategories/CPAPandBiPAP" className="hover:underline">CPAP & BiPAP Machines</Link></li>
            <li><Link href="/AllCategories/Wheelchairs" className="hover:underline">Wheelchairs</Link></li>
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
              <FaMapMarkerAlt className="mt-1" />
              <span>
                OxoLife Healthcare Pvt Ltd <br />
                Lorem ipsum dolor sit, India
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+91 98XXX 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>support@oxolife.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} OxoLife. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
