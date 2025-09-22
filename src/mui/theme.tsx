import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import muiColorSchemes from "./muiColorSchemes";
import muiTypography from "./muiTypography";
import muiButtonStyles from "./components/muiButton";
import muiContainer from "./components/muiContainer";
import muiList from "./components/muiList";
import muiMenuItem from "./components/muiMenuItem";
import muiDrawer from "./components/muiDrawer";
import { muiSpeedDial, muiSpeedDialAction } from "./components/muiSpeedDial";
import muiCssBaseline from "./components/muiCssBaseline";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    navlink: true;
    cardDetails: true;
  }
}

declare module "@mui/material/styles" {
  interface TypeBackground {
    highlight: string;
    globalNav: string;
  }
}

let theme = createTheme({
  ...muiColorSchemes,
  ...muiTypography,
  components: {
    ...muiButtonStyles,
    ...muiContainer,
    ...muiList,
    ...muiMenuItem,
    ...muiDrawer,
    ...muiSpeedDial,
    ...muiSpeedDialAction,
    ...muiCssBaseline,
  },
  cssVariables: {
    colorSchemeSelector: "class",
    // generated stylesheet:
    // --custom-mui-theme-primary-main: ...;
    cssVarPrefix: "custom-mui-theme",
  },
});

theme = responsiveFontSizes(theme);
export default theme;
