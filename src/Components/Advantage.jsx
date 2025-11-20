"use client";

import {
  Truck,
  MessageCircle,
  Users,
  BadgeCheck,
} from "lucide-react";

export default function Advantages() {
  const advantages = [
    {
      title: "PAN India Delivery",
      desc: "We offer free express shipping to all customers on orders above Rs 5000.",
      icon: <Truck className="w-10 h-10 text-[#0077b6]" />,
    },
    {
      title: "Assurance of Ongoing Support",
      desc: "We are always ready to assist you. Just say Hello on WhatsApp.",
      icon: <MessageCircle className="w-10 h-10 text-[#0077b6]" />,
    },
    {
      title: "Qualified and Trained Team",
      desc: "A highly trained and knowledgeable team with years of experience in healthcare.",
      icon: <Users className="w-10 h-10 text-[#0077b6]" />,
    },
    {
      title: "100% Authentic Products",
      desc: "All products are 100% authentic, original and brand new.",
      icon: <BadgeCheck className="w-10 h-10 text-[#0077b6]" />,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Header */}
      <h1 className="h-[70px] lg:h-[90px] w-full flex items-center justify-center text-xl lg:text-3xl font-semibold bg-[#0077b6] text-white">
        Morpheus Advantage
      </h1>

      <h2 className="text-base lg:text-xl font-light text-center my-10">
        Why Customers Trust Us
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-5xl px-6 mb-16">
        {advantages.map((item, i) => (
          <div
            key={i}
            className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-5">
              {/* Icon */}
              <div className="flex-shrink-0 p-4 bg-[#e0f3ff] rounded-2xl shadow-sm">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-[#0077b6]">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
