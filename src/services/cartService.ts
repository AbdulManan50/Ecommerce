import api from "@/lib/axios";
import { Cart } from "@/types/cart.types";

// Get cart
export const getCart = async (): Promise<Cart> => {
  const response = await api.get<Cart>("/api/cart");
  return response.data;
};

// Add to cart
export const addToCart = async (
  productId: string,
  quantity: number
): Promise<Cart> => {
  const response = await api.post<Cart>("/api/cart", { productId, quantity });
  return response.data;
};

// Remove from cart
export const removeFromCart = async (id: string): Promise<Cart> => {
  const response = await api.delete<Cart>(`/api/cart/${id}`);
  return response.data;
};

// Update quantity
export const updateCartQuantity = async (
  id: string,
  quantity: number
): Promise<Cart> => {
  const response = await api.put<Cart>(`/api/cart/${id}`, { quantity });
  return response.data;
};
