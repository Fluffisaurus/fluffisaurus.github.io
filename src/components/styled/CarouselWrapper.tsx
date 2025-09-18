import * as React from "react";

import Carousel from "react-material-ui-carousel";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";

import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";

interface CarouselWrapperProps extends CarouselProps {
  children: React.ReactNode;
}

const CarouselWrapper = ({
  children,
  height,
  navButtonsAlwaysVisible,
}: CarouselWrapperProps) => {
  return (
    <Carousel
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
    </Carousel>
  );
};

export default CarouselWrapper;
