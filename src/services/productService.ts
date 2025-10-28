import api from "@/lib/axios";
import { Product } from "@/types/product.types";

// Get all products
export const getAllProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/api/products");
  return response.data;
};

// Get product by ID
export const getProductById = async (id: string): Promise<Product> => {
  const response = await api.get<Product>(`/api/products/${id}`);
  return response.data;
};
