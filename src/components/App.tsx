import React, { Suspense, lazy, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage } from "@cloudinary/react";

const Loading = lazy(() => import("../pages/Loading"));
const Default = lazy(() => import("../pages/Default"));
const DoesNotExist = lazy(() => import("../pages/DoesNotExist"));

const GlobalNav = lazy(() => import("../components/GlobalNav"));
const Landing = lazy(() => import("../pages/Landing"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const Selection = lazy(() => import("../pages/projects/Selection"));
const Academic = lazy(() => import("../pages/projects/Academic"));
const Personal = lazy(() => import("../pages/projects/Personal"));
const AboutMe = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  },
});

// const testImg = cld.image("portfolio/placeholderGallery")

const App = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [openSubLinks, setOpenSubLinks] = useState<boolean>(false);

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <GlobalNav
          toggleNav={toggleNav}
          setToggleNav={setToggleNav}
          openSubLinks={openSubLinks}
          setOpenSubLinks={setOpenSubLinks}
        />
        <div className={!toggleNav ? "Container" : "Container Container--open"}>
          <Routes>
            <Route
              path="/"
              element={
                <Landing
                  openSubLinks={openSubLinks}
                  setOpenSubLinks={setOpenSubLinks}
                />
              }
            />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />}>
              <Route index element={<Selection />} />
              <Route path="personal" element={<Personal />} />
              <Route path="academic" element={<Academic />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="default" element={<Default />} />
            <Route path="*" element={<DoesNotExist />} />
          </Routes>
        </div>
      </Suspense>
      {/* <AdvancedImage cldImg={testImg}/> */}
    </div>
  );
};

export default App;
