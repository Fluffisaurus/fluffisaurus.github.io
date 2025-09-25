import { QualityTypes } from "@cloudinary/url-gen/types/types";

const GENERIC_CARD_DELAY = 400;
const GENERIC_WRAPPER_DELAY = 700;

export interface GenericWrapperProps {
  children: React.ReactNode;
  delay?: number;
  timeout?: number;
}

export type ImageQuality = "low" | "good" | "best";
export const CldImgQuality: Record<ImageQuality, QualityTypes> = {
  low: "auto:low",
  good: "auto:good",
  best: "auto:best",
};

export interface ImageQualityProps {
  imgQuality?: ImageQuality;
  setImgQuality?: React.Dispatch<React.SetStateAction<ImageQuality>>;
}

export const ANI_CONST = {
  // GENERIC
  WRAPPER_ONLOAD_DELAY: 500,
  WRAPPER_GROW_WRAPPER_DELAY: GENERIC_WRAPPER_DELAY,
  WRAPPER_SLIDE_WRAPPER_DELAY: GENERIC_WRAPPER_DELAY,
  WRAPPER_FADE_WRAPPER_DELAY: 800,

  // GLOBAL NAV
  GLOBAL_NAV_LANDING_DELAY: 1000,
  GLOBAL_NAV_DELAY: 500,
  GLOBAL_NAV_HEIGHT: 50,

  // ABOUT
  ABOUT_CARD_DELAY: GENERIC_CARD_DELAY,

  // PROJECTS
  PROJ_ROW_BREAKPOINT: 1340, // >= 1340px fits 3 cards
  PROJ_SUBHEADING_DELAY: 300, // same as WRAPPER_FADE_WRAPPER_DELAY
  PROJ_CARDS_DELAY: GENERIC_CARD_DELAY,
  PROJ_CARD_WIDTH: { xs: 300, sm: 325, md: 350, lg: 375, xl: 425 },
  PROJ_CARD_HEIGHT: { xs: 300, sm: 325, md: 350, lg: 375, xl: 425 },

  // CONTACT
  CONTACT_BADGE_DELAY: GENERIC_CARD_DELAY,
  CONTACT_PORTRAIT_HEADING_DELAY: GENERIC_CARD_DELAY * 6,
  CONTACT_PORTRAIT_PIC_DELAY: GENERIC_CARD_DELAY * 6,

  // ZINDEX
  // mui <Modal> has z-index of 1300
  ZINDEX: {
    EXPAND_MORE: 501,
    COLLAPSED_CONTENT: 500,
    OPTIONS_DIAL: 1500, // default is 1050
    GLOBAL_NAV: 2000,
  },
};

export interface CarouselCardContentProps {
  width: Record<string, Record<string, number>>;
  height: number | string;
}

export interface CarouselActionCardContentProps
  extends CarouselCardContentProps {
  cardActionArea: string | false;
}

export const CarouselStyles = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
  },
  wrapperBox: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  textOverlayBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    bgcolor: "rgba(0, 0, 0, 0.54)",
    color: "white",
    padding: "10px",
  },
};
