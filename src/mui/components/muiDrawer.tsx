import { ANI_CONST } from "../../components/styled/constants";

const muiDrawer = {
  MuiDrawer: {
    styleOverrides: {
      paperAnchorTop: {
        top: ANI_CONST.GLOBAL_NAV_HEIGHT + "px",
      },
      paper: {
        width: "600px",
        "@media (max-width: 600px)": {
          width: "100%",
        },
      },
    },
  },
};

export default muiDrawer;
