"use client";
import { useCart } from "@/app/Context/CartContext";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    cartCount,
  } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold ml-2">Your Cart</h1>
      <p className="mb-6 ml-2 text-sm">
        <span className="font-bold">{cartCount} items</span> in your bag.
      </p>

      <div className="border-black/15 border rounded-3xl p-4">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-black/15 w-full p-4"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={100}
                        height={100}
                      />
                      <div>
                        <h2 className="font-light text-lg w-5/6">
                          {item.name}
                        </h2>
                        <p className="font-medium text-lg">₹{item.price}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-20 items-center justify-center text-lg">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 bg-[#B2EBF2]/60 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 bg-[#B2EBF2]/60 rounded"
                      >
                        +
                      </button>
                    </div>

                    <div className="w-full">
                      <p className="font-bold">₹{item.price * item.quantity}</p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 cursor-pointer"
                    >
                      <AiOutlineDelete className="text-3xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-end mt-2 mx-6 p-4 gap-8 ">
              <h2 className="px-4 text-xl font-bold">
                Total: ₹{getTotalPrice().toFixed(2)}
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={clearCart}
                  className="px-4 py-2 bg-black text-white rounded-full cursor-pointer"
                >
                  Clear Cart
                </button>
                <Link
                  href="/HomePage"
                  className="px-4 py-2 bg-[#B2EBF2]/80 font-medium rounded-full cursor-pointer"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
