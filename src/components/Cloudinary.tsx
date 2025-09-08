import React from "react";

import { Cloudinary } from "@cloudinary/url-gen";

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

export default getCloudinaryInstance();
