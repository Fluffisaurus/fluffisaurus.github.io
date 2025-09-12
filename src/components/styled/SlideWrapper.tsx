import * as React from "react";

import Slide from "@mui/material/Slide";
import { ANI_CONST, GenericWrapperProps } from "./constants";

interface SlideWrapperProps extends GenericWrapperProps {
  slideFromRef: React.RefObject<HTMLDivElement>;
  direction?: "left" | "right" | "up" | "down" | undefined;
}

const SlideWrapper = ({
  children,
  slideFromRef,
  direction,
  delay,
  timeout,
}: SlideWrapperProps) => {
  const [animatedOnLoad, setAnimatedOnLoad] = React.useState(() => {
    return !!localStorage.getItem("--slide-animatedOnLoad");
  });
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    if (!animatedOnLoad) {
      const timer = setTimeout(
        () => {
          setShowContent(true);
        },
        delay
          ? ANI_CONST.WRAPPER_ONLOAD_DELAY + delay
          : ANI_CONST.WRAPPER_ONLOAD_DELAY
      ); // wait until page is loaded
      setAnimatedOnLoad(true);
      localStorage.setItem("--slide-animatedOnLoad", "true");
      return () => clearTimeout(timer);
    }

    if (delay) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, delay);
      console.log(delay);
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, []);

  return (
    <Slide
      in={showContent}
      timeout={timeout ? timeout : ANI_CONST.WRAPPER_SLIDE_WRAPPER_DELAY}
      container={slideFromRef.current}
      direction={direction}
    >
      <div>{children}</div>
    </Slide>
  );
};

export default SlideWrapper;
