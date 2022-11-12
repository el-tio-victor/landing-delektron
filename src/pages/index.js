import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './general-style.css';

import HeaderPage from "./sections/header/header";
import About from "./sections/about/about";
import SnapJs from "./sections/intro/intro";
import Services from "./sections/services/services";
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return (
    <div>
      <SnapJs></SnapJs>
    <main style={pageStyles}>
      <HeaderPage/>
      <About/>
      <Services/>
    </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>DELEKTRON</title>;
