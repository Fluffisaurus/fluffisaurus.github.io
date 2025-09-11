import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import muiColorSchemes from "./muiColorSchemes";
import muiTypography from "./muiTypography";
import muiButtonStyles from "./components/muiButton";
import muiList from "./components/muiList";
import muiMenuItem from "./components/muiMenuItem";
import muiDrawer from "./components/muiDrawer";
import muiCssBaseline from "./components/muiCssBaseline";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    navlink: true;
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
    ...muiList,
    ...muiMenuItem,
    ...muiDrawer,
    ...muiCssBaseline,
  },
});

theme = responsiveFontSizes(theme);
export default theme;
