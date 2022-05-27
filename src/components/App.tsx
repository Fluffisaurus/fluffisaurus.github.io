import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Cloudinary } from "@cloudinary/url-gen";

import Landing from "../pages/Landing";
import AboutMe from "../pages/About";
import Contact from "../pages/Contact";
import { Default, DoesNotExist } from "../pages/Defaults";

const App = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "djlcricbu",
    },
  });

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
    </div>
  );
};

export default App;
