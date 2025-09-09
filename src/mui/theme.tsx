import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import muiPalette from "./muiPalette"
import muiTypography from "./muiTypography";
import muiButtonStyles from './components/muiButton'
import muiCssBaseline from "./components/muiCssBaseline"

let theme = createTheme({
  ...muiPalette,
  ...muiTypography,
  components: {
    ...muiButtonStyles,
    ...muiCssBaseline,
  },
});

theme = responsiveFontSizes(theme);
export default theme;
