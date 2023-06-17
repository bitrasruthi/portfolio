import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Box, ThemeProvider, styled } from "@mui/material";
import { SnackbarProvider } from "notistack";
import theme from "./styles/theme.tsx";
import { BrowserRouter } from "react-router-dom";

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
    <ThemeProvider theme={theme}>
      <StyledSnackbarProvider
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        maxSnack={10}
      >
        <BrowserRouter>
          <Box
            sx={{
              width: "100%",
              height: " 100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: "url('../public/images/planet.jpg') !important",
              position: "absolute",
              zIndex: -1111,
            }}
          >
            <App />
          </Box>
        </BrowserRouter>
      </StyledSnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
