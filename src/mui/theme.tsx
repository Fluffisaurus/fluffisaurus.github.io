import {
  Breakpoint,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

import muiBreakpoints from "./muiBreakpoints";
import muiColorSchemes from "./muiColorSchemes";
import muiTypography from "./muiTypography";
import muiButtonStyles from "./components/muiButton";
import muiContainer from "./components/muiContainer";
import muiGrid from "./components/muiGrid";
import muiList from "./components/muiList";
import muiMenuItem from "./components/muiMenuItem";
import muiDrawer from "./components/muiDrawer";
import { muiSpeedDial, muiSpeedDialAction } from "./components/muiSpeedDial";
import muiCssBaseline from "./components/muiCssBaseline";
import { Viewport } from "../components/styled/constants";

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

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // default: 0
    sm: false; // default: 600
    md: false; // default: 900
    lg: false; // default: 1200
    xl: false; // default: 1536
    mobile: true; // [0, 480)
    tablet: true; // [480, 769)
    laptop: true; // [769, 1279)
    desktop: true; // [1280, 1439)
    bigboi: true; // [1440, inf)
  }
}

let theme = createTheme({
  ...muiBreakpoints,
  ...muiColorSchemes,
  ...muiTypography,
  components: {
    ...muiButtonStyles,
    ...muiContainer,
    ...muiGrid,
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

const breakpoints: Breakpoint[] = [
  Viewport.mobile,
  Viewport.tablet,
  Viewport.laptop,
  Viewport.desktop,
  Viewport.bigboi,
];
theme = responsiveFontSizes(theme, { breakpoints });
export default theme;
