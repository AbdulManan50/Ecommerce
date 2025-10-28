import { Product } from "./product.types";

export interface WishlistItem {
  _id: string;
  product: Product;
}

export interface Wishlist {
  _id: string;
  userId: string;
  items: WishlistItem[];
  createdAt?: string;
  updatedAt?: string;
}
