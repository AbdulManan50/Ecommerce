import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Wishlist from "@/models/Wishlist";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const { userId } = await request.json();

  const wishlist = await Wishlist.findOne({ userId });
  if (!wishlist)
    return NextResponse.json({ error: "Wishlist not found" }, { status: 404 });

  wishlist.products = wishlist.products.filter(
    (pid) => pid.toString() !== params.id
  );
  await wishlist.save();

  return NextResponse.json({
    message: "Removed from wishlist",
    data: wishlist,
  });
}
