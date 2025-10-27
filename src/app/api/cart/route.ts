import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Cart from "@/models/Cart";
import Product from "@/models/Products";

export async function GET(request: NextRequest) {
  await connectToDatabase();
  const userId = request.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ error: "User id is required" }, { status: 400 });
  }
  const cart = await Cart.findOne({ userId })
    .populate("items.productId")
    .lean();
  return NextResponse.json({ data: cart || { userId, items: [] } });
}

export async function POST(request: NextRequest) {
  await connectToDatabase();
  const { userId, productId, quantity } = await request.json();
  if (!userId || !productId) {
    return NextResponse.json(
      { error: "userId and productId are required" },
      { status: 400 }
    );
  }
  const product = await Product.findById(productId);
  if (!product)
    return NextResponse.json({ error: "Invalid product" }, { status: 404 });
  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = await Cart.create({
      userId,
      items: [{ productId, quantity: quantity || 1 }],
    });
  } else {
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    if (existingItem) {
      existingItem.quantity += quantity || 1;
    } else {
      cart.items.push({ productId, quantity: quantity || 1 });
    }
    await cart.save();
  }
  return NextResponse.json({ message: "Item added to cart", data: cart });
}
