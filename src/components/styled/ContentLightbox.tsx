import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import { ProjectImage } from "../../content/projects/interfaces";
import { ImageQualityProps } from "../styled/constants";
import CloudinaryCustomUrl from "../CloudinaryCustomUrl";

interface ContentLightboxProps extends ImageQualityProps {
  images: ProjectImage[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContentLightbox = (props: ContentLightboxProps) => {
  const { images, imgQuality, open, setOpen } = props;

  return (
    <>
      <Lightbox
        plugins={[Captions, Zoom, Thumbnails, Counter]}
        open={open}
        close={() => setOpen(!open)}
        slides={CloudinaryCustomUrl({ images, imgQuality })}
      />
    </>
  );
};

export default ContentLightbox;
