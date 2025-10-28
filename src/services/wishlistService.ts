import api from "@/lib/axios";
import { Wishlist } from "@/types/wishlist.types";

// Get wishlist
export const getWishlist = async (): Promise<Wishlist> => {
  const response = await api.get<Wishlist>("/api/wishlist");
  return response.data;
};

// Add to wishlist
export const addToWishlist = async (productId: string): Promise<Wishlist> => {
  const response = await api.post<Wishlist>("/api/wishlist", { productId });
  return response.data;
};

// Remove from wishlist
export const removeFromWishlist = async (id: string): Promise<Wishlist> => {
  const response = await api.delete<Wishlist>(`/api/wishlist/${id}`);
  return response.data;
};
