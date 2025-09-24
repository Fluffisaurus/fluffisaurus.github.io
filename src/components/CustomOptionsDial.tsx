import * as React from "react";
import {
  Box,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  useColorScheme,
} from "@mui/material";
import DisplaySettingsTwoToneIcon from "@mui/icons-material/DisplaySettingsTwoTone";

import ToggleThemeButtons from "./ToggleThemeButtons";
import ToggleImageQualityButtons from "./ToggleImageQualityButtons";
import { ANI_CONST, ImageQualityProps } from "./styled/constants";
import { Slide, toast, ToastContainer } from "react-toastify";
import { isSmallScreen } from "../utils/breakpoints";

interface DialActions {
  icon: JSX.Element;
  name: string;
}

export default function CustomOptionsDial({
  imgQuality,
  setImgQuality,
}: ImageQualityProps) {
  const { mode, systemMode, setMode } = useColorScheme();
  const actions: DialActions[] = [
    {
      icon: (
        <ToggleImageQualityButtons
          imgQuality={imgQuality}
          setImgQuality={setImgQuality}
        />
      ),
      name: "Image Quality",
    },
    {
      icon: <ToggleThemeButtons mode={mode} setMode={setMode} />,
      name: "Theme Mode",
    },
  ];

  const smallScreen = isSmallScreen();

  // Note: --speedDial-onboard is cleared after <App/> unmount
  //       to re-enable functionality, remove that line
  const [initialLoad, setInitialLoad] = React.useState(() => {
    return !!localStorage.getItem("--speedDial-onboard");
  });
  React.useEffect(() => {
    if (!initialLoad) {
      // first load
      toast.info("Customize your experience", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        draggableDirection: "y",
        style: {
          right: smallScreen ? "65px" : "55px",
          bottom: smallScreen ? "70px" : "40px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: 0,
          width: smallScreen ? "280px" : "fit-content",
        },
      });
      setInitialLoad(true);
      localStorage.setItem("--speedDial-onboard", "true");
    }
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={mode == "system" ? systemMode : mode}
        transition={Slide}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          height: 320,
          transform: "translateZ(0px)",
          flexGrow: 1,
          zIndex: ANI_CONST.ZINDEX.OPTIONS_DIAL,
        }}
      >
        <SpeedDial
          ariaLabel="website options dial for theme mode and image quality"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={
            <SpeedDialIcon
              icon={<DisplaySettingsTwoToneIcon />}
              openIcon={<DisplaySettingsTwoToneIcon />}
            />
          }
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              slotProps={{
                tooltip: {
                  title: action.name,
                  open: true,
                },
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}
