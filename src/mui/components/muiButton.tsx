import type {} from "@mui/material/themeCssVarsAugmentation";
import { ButtonProps } from "@mui/material";
import { CSSObject, Theme } from "@mui/material/styles";

const muiButtonNavlinkFontSizes = {
  fontSize: { xs: 18, sm: 20, md: 24, lg: 26 },
};

export const navLinkButtonProps: ButtonProps = {
  size: "large",
  variant: "navlink",
  sx: { ...muiButtonNavlinkFontSizes },
};

const muiButtonGlobalNavFontSizes = {
  fontSize: { xs: 19, sm: 20, md: 21, lg: 22 },
};

export const globalNavButtonProps: ButtonProps = {
  size: "medium",
  variant: "navlink",
  sx: { ...muiButtonGlobalNavFontSizes },
};

const muiButtonStyles = {
  MuiButton: {
    variants: [
      {
        props: { variant: "navlink" as const },
        style: {
          fontFamily: "Source Code Pro",
          fontWeight: 600,
          minWidth: 0,
        },
      },
      {
        props: { variant: "cardDetails" as const },
        style: {
          fontFamily: "Source Code Pro",
          fontWeight: 600,
          minWidth: 0,
        },
      },
    ],
    styleOverrides: {
      root: (props: { theme: Theme }) =>
        ({
          fontFamily: "Source Code Pro",
          fontWeight: 600,
          textTransform: "none",
          padding: "0px 5px 0px 5px",
          color: props.theme.vars.palette.secondary.contrastText,
          backgroundColor: "transparent",
          "&:active": {
            boxShadow: "none",
            backgroundColor: props.theme.vars.palette.secondary.main,
          },
          "&:hover": {
            boxShadow: "none",
            backgroundColor: props.theme.vars.palette.secondary.main,
          },
          "&:focus": {},
        } as CSSObject),
      cardDetails: () => ({
        position: "absolute",
        padding: "5px",
        borderRadius: "5%",
        left: "10px",
        bottom: "10px",
      }),
    },
    defaultProps: {
      style: {
        textDecoration: "none",
      },
    },
  },
};

export default muiButtonStyles;
