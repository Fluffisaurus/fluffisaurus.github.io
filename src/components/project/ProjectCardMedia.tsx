import React from "react";

import { Project } from "../../content/projects/interfaces";
import {
  CarouselMediaContentProps,
  ImageQualityProps,
} from "../styled/constants";
import { isSmallScreen } from "../../utils/breakpoints";
import CloudinaryCustomUrl from "../CloudinaryCustomUrl";
import CarouselLightbox from "../styled/CarouselLightbox";
import ContentLightbox from "../styled/ContentLightbox";

import type { PlaceholderSlide } from "yet-another-react-lightbox";

interface ProjectCardMediaProps
  extends CarouselMediaContentProps,
    ImageQualityProps {
  proj: Project;
}

const ImageCarousel = (props: ProjectCardMediaProps) => {
  const { proj, width, height, imgQuality } = props;
  const [open, setOpen] = React.useState(false);
  const [slideIndex, setSlideIndex] = React.useState(0);

  const smallScreen = isSmallScreen();
  const isPlaceholder = proj.images.length == 0;

  const dims = { width: width, height: height };
  const slides = isPlaceholder
    ? ([{ type: "placeholder" }] as PlaceholderSlide[])
    : CloudinaryCustomUrl({ images: proj.images, imgQuality, dims });

  const carouselProps = {
    isPlaceholder,
    dims,
    slides,
    smallScreen,
    setOpen,
    slideIndex,
    setSlideIndex,
  };
  const lightboxProps = {
    imgQuality,
    open,
    setOpen,
    slideIndex,
    setSlideIndex,
  };

  return (
    <>
      <CarouselLightbox {...carouselProps} />
      <ContentLightbox images={proj.images} {...lightboxProps} />
    </>
  );
};

const ProjectCardMedia = (props: ProjectCardMediaProps) => {
  return <ImageCarousel {...props} />;
};

export default ProjectCardMedia;
