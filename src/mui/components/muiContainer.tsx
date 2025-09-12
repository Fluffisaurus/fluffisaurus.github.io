const muiContainer = {
  MuiContainer: {
    styleOverrides: {
      root: {
        display: "flex",
        overflow: "hidden",
        paddingLeft: 0,
        paddingRight: 0,
        "@media (min-width: 1200px)": {
          maxWidth: "1800px", // default is 1200px
        },
      },
    },
  },
};

export default muiContainer;
