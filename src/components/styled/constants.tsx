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
  GLOBAL_NAV_DELAY: 500,
  GLOBAL_NAV_HEIGHT: 50,

  // OPTIONS DIAL
  OPTIONS_DIAL_DELAY: 500,

  // ABOUT
  ABOUT_CARD_DELAY: GENERIC_CARD_DELAY,

  // PROJECTS
  PROJ_SUBHEADING_DELAY: 300, // same as WRAPPER_FADE_WRAPPER_DELAY
  PROJ_SUBHEADING_TYPING_DELAY: 500,
  PROJ_CARDS_DELAY: GENERIC_CARD_DELAY,
  PROJ_CARD_WIDTH: {
    mobile: 350,
    tablet: 350,
    laptop: 350,
    desktop: 375,
    bigboi: 400,
  },

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
    BACKDROP: 1499,
    GLOBAL_NAV: 2000,
  },
};

export enum Viewport {
  mobile = "mobile",
  tablet = "tablet",
  laptop = "laptop",
  desktop = "desktop",
  bigboi = "bigboi",
}

export type MuiBreakpointDimension = Record<Viewport, number>;

export interface CarouselMediaContentProps {
  width: number;
  height: number;
}

export interface CarouselActionMediaContentProps
  extends CarouselMediaContentProps {
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
