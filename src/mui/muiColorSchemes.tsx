import { darken } from "@mui/material/styles";

const muiColorSchemes = {
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#fff3de",
          paper: "white",
          highlight: "#1fc7cd59",
          pdf: darken("#fff3de", 0.15),
          globalNav: "white",
        },
        primary: {
          main: "#5399da",
          contrastText: "black",
        },
        secondary: {
          main: "#aa51f73F",
          contrastText: "black",
        },
        text: {
          primary: "black",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#30383bff",
          paper: "#1d2025",
          highlight: "#147F8259",
          globalNav: "black",
        },
        primary: {
          main: "#53d8daff",
          contrastText: "#fff3de",
        },
        secondary: {
          main: "#9d2dff2d",
          contrastText: "#fff3de",
        },
        text: {
          primary: "#fff3de",
        },
      },
    },
  },
};

export default muiColorSchemes;
