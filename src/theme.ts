import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#F4F7FF",
    },
    primary: {
      main: "#4A72FF",
      light: "#4A72FF0D",
      dark: "#0C1B4D",
    },
  },
  typography: {
    fontFamily: ["DM Sans", "Source Sans Pro", "Inter"].join(","),
    caption: {
      fontSize: 14,
      fontFamily: "Source Sans Pro",
      fontWeight: 600,
      lineHeight: "42px",
      letterSpacing: "1.6px",
    },
    h2: {
      fontSize: 28,
      fontFamily: "DM Sans",
      fontWeight: 400,
      lineHeight: "42px",
    },
    body1: {
      color: "#0C1B4D99",
      fontSize: 16,
      fontFamily: "Source Sans Pro",
      fontWeight: 400,
      lineHeight: "26px",
    },
    subtitle1: {
      color: "#000",
      fontSize: 18,
      fontFamily: "DM Sans",
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
});

export { theme };
