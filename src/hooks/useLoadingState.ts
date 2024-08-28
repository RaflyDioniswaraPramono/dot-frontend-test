import { create } from "zustand";

export const useLoadingState = create<IBackdropLoaderState>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) =>
    set({
      isLoading: isLoading,
    }),
}));
