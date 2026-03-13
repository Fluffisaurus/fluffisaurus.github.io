import React from "react";

import { Project } from "../../content/projects/interfaces";
import {
  CarouselMediaContentProps,
  ImageQualityProps,
} from "../styled/constants";
import CarouselWrapper from "../styled/CarouselWrapper";
import CarouselContent from "../styled/CarouselContent";
import { isSmallScreen } from "../../utils/breakpoints";

interface ProjectCardMediaProps
  extends CarouselMediaContentProps,
    ImageQualityProps {
  proj: Project;
}

interface ProjectContentProps extends ProjectCardMediaProps {
  smallScreen: boolean;
}

const PlaceholderCarousel = (props: ProjectContentProps) => {
  const { width, height, smallScreen } = props;
  const placeholders = [1, 2];
  return (
    <CarouselWrapper
      height={height}
      navButtonsAlwaysVisible={smallScreen ? true : false}
    >
      {placeholders.map((item, i) => (
        <CarouselContent
          isPlaceholder
          key={i}
          width={width}
          height={height}
          cardActionArea={false}
        />
      ))}
    </CarouselWrapper>
  );
};

const MediaCarousel = (props: ProjectContentProps) => {
  const { proj, width, height, imgQuality, smallScreen } = props;
  return (
    <CarouselWrapper
      height={height}
      navButtonsAlwaysVisible={smallScreen ? true : false}
    >
      {proj.images.map((item, i) => (
        <CarouselContent
          key={i}
          projectName={proj.name}
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
  const isPlaceholder = proj.images.length == 0;

  return isPlaceholder ? (
    <PlaceholderCarousel {...props} smallScreen={smallScreen} />
  ) : (
    <MediaCarousel {...props} smallScreen={smallScreen} />
  );
};

export default ProjectCardMedia;
