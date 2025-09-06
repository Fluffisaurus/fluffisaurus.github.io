import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: ["Inconsolata, Source Code Pro, Karla"].join(","),
    h3: {
      fontFamily: "Source Code Pro",
      fontWeight: 400,
      marginBottom: 15,
    },
    h4: {
      fontFamily: "Source Code Pro",
      fontWeight: 400,
      marginBottom: 10,
    },
    h5: {
      fontFamily: "Source Code Pro",
      fontWeight: 400,
      marginBottom: 5,
    },
    subtitle1: {
      fontFamily: "Inconsolata",
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily: "Inconsolata",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "Karla",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Karla",
      fontWeight: 400,
      fontStyle: "italic",
    },
    caption: {
      fontFamily: "Karla",
      fontWeight: 400,
      fontStyle: "italic",
    },
    h1: undefined,
    h2: undefined,
    h6: undefined,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: { textDecoration: "none" },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inconsolata';
          font-style: normal;
          font-weight: 700;
          font-stretch: 100%;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/inconsolata/v37/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp2I7WR32lw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'Inconsolata';
          font-style: normal;
          font-weight: 400;
          font-stretch: 100%;
          src: url(https://fonts.gstatic.com/s/inconsolata/v37/QlddNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLyya15.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'Source Code Pro';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/sourcecodepro/v30/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevW.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
                
        @font-face {
          font-family: 'Karla';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/karla/v32/qkB9XvYC6trAT55ZBi1ueQVIjQTD-JrIH2G7nytkHRyQ8p4wUje6bg.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'Karla';
          font-style: italic;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/karla/v32/qkBKXvYC6trAT7RQNNK2EG7SIwPWMNlCV3lIb7M.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
