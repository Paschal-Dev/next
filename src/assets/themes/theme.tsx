import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    primary: {
      main: "#009FDD",
      // light: "#F5FBFE",
      // dark: "#28304E",
    },
    secondary: {
      main: "#FEC84B",
      // light: "#FDDE80",
    },
    // background: {
    //   default: "#FBFBFB",
    // },
    // success: {
    //   main: "#12B76A",
    //   light: "#D1FADF",
    // },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0px",
          paddingLeft: "0px",
          paddingRight: "0px",
          textTransform: "capitalize",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#fff",
          ":hover": { color: "#009FDD" },
          cursor: "pointer",
        },
      },
    },
  },
});
