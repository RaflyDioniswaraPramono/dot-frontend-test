import { api } from "@/utils/api";

export const getAllProducts = async () => {
  const response = await api.get("/products");

  return response;
};

export const getProductByCategory = async (productCategory: string) => {
  const response = await api.get(`/products/category/${productCategory}`);

  return response;
};

export const getProductById = async (productId: string | string[] | undefined) => {
  const response = await api.get(`/products/${productId}`);

  return response;
};
