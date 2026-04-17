import * as React from "react";

import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import ZoomOutTwoToneIcon from "@mui/icons-material/ZoomOutTwoTone";
import ZoomInTwoToneIcon from "@mui/icons-material/ZoomInTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import PhotoLibraryTwoToneIcon from "@mui/icons-material/PhotoLibraryTwoTone";
import CallToActionTwoToneIcon from "@mui/icons-material/CallToActionTwoTone";
import WebAssetOffTwoToneIcon from "@mui/icons-material/WebAssetOffTwoTone";
import ClosedCaptionTwoToneIcon from "@mui/icons-material/ClosedCaptionTwoTone";
import ClosedCaptionDisabledTwoToneIcon from "@mui/icons-material/ClosedCaptionDisabledTwoTone";
import FullscreenTwoToneIcon from "@mui/icons-material/FullscreenTwoTone";
import CloseFullscreenTwoToneIcon from "@mui/icons-material/CloseFullscreenTwoTone";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import PauseTwoToneIcon from "@mui/icons-material/PauseTwoTone";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import { ProjectImage } from "../../content/projects/interfaces";
import { ANI_CONST, ImageQualityProps } from "../styled/constants";
import CloudinaryCustomUrl from "../CloudinaryCustomUrl";

interface ContentLightboxProps extends ImageQualityProps {
  images: ProjectImage[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ContentLightbox = (props: ContentLightboxProps) => {
  const { images, imgQuality, open, setOpen, slideIndex, setSlideIndex } =
    props;

  return (
    <>
      <Lightbox
        plugins={[Counter, Fullscreen, Slideshow, Thumbnails, Captions, Zoom]}
        open={open}
        close={() => setOpen(!open)}
        slides={CloudinaryCustomUrl({ images, imgQuality })}
        index={slideIndex}
        on={{ view: ({ index: currentIndex }) => setSlideIndex(currentIndex) }}
        thumbnails={{ showToggle: true }}
        captions={{ showToggle: true }}
        slideshow={{ autoplay: false, delay: 3000 }}
        render={{
          iconZoomOut: () => <ZoomOutTwoToneIcon />,
          iconZoomIn: () => <ZoomInTwoToneIcon />,
          iconClose: () => <CloseTwoToneIcon />,
          iconNext: () => <ArrowForwardIosTwoToneIcon />,
          iconPrev: () => <ArrowBackIosTwoToneIcon />,
          iconError: () => <PhotoLibraryTwoToneIcon />,
          iconThumbnailsVisible: () => <CallToActionTwoToneIcon />,
          iconThumbnailsHidden: () => <WebAssetOffTwoToneIcon />,
          iconCaptionsVisible: () => <ClosedCaptionTwoToneIcon />,
          iconCaptionsHidden: () => <ClosedCaptionDisabledTwoToneIcon />,
          iconEnterFullscreen: () => <FullscreenTwoToneIcon />,
          iconExitFullscreen: () => <CloseFullscreenTwoToneIcon />,
          iconSlideshowPlay: () => <PlayArrowTwoToneIcon />,
          iconSlideshowPause: () => <PauseTwoToneIcon />,
        }}
        styles={{
          container: {
            zIndex: ANI_CONST.ZINDEX.LIGHTBOX,
          },
        }}
      />
    </>
  );
};

export default ContentLightbox;
