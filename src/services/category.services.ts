import { api } from "@/utils/api";

export const getAllCategories = async () => {
  const response = await api.get("/products/categories");

  return response;
};
