import React from "react";

import ProjectVariants from "../../components/project/ProjectVariants";
import { ImageQualityProps } from "../../components/styled/constants";
import { ProjectCategories } from "../../content/projects/project-list";

const Personal = ({ imgQuality }: ImageQualityProps) => {
  return (
    <ProjectVariants
      variant={ProjectCategories.PERSONAL}
      imgQuality={imgQuality}
    />
  );
};

export default Personal;
