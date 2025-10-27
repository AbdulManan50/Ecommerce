import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Wishlist from "@/models/Wishlist";
import Product from "@/models/Products";

export async function GET(request: NextRequest) {
  await connectToDatabase();
  const userId = request.nextUrl.searchParams.get("userId");
  if (!userId)
    return NextResponse.json({ error: "userId required" }, { status: 400 });
  const wishlist = await Wishlist.findOne({ userId })
    .populate("products")
    .lean();
  return NextResponse.json({ data: wishlist || { userId, products: [] } });
}

export async function POST(request: NextRequest) {
  await connectToDatabase();
  const { userId, productId } = await request.json();
  if (!userId || !productId) {
    return NextResponse.json(
      { error: "userId and productId required" },
      { status: 400 }
    );
  }

  const product = await Product.findById(productId);
  if (!product)
    return NextResponse.json({ error: "Invalid product" }, { status: 404 });

  let wishlist = await Wishlist.findOne({ userId });

  if (!wishlist) {
    wishlist = await Wishlist.create({ userId, products: [productId] });
  } else {
    if (wishlist.products.includes(productId)) {
      return NextResponse.json({ message: "Already in wishlist" });
    }
    wishlist.products.push(productId);
    await wishlist.save();
  }

  return NextResponse.json({ message: "Added to wishlist", data: wishlist });
}
