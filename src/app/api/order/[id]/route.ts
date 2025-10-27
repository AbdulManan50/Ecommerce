import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Order from "@/models/Order";

// 🧾 Get single order
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const order = await Order.findById(params.id).populate("userId", "name email");
    if (!order)
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch order" },
      { status: 500 }
    );
  }
}

// ✏️ Update order (e.g. status)
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const updatedOrder = await Order.findByIdAndUpdate(
      params.id,
      { $set: body },
      { new: true }
    );
    if (!updatedOrder)
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    return NextResponse.json({
      success: true,
      message: "Order updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update order" },
      { status: 500 }
    );
  }
}

// ❌ Delete order
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const deleted = await Order.findByIdAndDelete(params.id);
    if (!deleted)
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    return NextResponse.json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting order:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete order" },
      { status: 500 }
    );
  }
}
