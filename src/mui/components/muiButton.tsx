import type {} from "@mui/material/themeCssVarsAugmentation";
import { CSSObject, Theme } from "@mui/material/styles";
import { ButtonProps } from "@mui/material"; // eslint-disable-line no-restricted-imports

const muiButtonNavlinkFontSizes = {
  fontSize: { mobile: 18, tablet: 20, laptop: 24, desktop: 26 },
};

export const navLinkButtonProps: ButtonProps = {
  size: "large",
  variant: "navlink",
  sx: { ...muiButtonNavlinkFontSizes },
};

export const muiButtonGlobalNavFontSizes = {
  fontSize: { mobile: 19, tablet: 20, laptop: 21, desktop: 22 },
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
          "&.Mui-disabled": {
            // Remove or override specific styles for Button
            color: props.theme.vars.palette.primary.dark,
            backgroundColor: "transparent",
            opacity: 1,
          },
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
