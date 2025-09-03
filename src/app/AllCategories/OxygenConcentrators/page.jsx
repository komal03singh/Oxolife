"use client";
import ProductCard from "@/Components/ProductCard";
import { useState, useEffect } from "react";

export default function OxygenConcentratorsPage() {
  const [oxygenProducts, setOxygenProducts] = useState([]);
  const [oxygenPage, setOxygenPage] = useState(1);
  const [oxygenTotal, setOxygenTotal] = useState(1);
  const limit = 6;

  useEffect(() => {
    async function fetchOxygen() {
      const resOxygen = await fetch(
        `/api/products?type=oxygen-concentrators&page=${oxygenPage}&limit=${limit}`
      );
      const data = await resOxygen.json();
      setOxygenProducts(data.data);
      setOxygenTotal(data.totalPages);
    }
    fetchOxygen();
  }, [oxygenPage]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mt-10 mb-6">Oxygen Concentrators</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {oxygenProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        page={oxygenPage}
        total={oxygenTotal}
        setPage={setOxygenPage}
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
