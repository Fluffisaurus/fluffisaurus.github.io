export const muiSpeedDial = {
  MuiSpeedDial: {
    styleOverrides: {
      root: {
        alignItems: "flex-end", // aligns actions
      },
      fab: {
        // the actual icon on the speed dial itself
        alignItems: "center",
        minHeight: 0,
        borderRadius: 0,
        marginBottom: "10px", // push actions below navbar
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
      staticTooltip: {
        whiteSpace: "nowrap",
      },
    },
  },
};
