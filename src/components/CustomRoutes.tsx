import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Default = lazy(() => import("../pages/Default"));
const DoesNotExist = lazy(() => import("../pages/DoesNotExist"));

const Landing = lazy(() => import("../pages/Landing"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const Selection = lazy(() => import("../pages/projects/Selection"));
const Academic = lazy(() => import("../pages/projects/Academic"));
const Personal = lazy(() => import("../pages/projects/Personal"));
const AboutMe = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Resume = lazy(() => import("../pages/Resume"));

const ProjectModalCard = lazy(() => import("./project/ProjectModalCard"));
import { ProjectList } from "../content/projects/project-list";
import { Project } from "../content/projects/interfaces";
import { ImageQuality } from "./styled/constants";

interface CustomRoutesProps {
  background: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  imgQuality: ImageQuality;
}

const CustomRoutes = (props: CustomRoutesProps) => {
  const { background, imgQuality } = props;
  return (
    <>
      <Routes location={background || location}>
        <Route path="" element={<Landing />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />}>
          <Route index element={<Selection />} />
          <Route
            path="personal"
            element={<Personal imgQuality={imgQuality} />}
          />
          <Route
            path="personal/*"
            element={<Navigate to="/projects/personal" replace />}
          />
          <Route
            path="academic"
            element={<Academic imgQuality={imgQuality} />}
          />
          <Route
            path="academic/*"
            element={<Navigate to="/projects/academic" replace />}
          />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="default" element={<Default />} />
        <Route path="*" element={<DoesNotExist />} />
      </Routes>
      {background && (
        <Routes>
          {ProjectList.personal.map((proj: Project, i) => (
            <Route
              key={i}
              path={`projects/personal/${proj.abbr}`}
              element={<ProjectModalCard proj={proj} imgQuality={imgQuality} />}
            />
          ))}
          {ProjectList.academic.map((proj, i) => (
            <Route
              key={i}
              path={`projects/academic/${proj.abbr}`}
              element={<ProjectModalCard proj={proj} imgQuality={imgQuality} />}
            />
          ))}
        </Routes>
      )}
    </>
  );
};

export default CustomRoutes;
