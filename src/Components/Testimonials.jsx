"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Caregiver",
    text: "The oxygen concentrator I ordered arrived on time and has been a lifesaver for my father. Reliable products and excellent customer support.",
  },
  {
    id: 2,
    name: "Anita Desai",
    role: "Patient",
    text: "I purchased a CPAP machine and it has improved my sleep drastically. The team guided me in selecting the right model for my needs.",
  },
  {
    id: 3,
    name: "Dr. Mehul Shah",
    role: "Pulmonologist",
    text: "I recommend this platform to my patients. The equipment is certified, easy to use, and delivered quickly.",
  },
  {
    id: 4,
    name: "Sunita Reddy",
    role: "Customer",
    text: "The wheelchair we bought for my mother is lightweight and very comfortable. Thank you for making her mobility easier.",
  },
];

function Testimonials() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="h-[90px] w-full flex items-center justify-center text-3xl font-semibold bg-[#B2EBF2]/60">
        Customer Reviews
      </h1>
      <h2 className="text-3xl font-light text-center m-10">
        Hear From Our Customers
      </h2>

      <div className="relative flex h-[300px] items-center overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 80,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-[300px] rounded-2xl shadow-lg p-6 flex flex-col gap-3 bg-white"
            >
              <p className="text-base">“{t.text}”</p>
              <div>
                <h3 className="font-semibold">{t.name}</h3>
                <span className="text-sm text-[#43c1d1]">{t.role}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="absolute left-full flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 80,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i + "-copy"}
              className="min-w-[300px] max-w-[300px] rounded-2xl shadow-lg p-6 flex flex-col gap-3 bg-white"
            >
              <p className="text-base">“{t.text}”</p>
              <div>
                <h3 className="font-semibold">{t.name}</h3>
                <span className="text-sm text-[#43c1d1]">{t.role}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
