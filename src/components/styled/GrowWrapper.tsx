import * as React from "react";

import Grow from "@mui/material/Grow";
import { ANI_CONST, GenericWrapperProps } from "./constants";

const GrowWrapper = ({ children, delay, timeout }: GenericWrapperProps) => {
  const [animatedOnLoad, setAnimatedOnLoad] = React.useState(() => {
    return !!localStorage.getItem("--grow-animatedOnLoad");
  });
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    if (!animatedOnLoad) {
      const timer = setTimeout(
        () => {
          setShowContent(true);
        },
        delay
          ? delay + ANI_CONST.WRAPPER_ONLOAD_DELAY
          : ANI_CONST.WRAPPER_ONLOAD_DELAY
      ); // wait until page is loaded
      setAnimatedOnLoad(true);
      localStorage.setItem("--grow-animatedOnLoad", "true");
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, []);

  return (
    <Grow
      in={showContent}
      timeout={timeout ? timeout : ANI_CONST.WRAPPER_GROW_WRAPPER_DELAY}
      style={{ transformOrigin: "0 0 0" }}
    >
      <div>{children}</div>
    </Grow>
  );
};

export default GrowWrapper;
