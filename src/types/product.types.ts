export interface Product {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  thumbnail?: string;
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
}
