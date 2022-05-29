import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage } from "@cloudinary/react";

import Landing from "../pages/Landing";
import AboutMe from "../pages/About";
import Contact from "../pages/Contact";
import { Default, DoesNotExist } from "../pages/Defaults";

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
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/default" element={<Default />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<DoesNotExist />} />
        </Routes>
      </BrowserRouter>
      {/* <AdvancedImage cldImg={testImg}/> */}
    </div>
  );
};

export default App;
