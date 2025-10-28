import api from "@/lib/axios";
import { Order } from "@/types/order.types";

// Get all orders
export const getOrders = async (): Promise<Order[]> => {
  const response = await api.get<Order[]>("/api/orders");
  return response.data;
};

// Get order by ID
export const getOrderById = async (id: string): Promise<Order> => {
  const response = await api.get<Order>(`/api/orders/${id}`);
  return response.data;
};

// Create new order
export const createOrder = async (orderData: Order): Promise<Order> => {
  const response = await api.post<Order>("/api/orders", orderData);
  return response.data;
};
