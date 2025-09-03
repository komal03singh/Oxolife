"use client";
import ProductCard from "@/Components/ProductCard";
import { useState, useEffect } from "react";

export default function CPAPandBiPAPage() {
  const [wheelchairProducts, setWheelchairProducts] = useState([]);
  const [wheelchairPage, setWheelchairPage] = useState(1);
  const [wheelchairTotal, setWheelchairTotal] = useState(1);
  const limit = 6;

  useEffect(() => {
    async function fetchWheelchairs() {
      const resWheelchairs = await fetch(
        `/api/products?type=wheelchairs&page=${wheelchairPage}&limit=${limit}`
      );
      const data = await resWheelchairs.json();
      setWheelchairProducts(data.data);
      setWheelchairTotal(data.totalPages);
    }
    fetchWheelchairs();
  }, [wheelchairPage]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mt-10 mb-6">Wheelchairs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wheelchairProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        page={wheelchairPage}
        total={wheelchairTotal}
        setPage={setWheelchairPage}
      />
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
