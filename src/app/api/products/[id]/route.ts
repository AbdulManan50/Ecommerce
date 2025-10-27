import { NextRequest , NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Product from "../../../../models/Products";


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    await connectToDatabase();
    const product = await Product.findOne({id:Number(params.id)}).lean();

    if(!product){
        return NextResponse.json({error: "Product not found"})
    }

}
