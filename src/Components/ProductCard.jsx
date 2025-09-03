"use client";
import Image from "next/image";
import { useCart } from "@/app/Context/CartContext";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="border rounded-4xl shadow-sm border-black/10 hover:scale-100 hover:bg-[#B2EBF2]/30 hover:shadow-lg transition-all duration-300 ease-in-out p-6 flex flex-col hover:cursor-pointer">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      <h2 className="text-lg font-light mb-2 h-15 line-clamp-2">
        {product.name}
      </h2>

      
      <div className="mt-2">
        {product.discountPrice ? (
          <div className="flex items-center gap-2">
            <span className="text-xl font-medium text-[#26C6DA]">
              ₹{product.discountPrice}
            </span>
            <span className="line-through text-gray-400 text-sm">
              ₹{product.price}
            </span>
          </div>
        ) : (
          <span className="text-xl font-medium text-gray-800">
            ₹{product.price}
          </span>
        )}
      </div>

    
      <div className="mt-5 flex gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" py-2 px-5 rounded-full bg-black text-white cursor-pointer"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="py-2 px-5 rounded-full bg-black text-white cursor-pointer"
        >
          View
        </motion.button>
      </div>
    </div>
  );
}
