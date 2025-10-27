import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Product from "../../../models/Products";

export async function GET(request: NextRequest) {
    await connectToDatabase();
    const url  = new URL(request.url!);
 const page = parseInt(url.searchParams.get("page") || "1");
 const limit = Math.min(parseInt(url.searchParams.get("limit") || "12"), 100);
 const cetagory = url.searchParams.get("cetagory");
 const search = url.searchParams.get("search");
 const sort = url.searchParams.get("sort");

 const filter: any = {};
 if (cetagory) filter.cetagory = cetagory;
  if (search) filter.$or = [
    { title: { $regex: search, $options: "i" } },
    { description: { $regex: search, $options: "i" } },
    { tags: { $regex: search, $options: "i" } },
    { brand: { $regex: search, $options: "i" } },
  ];

  const skip = (page - 1) * limit;
 const [data, total] = await Promise.all([
    Product.find(filter).sort(sort).skip(skip).limit(limit).lean(),
    Product.countDocuments(filter),
  ]);
  
  return NextResponse.json({
    data,
    meta: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  });
}


export async function POST(request: NextRequest) {
   await connectToDatabase();
   const body = await request.json();
if(!body.id || !body.tital || !body.description || !body.price || !body.image || !body.cetagory || !body.tags || !body.brand){
    return NextResponse.json({error: "All fields are required"}, {status: 400});
}

try {
    const created = await Product.create(body);
    return NextResponse.json({data:created}, {status: 201})
} catch (error : any) {

return NextResponse.json({error: error.message}, {status: 400});
    
}
}