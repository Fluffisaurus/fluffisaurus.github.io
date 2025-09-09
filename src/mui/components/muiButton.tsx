import { CSSObject, Theme } from "@mui/material/styles";

export const muiButtonNavlinkFontSizes = {
  fontSize: { xs: 18, sm: 20, md: 24, lg: 26 }
}

const muiButtonStyles = {
    MuiButton: {
      variants:[
        {
          props: {variant:"navlink" as const},
          style:{
            fontFamily: "Source Code Pro",
            fontWeight: 600,
            minWidth: 0
          }
        }
      ],
      styleOverrides: {
        root: (props: { theme: Theme })  => ({
          fontFamily: "Source Code Pro",
          fontWeight: 600,
          textTransform: "none",
          padding: "0px 5px 0px 5px",
          color: props.theme.palette.secondary.contrastText,
          backgroundColor: "transparent",
          '&:active': {
            boxShadow: 'none',
            backgroundColor: props.theme.palette.secondary.main,
          },
          '&:hover':{
            boxShadow: 'none',
            backgroundColor: props.theme.palette.secondary.main,
          },
          '&:focus': {

          }
        }) as CSSObject,
      },
      defaultProps: {
        style: { 
          textDecoration: "none",
        },
      },
    },
}

export default muiButtonStyles;