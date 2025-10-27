import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Product from "../../../../models/Products";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const product = await Product.findOne({ id: Number(params.id) }).lean();

  if (!product) {
    return NextResponse.json({ error: "Product not found" });
  }
  return NextResponse.json({ data: product });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const idstr = params.id;
  const body = await request.json();
  try {
    const update = await Product.findOneAndUpdate(
      { id: Number(idstr) },
      { $set: body },
      { new: true }
    );
    if (!update) {
      return NextResponse.json({ error: "Product not found" }, { status: 400 });
    }
    return NextResponse.json({ data: update }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();
  const idstr = params.id;
  const deleted = await Product.findOneAndDelete({ id: Number(idstr) });
  if (!deleted) {
    return NextResponse.json({ error: "Product not found" }, { status: 400 });
  }
  return NextResponse.json({ data: deleted }, { status: 200 });
}
