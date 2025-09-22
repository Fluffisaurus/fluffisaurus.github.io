import * as React from "react";

import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
import { fit } from "@cloudinary/url-gen/actions/resize";

import cld, { getDesiredQuality } from "./Cloudinary";
import { ImageQuality } from "./styled/constants";

interface CloudinaryImageProps {
  src: string;
  width: number;
  height: string | number;
  imgQuality: ImageQuality | undefined;
}

const CloudinaryCustomImage = (props: CloudinaryImageProps) => {
  const { src, width, height, imgQuality } = props;
  return (
    <AdvancedImage
      cldImg={cld
        .image(`portfolio/${src}`)
        .resize(fit(width, height))
        .quality(getDesiredQuality(imgQuality))}
      plugins={[placeholder({ mode: "blur" }), responsive()]}
    />
  );
};

export default CloudinaryCustomImage;
