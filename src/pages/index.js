import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './general-style.css';

import {Link} from "react-scroll";
import Row from 'react-bootstrap/Row';
import Nav from "./sections/nav/nav";
import HeaderPage from "./sections/header/header";
import About from "./sections/about/about";
import Services from "./sections/services/services";
import Footer from "./sections/footer/footer";
import SnapJs from "./sections/intro/intro";
const pageStyles = {
  color: "#232129",
};

const IndexPage = () => {
  return (
    <div>
      <SnapJs></SnapJs>
    <main style={pageStyles}>
      <Nav/>
      <HeaderPage/>
      <About/>
      <Services/>
      <Footer/>
    </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>DELEKTRON</title>;
