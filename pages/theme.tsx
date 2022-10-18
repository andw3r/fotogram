import { createTheme } from "@mui/material/styles";
import { breakpoints } from "@mui/system";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0A72AD",
      dark: "#242527",
      light: "#C4C4C4",
    },
  },
  typography: {
    fontFamily: ["Poppins", "DM Sans"].join(","),
    body1: { fontFamily: "Poppins" },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

// h1
theme.typography.h1 = {
  color: "#C4C4C4",
  fontWeight: 500,
  [theme.breakpoints.up("xs")]: {
    fontSize: "32px",
    lineHeight: "48px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "48px",
    lineHeight: "68px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "64px",
    lineHeight: "96px",
  },
};

// h2
theme.typography.h2 = {
  color: "#242527",
  fontWeight: 600,
  [theme.breakpoints.up("xs")]: {
    fontSize: "28px",
    lineHeight: "42px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "42px",
    lineHeight: "59px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
    lineHeight: "46px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "46px",
    lineHeight: "69px",
  },
};

// h3
theme.typography.h3 = {
  color: "#FFFFFF",
  fontWeight: 600,
  [theme.breakpoints.up("xs")]: {
    fontSize: "18px",
    lineHeight: "32px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "24px",
    lineHeight: "44px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "32px",
    lineHeight: "54px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "36px",
    lineHeight: "54px",
  },
};

// h4
theme.typography.h4 = {
  color: "#242527",
  fontWeight: 600,
  lineHeight: "59px",
  [theme.breakpoints.up("xs")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "28px",
  },
};

// h5
theme.typography.h5 = {
  color: "#242527",
  fontWeight: 600,
  lineHeight: "59px",
  [theme.breakpoints.up("xs")]: {
    fontSize: "18px",
    lineHeight: "25px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
    lineHeight: "32px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "24px",
    lineHeight: "36px",
  },
};

// h6
theme.typography.h6 = {
  color: "#242527",
  fontWeight: 600,
  [theme.breakpoints.up("xs")]: {
    fontSize: "15px",
    lineHeight: "19px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
};

// subtitle1
theme.typography.subtitle1 = {
  color: "#C4C4C4",
  fontWeight: 400,
  [theme.breakpoints.up("xs")]: {
    fontSize: "16px",
    lineHeight: "27px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "18px",
    lineHeight: "37px",
  },
};
