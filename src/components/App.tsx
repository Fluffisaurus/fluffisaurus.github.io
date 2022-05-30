import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage } from "@cloudinary/react";

const Loading = lazy(() => import("../pages/Loading"));
const Default = lazy(() => import("../pages/Default"));
const DoesNotExist = lazy(() => import("../pages/DoesNotExist"));

const GlobalNav = lazy(() => import("../components/GlobalNav"));
const Landing = lazy(() => import("../pages/Landing"));
const Projects = lazy(() => import("../pages/Projects"));
const AboutMe = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  },
});

// const testImg = cld.image("portfolio/placeholderGallery")

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <GlobalNav />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="default" element={<Default />} />
            <Route path="projects" element={<Projects />}>
              <Route path="personal"></Route>
              <Route path="academic"></Route>
            </Route>
            <Route path="about" element={<AboutMe />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<DoesNotExist />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* <AdvancedImage cldImg={testImg}/> */}
    </div>
  );
};

export default App;
