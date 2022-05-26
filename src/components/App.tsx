import React from "react";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <span>
        <h1>angus_hon@software_engineer</h1>
      </span>
      <nav>
        <Link to="/default">default</Link> |{" "}
        <Link to="/about-me">about me</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default App;
