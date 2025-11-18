"use client";
import ProductCard from "@/Components/ProductCard";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link"
import { BsHandbag } from "react-icons/bs";

export default function AllProductsPage() {

  const [allProducts, setAllProducts] = useState([]);
  const [allPage, setAllPage] = useState(1);
  const [allTotal, setAllTotal] = useState(1);
  const limit = 6;

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


      <div className="relative h-auto md:h-auto lg:h-[300px] w-full lg:mt-0 mt-5">
              <div className="flex flex-col md:flex-row lg:flex-row h-full w-full gap-5">
                {/* LEFT CONTENT */}
                <div className="w-full h-1/2 md:h-full items-center md:items-start md:px-6 lg:px-3 text-center md:text-left lg:w-1/2 flex flex-col gap-2">
                  <h4 className="text-sm w-[80%] md:text-lg lg:text-xl font-semibold lg:w-full lg:ml-6 lg:mt-8">
                    <span className="text-[#0285CB]">Your </span>trusted supplier for superior oxygen and medical care equipment like{" "}
                    <span>
                      <motion.p
                        key={index}
                        className="text:sm h-10 md:text-lg lg:text-xl font-semibold text-[#0285CB]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                      >
                        {Items[index]}
                      </motion.p>
                    </span>
                  </h4>
                  <Link href="/AllCategories">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 lg:w-[160px] lg:h-12 w-40 h-10 lg:ml-6 rounded-full bg-black text-white font-semibold text-sm lg:text-base md:mt-5 lg:mt-4 hover:cursor-pointer"
                  >
                    Buy Here
                    <span className="text-base lg:text-lg flex items-center">
                      <BsHandbag />
                    </span>
                  </motion.button>
                </Link>
                </div>
      
                {/* RIGHT CAROUSEL STACK */}
                <div className="w-full h-1/2 md:h-full lg:w-1/2 flex md:items-center lg:items-start items-center justify-center relative pt-20">
                  {images.map((src, i) => {
                    const position = (i - index + images.length) % images.length;
      
                    let style = {};
                    if (position === 0) {
                      // CENTER (front)
                      style = { x: 0, scale: 1.4, zIndex: 3, opacity: 1 };
                    } else if (position === 1) {
                      // RIGHT
                      style = { x: 150, scale: 0.5, zIndex: 2, opacity: 0.3 };
                    } else {
                      // LEFT
                      style = { x: -150, scale: 0.5, zIndex: 2, opacity: 0.3 };
                    }
      
                    return (
                      <motion.img
                        key={i}
                        src={src}
                        className="absolute w-30 h-30 md:h-50 md:w-50 lg:w-40 lg:h-40 bg-[#0077b6]/40 object-contain rounded-full p-4 shadow-xl"
                        animate={style}
                        initial={false}
                        transition={{ duration: 0.8 }}
                      />
                    );
                  })}
                </div>
              </div>
          </div>
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
