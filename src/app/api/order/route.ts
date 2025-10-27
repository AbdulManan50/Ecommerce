import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Order from "@/models/Order";

export async function GET() {
  try {
    await connectToDatabase();
    const orders = await Order.find()
      .populate("userId", "name email")
      .sort({ createdAt: -1 });
    return NextResponse.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const newOrder = await Order.create({
      userId: body.userId,
      items: body.items,
      totalAmount: body.totalAmount,
      shippingAddress: body.shippingAddress,
      paymentMethod: body.paymentMethod,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Order created successfully!",
        order: newOrder,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create order" },
      { status: 500 }
    );
  }
}
