import React from "react";

import ProjectBlock from "../../components/ProjectBlock";
import {
  ProjectCategories,
  ProjectList,
} from "../../content/projects/project-list";

const Academic = () => {
  return (
    <>
      <h1>Academic_projects</h1>
      {ProjectList[ProjectCategories.ACADEMIC].map((proj, i) => {
        return <ProjectBlock proj={proj} key={i} />;
      })}
    </>
  );
};

export default Academic;
