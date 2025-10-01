import * as React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SignalCellular1BarTwoToneIcon from "@mui/icons-material/SignalCellular1BarTwoTone";
import SignalCellular4BarTwoToneIcon from "@mui/icons-material/SignalCellular4BarTwoTone";
import { toast } from "react-toastify";
import { ImageQuality, ImageQualityProps } from "./styled/constants";

function ToggleImageQualityButtons({
  imgQuality,
  setImgQuality,
}: ImageQualityProps) {
  const handleToggleImgQuality = (
    event: React.MouseEvent<HTMLElement>,
    newImgQuality: ImageQuality | null
  ) => {
    if (setImgQuality) {
      if (newImgQuality) {
        setImgQuality(newImgQuality);
        toast.success(
          `Image quality: ${newImgQuality} ${
            newImgQuality == "low" ? "(data saver)" : ""
          }`
        );
      } else {
        setImgQuality("best");
        toast.success(`Image quality: default (best)`);
      }
    } else {
      // this should never happen b/c it's always passed as a prop
      console.error("setImgQuality was never passed as a prop");
    }
  };

  return (
    <>
      <ToggleButtonGroup
        value={imgQuality}
        exclusive
        onChange={handleToggleImgQuality}
        aria-label="image quality toggle"
      >
        <ToggleButton value="low" aria-label="low image quality">
          <SignalCellular1BarTwoToneIcon />
        </ToggleButton>
        <ToggleButton value="best" aria-label="best image quality">
          <SignalCellular4BarTwoToneIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default ToggleImageQualityButtons;
