"use client";
import ProductCard from "@/Components/ProductCard";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsHandbag } from "react-icons/bs";

export default function AllProductsPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [allPage, setAllPage] = useState(1);
  const [allTotal, setAllTotal] = useState(1);
  const limit = 12;

  useEffect(() => {
    async function fetchAll() {
      const res = await fetch(`/api/products?page=${allPage}&limit=${limit}`);
      const data = await res.json();
      setAllProducts(data.data);
      setAllTotal(data.totalPages);
    }
    fetchAll();
  }, [allPage]);

  const images = [
    "/homepageAsset/oxygenConcentrator.png",
    "/homepageAsset/CPAP.png",
    "/homepageAsset/endoscopy-camera.png",
  ];
  const Items = [
    "Home and Portable Oxygen Concentrators",
    "CPAP/BiPAP",
    "Endoscopy Cameras",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-bold ">All Products</h1>
        <p className="text-sm font-medium pt-2">
          Explore our wide range of Oxygen Conecentrators and CPAP/BiPAP
        </p>
      </div>
      <div className="flex gap-3 my-5">
        <Link href={`/AllCategories/oxygen-concentrators`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="py-2 px-5 rounded-full bg-black text-sm text-white cursor-pointer"
          >
            Oxygen Concentrators
          </motion.button>
        </Link>
        <Link href={`/AllCategories/cpap`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="py-2 px-5 rounded-full bg-black text-sm text-white cursor-pointer"
          >
            CPAP
          </motion.button>
        </Link>
        <Link href={`/AllCategories/bipap`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="py-2 px-5 rounded-full bg-black text-sm text-white cursor-pointer"
          >
            BiPAP
          </motion.button>
        </Link>
        <Link href={`/AllCategories/Masks`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="py-2 px-5 rounded-full bg-black text-sm text-white cursor-pointer"
          >
            Masks
          </motion.button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination page={allPage} total={allTotal} setPage={setAllPage} />
    </div>
  );
}
function Pagination({ page, total, setPage }) {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="px-4 py-2">
        Page {page} of {total}
      </span>

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, total))}
        disabled={page === total}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
