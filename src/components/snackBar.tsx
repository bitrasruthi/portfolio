import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";

export default function useSnackbarService() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const catchErrorSnackbar = (error: string | undefined) => {
    enqueueSnackbar(error, {
      variant: "error",
      action: (key) => (
        <IconButton onClick={() => closeSnackbar(key)} sx={{ color: "#FFF" }}>
          <CloseIcon />
        </IconButton>
      ),
    });
  };

  const catchSuccessSnackbar = (message: string) => {
    enqueueSnackbar(message, {
      variant: "success",
      action: (key) => (
        <IconButton onClick={() => closeSnackbar(key)} sx={{ color: "#FFF" }}>
          <CloseIcon />
        </IconButton>
      ),
    });
  };

  return {
    catchErrorSnackbar,
    catchSuccessSnackbar,
  };
}
