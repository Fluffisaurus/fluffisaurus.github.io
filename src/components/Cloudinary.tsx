import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

const PLACEHOLDER_URL = "portfolio/placeholderGallery";

export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  },
});

export const PLACEHOLDER_IMG: CloudinaryImage = cld.image(PLACEHOLDER_URL);
