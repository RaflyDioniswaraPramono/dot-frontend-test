import { useToastState } from "@/hooks/useToastState";
import { useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const { isToastShow, toastMessage, onClose, toastType, unShowToast } = useToastState();

  useEffect(() => {
    if (isToastShow) {
      toast(toastMessage, {
        position: "top-right",
        autoClose: 1000,
        onClose: () => {
          unShowToast();

          if (onClose !== null) {
            onClose();
          }
        },
        type: toastType === "error" ? "error" : "success",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }, [isToastShow, onClose, toastMessage, toastType, unShowToast]);

  return <ToastContainer />;
};

export default Toast;
