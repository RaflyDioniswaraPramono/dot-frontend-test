import { useLoadingState } from "@/hooks/useLoadingState";
import { Backdrop, CircularProgress } from "@mui/material";

const BackdropLoader = () => {
  const { isLoading } = useLoadingState();

  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropLoader;
