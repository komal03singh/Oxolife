"use client";
import React from "react";
import Image from "next/image";
import Card2Data from "@/Data/Card2Data";
import Card from "@/Components/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const managementData = [
  {
    name: "XYZ",
    role: "Operations & Strategy",
  },
  {
    name: "ABC",
    role: "Finance",
  },
  {
    name: "XYZ",
    role: "Operations & Strategy",
  },
  {
    name: "ABC",
    role: "Finance",
  },
  {
    name: "XYZ",
    role: "Operations & Strategy",
  },
  {
    name: "ABC",
    role: "Finance",
  },
];

const missionData = [
  {
    heading: "Improve Healthcare Awareness",
    content:
      "Empowering people with the right knowledge for better health outcomes.",
    imageUrl:
      "https://www.reshot.com/preview-assets/icons/YXRC94GWAZ/health-care-YXRC94GWAZ.svg",
  },
  {
    heading: "Ensure Therapy Comfort",
    content: "Providing devices designed to offer long-term comfort and ease.",
    imageUrl:
      "https://www.reshot.com/preview-assets/icons/BCJU4QZA32/health-insurance-BCJU4QZA32.svg",
  },
  {
    heading: "Deliver Exceptional Quality",
    content: "Trusted medical-grade equipment that meets global standards.",
    imageUrl:
      "https://www.reshot.com/preview-assets/icons/P9V3HZ65SM/like-marketing-P9V3HZ65SM.svg",
  },
];

const promiseData = [
  {
    heading: "100% Authentic Products",
    content: "Every product we deliver is certified and medically approved.",
  },
  {
    heading: "Quality Healthcare Brands",
    content:
      "We supply trusted brands including Philips, ResMed, Yuwell & more.",
  },
  {
    heading: "Trained Medical Team",
    content: "Expert guidance at every step of your therapy journey.",
  },
  {
    heading: "Stringent Healthcare Protocols",
    content: "Ensuring top-level safety and hygiene in all processes.",
  },
  {
    heading: "PAN India Remote Support",
    content: "Support available across India with instant remote assistance.",
  },
];

const productData = [
  {
    heading: "CPAP",
    content:
      "High-quality CPAP machines designed for comfortable sleep therapy.",
  },
  {
    heading: "BiPAP",
    content:
      "Advanced BiPAP solutions for ease of breathing and improved care.",
  },
  {
    heading: "Oxygen Concentrators",
    content:
      "Reliable oxygen therapy devices suitable for home & clinical use.",
  },
  {
    heading: "Senior Care",
    content:
      "Essential medical equipment designed for elderly comfort & support.",
  },
];

function AboutUs() {
  return (
    <div>
      <div className="px-14 mt-6">
        <div className="h-full w-full flex flex-col gap-3 justify-center items-center">
          <h3 className="text-4xl font-bold text-black">About Us</h3>
          <h4 className="text-center text-[#0077B6] text-xl font-medium md:text-3xl w-full mt-4">
            Your Trusted Partner in Respiratory Care Solutions
          </h4>
          <p className=" w-full text-center text-base font- md:text-lg ">
            We{" "}
            <span className="font-semibold text-black">
              SNK Global Consultancy Services
            </span>{" "}
            we specialize in providing top-notch respiratory care solutions,
            partnering with leading manufacturers to deliver innovative products
            that improve patient outcomes. As an authorized channel partner for
            ResMed, Philips, Fujifilm Healthcare, Oxymed, Hugemed, Youwell and
            other renowned brands, we offer a comprehensive range of products
            and services designed to meet the unique needs of healthcare
            professionals and patients alike.{" "}
          </p>
        </div>
      </div>

      <div className="w-full py-10 mb-6 px-6 lg:px-14">
        <h3 className="text-sm font-medium bg-[#0077b6]/30 inline-block px-4 py-1 rounded-full">
          Our Management
        </h3>
        <h2 className="text-3xl md:text-3xl font-medium mt-3 mb-8">
          Meet Our Leadership Team
        </h2>

        <div className="flex w-full gap-6">
          {/* Person 1 */}
          <div className="w-1/2 flex justify-center">
            <div className="relative group">
              <Image
                src="/RajeevAnand.jpeg"
                alt="Rajeev Anand"
                width={400}
                height={400}
                className="rounded-lg"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 rounded-lg 
                        flex flex-col justify-end p-6
                        transition-opacity duration-300"
              >
                <h3 className="text-white text-2xl font-semibold">
                  Mr. Rajeev Anand
                </h3>
                <p className="text-white/80 text-base">
                  Founder & Managing Director
                </p>
              </div>
            </div>
          </div>

          {/* Person 2 */}
          <div className="w-1/2 flex justify-center">
            <div className="relative group">
              <Image
                src="/RituSharma.jpeg"
                alt="Ritu Sharma"
                width={400}
                height={400}
                className="rounded-lg"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 rounded-lg 
                        flex flex-col justify-end p-6
                        transition-opacity duration-300"
              >
                <h3 className="text-white text-2xl font-semibold">
                  Mrs. Ritu Sharma
                </h3>
                <p className="text-white/80 text-base">Area Sales Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-0 lg:px-28 lg:py-12 gap-10 lg:container lg:mx-auto mt-10">
        <div className="h-full lg:w-1/2 flex flex-col gap-3 items-start lg:pr-12">
          <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base bg-[#0077b6]/30 text-black">
            Our Services
          </h3>
          <h4 className=" text-left text-3xl font-medium md:text-4xl max-w-md">
            Reliable Medical Equipment Delivery
          </h4>
          <p className=" max-w-screen-md text-pretty text-left text-lg font-light md:text-xl text-[#787882]">
            We bring advanced, high-performance medical devices right to your
            facility, ensuring quality care and seamless operations.
          </p>
        </div>

        <div className="w-1/2 h-full flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
          {Card2Data.map((data, index) => (
            <Card
              key={index}
              heading={data.heading}
              content={data.content}
              imageUrl={data.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-0 lg:px-28 lg:py-12 gap-10 lg:container lg:mx-auto">
        <div className="h-full lg:w-1/2 flex flex-col gap-3 items-start lg:pr-12">
          <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base bg-[#0077b6]/30 text-black">
            Our Mission
          </h3>
          <h4 className=" text-left text-3xl font-medium md:text-4xl max-w-md">
            Empowering Better Healthcare for Everyone
          </h4>
          <p className=" max-w-screen-md text-pretty text-left text-lg font-light md:text-xl text-[#787882]">
            We aim to make quality healthcare accessible by educating patients,
            improving awareness, and ensuring they feel confident and supported
            throughout their therapy journey.
          </p>
        </div>

        <div className="w-1/2 h-full flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
          {missionData.map((data, index) => (
            <Card
              key={index}
              heading={data.heading}
              content={data.content}
              imageUrl={data.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
