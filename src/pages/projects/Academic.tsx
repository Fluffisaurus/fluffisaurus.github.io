import React from "react";

import ProjectVariants from "../../components/project/ProjectVariants";
import { ImageQualityProps } from "../../components/styled/constants";
import { ProjectCategories } from "../../content/projects/project-list";

const Academic = ({ imgQuality }: ImageQualityProps) => {
  return (
    <ProjectVariants
      variant={ProjectCategories.ACADEMIC}
      imgQuality={imgQuality}
    />
  );
};

export default Academic;
