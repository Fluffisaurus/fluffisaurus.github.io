import { Cloudinary } from "@cloudinary/url-gen";
import { CldImgQuality, ImageQuality } from "./styled/constants";
import { QualityTypes } from "@cloudinary/url-gen/types/types";

let cldInstance: Cloudinary | null = null;

function getCloudinaryInstance() {
  if (!cldInstance) {
    cldInstance = new Cloudinary({
      cloud: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      },
      url: { secure: true },
    });
  }
  return cldInstance;
}

export function getDesiredQuality(
  imgQuality: ImageQuality | undefined
): QualityTypes {
  return imgQuality ? CldImgQuality[imgQuality] : CldImgQuality.best;
}

export default getCloudinaryInstance();
