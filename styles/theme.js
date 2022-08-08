import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#E50914",
      light: "#ffa726",
      dark: "#BB1D24",
      contrastText: "#F5F5F1",
    },
    secondary: {
      main: "#f57c00",
      light: "#ffa726",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
  typography: {
    fontFamily: "monospace",
  },
});
