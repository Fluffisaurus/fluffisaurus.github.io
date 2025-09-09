import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import muiPalette from "./muiPalette"
import muiTypography from "./muiTypography";
import muiButtonStyles from './components/muiButton'
import muiList from "./components/muiList"
import muiMenuItem from "./components/muiMenuItem"
import muiCssBaseline from "./components/muiCssBaseline"

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    navlink: true;
  }
}

let theme = createTheme({
  colorSchemes:{
    dark: true,
    light: true,
  },
  ...muiPalette,
  ...muiTypography,
  components: {
    ...muiButtonStyles,
    ...muiList,
    ...muiMenuItem,
    ...muiCssBaseline
  },
});

theme = responsiveFontSizes(theme);
export default theme;
