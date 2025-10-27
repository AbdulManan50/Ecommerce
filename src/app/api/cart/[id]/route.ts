import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Cart from "@/models/Cart";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const { userId } = await request.json();
  const cart = await Cart.findOne({ userId });
  if (!cart)
    return NextResponse.json({ error: "Cart not found" }, { status: 404 });

  cart.items = cart.items.filter(
    (item) => item.productId.toString() !== params.id
  );
  await cart.save();

  return NextResponse.json({ message: "Item removed", data: cart });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const { userId, quantity } = await request.json();

  const cart = await Cart.findOne({ userId });
  if (!cart)
    return NextResponse.json({ error: "Cart not found" }, { status: 404 });

  const item = cart.items.find((i) => i.productId.toString() === params.id);
  if (!item)
    return NextResponse.json({ error: "Item not in cart" }, { status: 404 });

  item.quantity = quantity;
  await cart.save();

  return NextResponse.json({ message: "Quantity updated", data: cart });
}
