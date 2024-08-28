interface IBackdropLoaderState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

interface IToastState {
  isToastShow: boolean;
  toastMessage: string;
  toastType: string;
  onClose: any;
  showToast: (toastMessage: string, toastType: string, onClose: any) => void;
  unShowToast: () => void;
}