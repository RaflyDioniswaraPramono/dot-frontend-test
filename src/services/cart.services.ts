import { api } from "@/utils/api"

export const getCartByUser = async (userId: number) => {
  const response = await api.get(`/carts/user/${userId}`);

  return response;
}