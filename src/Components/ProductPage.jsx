// components/ProductPage.js
"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  User,
  ChevronDown,
} from "lucide-react"; // Example icons

const ProductPage = ({ id }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("green");
  const [product, setProduct] = useState(null);

  console.log("Product ID:", id);

  const extractYouTubeID = (url) => {
    const regExp = /v=([^&]+)/;
    const match = url?.match(regExp);
    return match ? match[1] : null;
  };

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/product/${id}`);
      const data = await res.json();
      console.log("Fetched product:", data); // SAFE
      setProduct(data); // async update
    }

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const videoId = extractYouTubeID(product.videoDemo);
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;

  const colorMap = {
    yellow: "bg-yellow-400 border-yellow-400",
    green: "bg-teal-500 border-teal-500",
    grey: "bg-gray-400 border-gray-400",
  };

  return (
    <div className="min-h-screen bg-blue-100/50 flex items-center justify-center">
      <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* --- Main Product Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* === Left Column: Image and Designer Info === */}
          <div className="relative bg-gray-50 p-8 lg:p-16 flex flex-col justify-center min-h-[600px]">
            {/* Product Image */}
            <div className="flex items-center justify-center pt-24 pb-12">
              {product ? (
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-w-full h-auto object-contain"
                  style={{ maxHeight: "450px" }}
                />
              ) : (
                <p>Loading...</p>
              )}
            </div>

            {/* Image Navigation Arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-md hover:bg-white transition">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-3 rounded-full shadow-md hover:bg-white transition">
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* === Right Column: Details and Purchase === */}
          <div className="bg-[#0077b6]/20 p-8 lg:p-16 flex flex-col space-y-8">
            {/* Product Title and SKU */}
            <section>
              <h1 className="text-3xl font-light text-gray-900 leading-snug">
                {product.name}
              </h1>
              <p className="text-xs text-gray-400 mt-1">
                Item code: **123456**
              </p>
            </section>

            {/* Description */}
            <section className="space-y-2">
              <h2 className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
                Description
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                deleniti explicabo consequuntur facilis debitis doloribus,
                libero consectetur eveniet sequi atque! Ullam, voluptatem rem.
              </p>
            </section>

            {/* Price */}
            <section className="space-y-1">
              <h2 className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
                Price
              </h2>
              <div className="flex items-baseline space-x-3">
                <span className="text-4xl font-light text-gray-900">
                  ₹{product.price}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  {product.discountPrice}
                </span>
              </div>
            </section>

            {/* Quantity and Add to Cart */}
            <section className="space-y-2">
              <h2 className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
                Quantity
              </h2>
              <div className="flex space-x-4">
                {/* Quantity Selector */}
                <div className="relative w-1/3">
                  <select
                    className="w-full py-3 px-4 border border-gray-200 rounded-md appearance-none bg-gray-50 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#0077b6] focus:border-transparent"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>

                {/* Add to Cart Button */}
              </div>
            </section>

            {/* Buy Now Button */}
            <section className="flex gap-4 w-full">
              <button className="flex-1 w-1/2 py-3 px-6 bg-black rounded-full text-white font-semibold hover:bg-[#0072C6] transition-colors shadow-md">
                ADD TO CART
              </button>
              <button className="flex-1 w-1/2 py-3 px-6 bg-black rounded-full text-white font-semibold hover:bg-[#0072C6] transition-colors shadow-md">
                BUY NOW
              </button>
            </section>

            {/* Brochure Download & Video Demo Section */}
            <section className="space-y-6 mt-6">
              {/* Download Brochure */}
              {product.brochure && (
                <a
                  href={product.brochure}
                  download
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#0077b6] text-white font-semibold rounded-full shadow-md hover:bg-[#005f8a] transition"
                >
                  📄 Download Brochure
                </a>
              )}

              {/* Video Demo */}
              {product.video && (
                <div className="space-y-2">
                  <h2 className="uppercase text-xs tracking-widest text-gray-500 font-semibold">
                    Video Demo
                  </h2>

                  {/* YouTube Video Thumbnail */}
                  <a
                    href={product.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${
                        product.video.split("v=")[1]
                      }/maxresdefault.jpg`}
                      alt="Video Thumbnail"
                      className="w-full rounded-lg shadow-md group-hover:opacity-90 transition"
                    />
                    <div className="mt-2 text-sm text-[#0077b6] font-semibold group-hover:underline">
                      ▶ Watch Video Demo
                    </div>
                  </a>
                </div>
              )}
            </section>

            {/* Footer Links */}
            <footer className="pt-8 mt-auto border-t border-gray-100 flex justify-between text-xs text-gray-400 uppercase tracking-wider font-semibold">
              <a href="#" className="hover:text-gray-600">
                Details
              </a>
              <a href="#" className="hover:text-gray-600">
                Delivery
              </a>
              <a href="#" className="hover:text-gray-600">
                Reviews
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
