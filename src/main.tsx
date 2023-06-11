import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { styled } from "@mui/material";
import { SnackbarProvider } from "notistack";

const StyledSnackbarProvider = styled(SnackbarProvider)`
  &.SnackbarItem-variantSuccess {
    background: #fff;
    color: #111;
  }
  &.SnackbarItem-variantError {
    background: rgba(253, 29, 29, 1);
    color: #fff;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledSnackbarProvider
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      maxSnack={10}
    >
      <App />
    </StyledSnackbarProvider>
  </React.StrictMode>
);
