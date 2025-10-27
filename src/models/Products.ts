import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProduct extends  Document{
    id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: {
    width?: number;
    height?: number;
    depth?: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const DimensionsSchema = new Schema(
  {
    width: Number,
    height: Number,
    depth: Number,
  },
  { _id: false }
);


const ProductSchema = new Schema<IProduct>(
  {
    id: { type: Number, unique: true, required: true }, 
    title: { type: String, required: true },
    description: String,
    category: String,
    price: { type: Number, required: true },
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    tags: [String],
    brand: String,
    sku: String,
    weight: Number,
    dimensions: DimensionsSchema,
  },
  { timestamps: true }
);

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
export default Product;