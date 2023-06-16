import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#111",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "roboto-regular",
  },
});

export default theme;
