const muiDrawer = {
  MuiDrawer:{
      styleOverrides: {
        paperAnchorTop: {
          top: "40px"
        },
        paper: {
          width: "600px",
          '@media (max-width: 600px)': {
            width: "100%"
          },
        }
      }
    }
};

export default muiDrawer;