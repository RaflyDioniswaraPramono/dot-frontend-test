import { api } from "@/utils/api";

export const signIn = async (data: UserSignInDto) => {
  const response = await api.post("/auth/login", data);

  return response;
};
