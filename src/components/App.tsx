import React, { Suspense, lazy, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../mui/theme";

const Loading = lazy(() => import("../pages/Loading"));
const Default = lazy(() => import("../pages/Default"));
const DoesNotExist = lazy(() => import("../pages/DoesNotExist"));

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
import { Box, CssBaseline } from "@mui/material";

const App = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const background = location.state && (location.state as any).background;

  return (
    <ThemeProvider theme={theme} defaultMode="light" noSsr>
      <CssBaseline />
      <Box className="App">
        <Suspense fallback={<Loading />}>
          <GlobalNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
          <Box
            className={!toggleNav ? "Container" : "Container Container--open"}
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
    </ThemeProvider>
  );
};

export default App;
