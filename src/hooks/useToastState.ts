import { create } from "zustand";

export const useToastState = create<IToastState>((set) => ({
  isToastShow: false,
  toastMessage: "",
  toastType: "success",
  onClose: null,
  showToast: (toastMessage, toastType, onClose) =>
    set({
      isToastShow: true,
      toastMessage: toastMessage,
      toastType: toastType,
      onClose: onClose
    }),
  unShowToast: () => set({
    isToastShow: false
  })
}));
