import * as React from "react";
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DisplaySettingsTwoToneIcon from "@mui/icons-material/DisplaySettingsTwoTone";

import ToggleThemeButtons from "./ToggleThemeButtons";
import ToggleImageQualityButtons from "./ToggleImageQualityButtons";

export default function CustomOptionsDial() {
  const actions = [
    { icon: <ToggleImageQualityButtons />, name: "Image Quality" },
    { icon: <ToggleThemeButtons />, name: "Theme Mode" },
  ];
  return (
    <>
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
              icon={<EditIcon />}
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
                },
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}
