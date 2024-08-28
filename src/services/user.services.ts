import { api } from "@/utils/api";

export const getUserById = async (userId: number) => {
  const response = await api.get(`/users/${userId}`);

  return response;
};
