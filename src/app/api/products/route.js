import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/connectToDB";
import Product from "@/models/products.model";

export async function GET(request) {
  await dbConnect();

  const { searchParams } = new URL(request.url);

  const type = searchParams.get("type"); // oxygen-concentrator
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 9;

  const skip = (page - 1) * limit;

  // 🔹 Build query dynamically (same as dummy filter)
  const query = {};

  if (type) {
    query.type = type;
    // OR if DB value is "oxygen concentrator"
    // query.type = { $regex: new RegExp(`^${type.replace("-", " ")}$`, "i") };
  }

  // 🔹 Fetch paginated data
  const products = await Product.find(query)
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  // 🔹 Count total filtered products
  const total = await Product.countDocuments(query);

  return NextResponse.json({
    data: products,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}
