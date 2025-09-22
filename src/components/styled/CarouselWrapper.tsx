import * as React from "react";
import loadable from "@loadable/component";

// import Carousel from "react-material-ui-carousel";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";

import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";

const Carousel = loadable.lib(() => import("react-material-ui-carousel"));

interface CarouselWrapperProps extends CarouselProps {
  children: React.ReactNode;
}

const CarouselWrapper = ({
  children,
  height,
  navButtonsAlwaysVisible,
}: CarouselWrapperProps) => {
  const carousel =
    React.useRef<typeof import("react-material-ui-carousel") | null>(null);
  return (
    <Carousel ref={carousel}>
      {(CarouselModule) => (
        <CarouselModule.default
          stopAutoPlayOnHover
          fullHeightHover
          autoPlay={false}
          interval={5000}
          animation="slide"
          indicators
          navButtonsAlwaysVisible={navButtonsAlwaysVisible}
          height={height}
          NextIcon={<KeyboardArrowRightTwoToneIcon />}
          PrevIcon={<KeyboardArrowLeftTwoToneIcon />}
        >
          {children}
        </CarouselModule.default>
      )}
    </Carousel>
  );
};

export default CarouselWrapper;
