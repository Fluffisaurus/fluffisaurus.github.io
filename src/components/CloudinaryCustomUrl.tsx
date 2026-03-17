import { ProjectImage } from "../content/projects/interfaces";
import { ImageQualityProps } from "./styled/constants";

import getCloudinaryInstance, { getDesiredQuality } from "../utils/Cloudinary";

interface CloudinaryCustomUrlProps extends ImageQualityProps {
  images: ProjectImage[];
}

function CloudinaryCustomUrl(props: CloudinaryCustomUrlProps) {
  const { images, imgQuality } = props;
  const cld = getCloudinaryInstance();

  const cldImgUrls = images.map((item) => {
    return {
      src: cld
        .image(`portfolio/${item.src}`)
        .quality(getDesiredQuality(imgQuality))
        .toURL(),
      description: item.description,
    };
  });

  return cldImgUrls;
}

export default CloudinaryCustomUrl;
