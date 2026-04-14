import { ProjectImage } from "../content/projects/interfaces";
import { ImageQualityProps } from "./styled/constants";

import getCloudinaryInstance, { getDesiredQuality } from "../utils/Cloudinary";
import { fit } from "@cloudinary/url-gen/actions/resize";
import { Slide } from "yet-another-react-lightbox";

interface CloudinaryCustomUrlProps extends ImageQualityProps {
  images: ProjectImage[];
  dims?: { width: number; height: string | number };
}

function CloudinaryCustomUrl(props: CloudinaryCustomUrlProps) {
  const { images, imgQuality } = props;
  const cld = getCloudinaryInstance();

  const cldImgUrls: Slide[] = images.map((item) => {
    return {
      src: props.dims
        ? cld
            .image(`portfolio/${item.src}`)
            .resize(fit(props.dims.width, props.dims.height))
            .quality(getDesiredQuality(imgQuality))
            .toURL()
        : cld
            .image(`portfolio/${item.src}`)
            .quality(getDesiredQuality(imgQuality))
            .toURL(),
      description: item.description,
    };
  });

  return cldImgUrls;
}

export default CloudinaryCustomUrl;
