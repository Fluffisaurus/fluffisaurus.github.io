export const muiSpeedDial = {
  MuiSpeedDial: {
    styleOverrides: {
      root: {
        alignItems: "flex-end", // aligns actions
      },
      fab: {
        // the actual icon on the speed dial itself
        alignItems: "center",
      },
    },
  },
};

export const muiSpeedDialAction = {
  MuiSpeedDialAction: {
    styleOverrides: {
      // fab container that wraps action content
      fab: {
        width: "fit-content",
        height: "fit-content",
        borderRadius: "var(--custom-mui-theme-shape-borderRadius)",
        justifyContent: "right",
      },
    },
  },
};
