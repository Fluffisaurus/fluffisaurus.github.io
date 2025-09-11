import * as React from "react";

import { Mode } from "@mui/system/cssVars/useCurrentColorScheme";
import { ToggleButton, ToggleButtonGroup, useColorScheme } from "@mui/material";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import SettingsSystemDaydreamTwoToneIcon from "@mui/icons-material/SettingsSystemDaydreamTwoTone";

function ToggleThemeButtons() {
  const { mode, setMode } = useColorScheme();

  const handleToggleTheme = (
    event: React.MouseEvent<HTMLElement>,
    newThemeMode: Mode | null
  ) => {
    setMode(newThemeMode);
  };

  return (
    <ToggleButtonGroup
      value={mode}
      defaultValue={mode} // currently set in themeprovider to light
      exclusive
      onChange={handleToggleTheme}
      aria-label="theme mode toggle"
    >
      <ToggleButton value="system" aria-label="light mode">
        <SettingsSystemDaydreamTwoToneIcon />
      </ToggleButton>
      <ToggleButton value="light" aria-label="light mode">
        <LightModeTwoToneIcon />
      </ToggleButton>
      <ToggleButton value="dark" aria-label="dark mode">
        <DarkModeTwoToneIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleThemeButtons;
