const muiGrid = {
  MuiGrid: {
    styleOverrides: {
      root: {
        "@media (min-width: 480px)": {
          width: "100%", // override default calc(100% * 20 / var(--Grid-parent-columns) - (var(--Grid-parent-columns) - 20) * (var(--Grid-parent-columnSpacing) / var(--Grid-parent-columns)))
        },
      },
    },
  },
};

export default muiGrid;
