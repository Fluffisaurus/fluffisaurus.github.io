import React from "react";

import { Project } from "../content/projects/interfaces";
import {
  CarouselCardContentProps,
  ImageQualityProps,
} from "./styled/constants";
import CarouselWrapper from "./styled/CarouselWrapper";
import CarouselPlaceholderCard from "./styled/CarouselPlaceholderCard";
import CarouselCard from "./styled/CarouselCard";
import { isSmallScreen } from "../utils/breakpoints";

interface ProjectCarouselProps
  extends CarouselCardContentProps,
    ImageQualityProps {
  proj: Project;
}

interface ProjectContentProps extends ProjectCarouselProps {
  smallScreen: boolean;
}

const PlaceholderCarousel = ({
  proj,
  width,
  height,
  smallScreen,
}: ProjectContentProps) => {
  const placeholders = [1, 2];
  return (
    <CarouselWrapper
      height={height}
      navButtonsAlwaysVisible={smallScreen ? true : false}
    >
      {placeholders.map((item, i) => (
        <CarouselPlaceholderCard
          key={i}
          width={width}
          height={height}
          cardActionArea={proj.abbr}
        />
      ))}
    </CarouselWrapper>
  );
};

const ProjectCarouselCard = ({
  proj,
  width,
  height,
  imgQuality,
  smallScreen,
}: ProjectContentProps) => {
  return (
    <CarouselWrapper
      height={height}
      navButtonsAlwaysVisible={smallScreen ? true : false}
    >
      {proj.images.map((item, i) => (
        <CarouselCard
          key={i}
          item={item}
          width={width}
          height={height}
          cardActionArea={proj.abbr}
          imgQuality={imgQuality}
        />
      ))}
    </CarouselWrapper>
  );
};

const ProjectCarousel = (props: ProjectCarouselProps) => {
  const { proj } = props;
  const smallScreen = isSmallScreen();

  return proj.images.length == 0 ? (
    <PlaceholderCarousel {...props} smallScreen={smallScreen} />
  ) : (
    <ProjectCarouselCard {...props} smallScreen={smallScreen} />
  );
};

export default ProjectCarousel;
