import * as React from "react";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import UnpublishedTwoToneIcon from "@mui/icons-material/UnpublishedTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import { toast } from "react-toastify";

interface ToggleOnboardingButtonsProps {
  isOnboarding: string | null;
  setIsOnboarding: React.Dispatch<React.SetStateAction<string | null>>;
}

const ToggleOnboardingButtons = ({
  isOnboarding,
  setIsOnboarding,
}: ToggleOnboardingButtonsProps) => {
  const handleToggleOnboarding = (
    event: React.MouseEvent<HTMLElement>,
    newIsOnboarding: string | null
  ) => {
    if (newIsOnboarding) {
      setIsOnboarding(newIsOnboarding);
      localStorage.setItem("--speedDial-onboard", newIsOnboarding);
      toast.success(`Onboarding: ${newIsOnboarding}`);
    } else {
      setIsOnboarding("enabled");
      localStorage.setItem("--speedDial-onboard", "enabled");
      toast.success(`Onboarding: default (enabled)`);
    }
  };

  return (
    <>
      <ToggleButtonGroup
        value={isOnboarding}
        exclusive
        onChange={handleToggleOnboarding}
        aria-label="onboarding toggle"
      >
        <ToggleButton value="disabled" aria-label="disable onboarding">
          <UnpublishedTwoToneIcon />
        </ToggleButton>
        <ToggleButton value="enabled" aria-label="enable onboarding">
          <CheckCircleTwoToneIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default ToggleOnboardingButtons;
