import React from "react";

import { useMediaQuery, useTheme } from "@mui/material";

import { Project } from "../content/projects/interfaces";
import {
  CarouselCardContentProps,
  ImageQualityProps,
} from "./styled/constants";
import CarouselWrapper from "./styled/CarouselWrapper";
import CarouselPlaceholderCard from "./styled/CarouselPlaceholderCard";
import CarouselCard from "./styled/CarouselCard";

interface ProjectCarouselProps
  extends CarouselCardContentProps,
    ImageQualityProps {
  proj: Project;
}

interface ProjectContentProps extends ProjectCarouselProps {
  isMobile: boolean;
}

const PlaceholderCarousel = ({
  proj,
  width,
  height,
  isMobile,
}: ProjectContentProps) => {
  const placeholders = [1, 2];
  return (
    <CarouselWrapper
      height={height}
      navButtonsAlwaysVisible={isMobile ? true : false}
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
  isMobile,
}: ProjectContentProps) => {
  return (
    <CarouselWrapper
      height={height}
      navButtonsAlwaysVisible={isMobile ? true : false}
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("laptop"));

  return proj.images.length == 0 ? (
    <PlaceholderCarousel {...props} isMobile={isMobile} />
  ) : (
    <ProjectCarouselCard {...props} isMobile={isMobile} />
  );
};

export default ProjectCarousel;
