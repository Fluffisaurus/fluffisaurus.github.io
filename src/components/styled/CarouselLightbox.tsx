import * as React from "react";

import Box from "@mui/material/Box";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import PhotoLibraryTwoToneIcon from "@mui/icons-material/PhotoLibraryTwoTone";

import Lightbox from "yet-another-react-lightbox";
import type { ControllerRef, Slide } from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

import theme from "../../mui/theme";

declare module "yet-another-react-lightbox" {
  export interface PlaceholderSlide extends GenericSlide {
    type: "placeholder";
  }

  interface SlideTypes {
    placeholder: PlaceholderSlide;
  }
}

interface CarouselLightboxProps {
  isPlaceholder: boolean;
  dims: { width: number; height: string | number };
  slides: Slide[];
  smallScreen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

type CustomDotsProps = Pick<CarouselLightboxProps, "slides" | "slideIndex"> & {
  controllerRef: React.MutableRefObject<ControllerRef | null>;
};

const CustomDots = (props: CustomDotsProps) => {
  const { slides, slideIndex, controllerRef } = props;

  function handleTransition(selectedIndex: number) {
    const diff = selectedIndex - slideIndex;
    const moveAmount = Math.abs(diff);

    if (diff < 0) {
      controllerRef?.current?.prev({ count: moveAmount });
    } else {
      controllerRef?.current?.next({ count: moveAmount });
    }
  }

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "8px",
      }}
    >
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => handleTransition(i)}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            border: "none",
            backgroundColor:
              i === slideIndex ? "white" : "rgba(255,255,255,0.5)",
            cursor: "pointer",
          }}
        />
      ))}
    </Box>
  );
};

const CarouselLightbox = (props: CarouselLightboxProps) => {
  const {
    isPlaceholder,
    dims,
    slides,
    smallScreen,
    setOpen,
    slideIndex,
    setSlideIndex,
  } = props;
  const controllerRef = React.useRef(null);

  return (
    <Box sx={{ width: dims.width, height: dims.height }}>
      <Lightbox
        plugins={[Inline]}
        slides={slides}
        index={slideIndex}
        on={{
          view: ({ index: currentIndex }) => setSlideIndex(currentIndex),
          click: () => setOpen(true),
        }}
        carousel={{
          spacing: 0,
          padding: 0,
          imageFit: "contain",
        }}
        controller={{ ref: controllerRef }}
        render={{
          buttonPrev: smallScreen || isPlaceholder ? () => null : undefined,
          buttonNext: smallScreen || isPlaceholder ? () => null : undefined,
          iconNext: () => <ArrowForwardIosTwoToneIcon />,
          iconPrev: () => <ArrowBackIosTwoToneIcon />,
          iconError: () => <PhotoLibraryTwoToneIcon />,
          controls: !isPlaceholder
            ? () => <CustomDots {...props} controllerRef={controllerRef} />
            : () => null,
          slide: ({ slide }: { slide: Slide }) =>
            slide.type === "placeholder" ? (
              <PhotoLibraryTwoToneIcon
                sx={{ width: dims.width, height: dims.height }}
              />
            ) : null,
        }}
        styles={{
          container: {
            background: theme.vars.palette.background.pdf,
          },
        }}
      />
    </Box>
  );
};

export default CarouselLightbox;
