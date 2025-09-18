import * as React from "react";
import {
  Box,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  useColorScheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DisplaySettingsTwoToneIcon from "@mui/icons-material/DisplaySettingsTwoTone";
import { Slide, toast, ToastContainer } from "react-toastify";

import ToggleThemeButtons from "./ToggleThemeButtons";
import ToggleImageQualityButtons from "./ToggleImageQualityButtons";
import ToggleOnboardingButtons from "./ToggleOnboardingButtons";
import { ImageQualityProps } from "./styled/constants";

interface DialActions {
  icon: JSX.Element;
  name: string;
}

export default function CustomOptionsDial({
  imgQuality,
  setImgQuality,
}: ImageQualityProps) {
  const { mode, systemMode, setMode } = useColorScheme();
  const [isOnboarding, setIsOnboarding] =
    React.useState<string | null>("enabled");

  const actions: DialActions[] = [
    {
      icon: (
        <ToggleOnboardingButtons
          isOnboarding={isOnboarding}
          setIsOnboarding={setIsOnboarding}
        />
      ),
      name: "Onboarding",
    },
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Note: --speedDial-onboard is not cleared after <App/> unmount
  const [initialLoad, setInitialLoad] = React.useState(() => {
    return !!localStorage.getItem("--speedDial-onboard");
  });
  React.useEffect(() => {
    if (!initialLoad || isOnboarding) {
      // first load
      toast.info("Customize your experience", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        closeButton: false,
        pauseOnFocusLoss: false,
        draggableDirection: "y",
        style: {
          right: isMobile ? "65px" : "55px",
          bottom: isMobile ? "70px" : "40px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: 0,
          width: isMobile ? "280px" : "fit-content",
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
          zIndex: 999,
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
