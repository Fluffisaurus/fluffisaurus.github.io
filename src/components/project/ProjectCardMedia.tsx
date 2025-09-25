import React from "react";

import { Project } from "../../content/projects/interfaces";
import {
  CarouselMediaContentProps,
  ImageQualityProps,
} from "../styled/constants";
import CarouselWrapper from "../styled/CarouselWrapper";
import CarouselPlaceholderCard from "../styled/CarouselPlaceholder";
import CarouselMedia from "../styled/CarouselMedia";
import { isSmallScreen } from "../../utils/breakpoints";

interface ProjectCardMediaProps
  extends CarouselMediaContentProps,
    ImageQualityProps {
  proj: Project;
}

interface ProjectContentProps extends ProjectCardMediaProps {
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

const ProjectCardMediaCarousel = ({
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
        <CarouselMedia
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

const ProjectCardMedia = (props: ProjectCardMediaProps) => {
  const { proj } = props;
  const smallScreen = isSmallScreen();

  return proj.images.length == 0 ? (
    <PlaceholderCarousel {...props} smallScreen={smallScreen} />
  ) : (
    <ProjectCardMediaCarousel {...props} smallScreen={smallScreen} />
  );
};

export default ProjectCardMedia;
