"use client";
import Image from "next/image";
import { useCart } from "@/app/Context/CartContext";
import { motion } from "framer-motion";
import Link from "next/link"

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="border rounded-4xl shadow-sm border-black/10 hover:scale-100 hover:bg-[#0077b6]/30 hover:shadow-lg transition-all duration-300 ease-in-out p-6 flex flex-col hover:cursor-pointer">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      <h2 className="text-base font-light mb-2 h-15 line-clamp-2">
        {product.name}
      </h2>

      
      <div className="mt-2">
        {product.discountPrice ? (
          <div className="flex items-center gap-2">
            <span className="text-base font-medium text-[#0077b6]">
              ₹{product.discountPrice}
            </span>
            <span className="line-through text-gray-400 text-sm">
              ₹{product.price}
            </span>
          </div>
        ) : (
          <span className="text-base font-medium text-gray-800">
            ₹{product.price}
          </span>
        )}
      </div>

    
      <div className="mt-5 flex gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" py-1.5 px-5 rounded-full bg-black text-sm text-white cursor-pointer"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </motion.button>
        <Link href={`/productSingle/${product.id}`}>
          <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="py-2 px-5 rounded-full bg-black text-sm text-white cursor-pointer"
          >
          View
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
