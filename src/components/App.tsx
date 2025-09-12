import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Box } from "@mui/material";

const Loading = lazy(() => import("../pages/Loading"));
const Default = lazy(() => import("../pages/Default"));
const DoesNotExist = lazy(() => import("../pages/DoesNotExist"));

const CustomOptionsDial = lazy(() => import("./CustomOptionsDial"));
const GlobalNav = lazy(() => import("../components/GlobalNav"));
const Landing = lazy(() => import("../pages/Landing"));
const Projects = lazy(() => import("../pages/Projects"));
const Selection = lazy(() => import("../pages/projects/Selection"));
const Academic = lazy(() => import("../pages/projects/Academic"));
const Personal = lazy(() => import("../pages/projects/Personal"));
const AboutMe = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

const ProjectModalCarousel = lazy(
  () => import("../components/ProjectModalCarousel")
);
import { ProjectList } from "../content/projects/project-list";
import { Project } from "../content/projects/interfaces";

const App = () => {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const background = location.state && (location.state as any).background;

  useEffect(() => {
    localStorage.removeItem("animatedOnLoad"); // clean up on unmount
  }, []);

  return (
    <Box className="App">
      <CustomOptionsDial />
      <Suspense fallback={<Loading />}>
        <GlobalNav />
        <Box
          className={
            location.pathname == "/" ? "Container" : "Container Container--open"
          }
        >
          <Routes location={background || location}>
            <Route path="/" element={<Landing />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />}>
              <Route index element={<Selection />} />
              <Route path="personal" element={<Personal />} />
              <Route
                path="personal/*"
                element={<Navigate to="/projects/personal" replace />}
              />
              <Route path="academic" element={<Academic />} />
              <Route
                path="academic/*"
                element={<Navigate to="/projects/academic" replace />}
              />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="default" element={<Default />} />
            <Route path="*" element={<DoesNotExist />} />
          </Routes>
          {background && (
            <Routes>
              {ProjectList.personal.map((proj: Project, i) => (
                <Route
                  key={i}
                  path={`projects/personal/${proj.abbr}`}
                  element={<ProjectModalCarousel proj={proj} />}
                />
              ))}
              {ProjectList.academic.map((proj, i) => (
                <Route
                  key={i}
                  path={`projects/academic/${proj.abbr}`}
                  element={<ProjectModalCarousel proj={proj} />}
                />
              ))}
            </Routes>
          )}
        </Box>
      </Suspense>
    </Box>
  );
};

export default App;
