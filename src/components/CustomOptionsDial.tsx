import * as React from "react";
import {
  Box,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  useColorScheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DisplaySettingsTwoToneIcon from "@mui/icons-material/DisplaySettingsTwoTone";

import ToggleThemeButtons from "./ToggleThemeButtons";
import ToggleImageQualityButtons from "./ToggleImageQualityButtons";
import { Slide, ToastContainer } from "react-toastify";

interface DialActions {
  icon: JSX.Element;
  name: string;
}

export default function CustomOptionsDial() {
  const { mode, systemMode, setMode } = useColorScheme();
  const actions: DialActions[] = [
    { icon: <ToggleImageQualityButtons />, name: "Image Quality" },
    {
      icon: <ToggleThemeButtons mode={mode} setMode={setMode} />,
      name: "Theme Mode",
    },
  ];
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
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
              openIcon={<EditIcon />}
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
