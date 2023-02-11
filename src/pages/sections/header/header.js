import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";

import Weave from "../../../images/weave-intro.svg";
import IconFace from "../../../images/facebook.svg";

import "./style.scss";

const StyledBackgroundImage = styled(BackgroundImage)`
  top: 40px;
  opacity: 0 !important;
  position: absolute !important;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;
const HeaderPage = () => {
  const control_scroll = useRef();

  //useEffect (()=>{
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "driveheader.jpg" }) {
          childImageSharp {
            fluid(quality:100,maxWidth:1920){
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    `
  );
  const [y, setY] = useState();

  const imageData = data.file.childImageSharp.fluid;

  const get_position = () => {
    let y = control_scroll.current.offsetTop;
    setY(y);
    if (y == 0) {
      //control_scroll.current.querySelector('.header-main').classList.add('show')
    }
    console.log("y", control_scroll.current.getBoundingClientRect().top);
  };

  const observable = new ResizeObserver((entries) => {
    let y = control_scroll.current.getBoundingClientRect().top;
    console.log("y", y);
    if (y == 0) {
      //control_scroll.current.querySelector('.header-main').classList.add('show')
      control_scroll.current
        .querySelector("#bg-header-intro")
        .classList.add("show");
    }
  });

  useEffect(() => {
    get_position();
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      //control_scroll.current.querySelector('.header-main')
      //.style.position="sticky";
    });
  });
  observable.observe(document.body);

  return (
    <section
      id="intro"
      ref={control_scroll}
      className=" 
    d-flex
      justify-content-between
      align-items-end
    cont-intro"
    >
      <StyledBackgroundImage Tag="div" id="bg-header-intro" fluid={imageData} />
      <div className="col-12 mb-3 wrapper-intro">
        <div className="m-1 m-sm-3 m-md-5 d-flex flex-column  flex-sm-row
        align-items-center justify-content-start row-intro">
          <div className="p-2 row-intro-wrapper">
          <h1 className="text-center">DELEKTRON</h1>
          <h5 className="text-white text-center">
            Mantenimiento y reparación equipo electrónico industrial
          </h5>
          <footer 
          className="text-white d-flex flex-column
            justify-content-center align-items-center ">
            <small>administracion@delektron.com</small>
            <small>servicio@delektron.com</small>
          </footer>
          </div>
          <span className="pt-0 ps-sm-3 pt-sm-0">
            <a 
             href="https://www.facebook.com/profile.php?id=100089116303876&mibextid=ZbWKwL"
            target="_blank">
              <IconFace/>
            </a>
          </span>
        </div>
        <Weave/>
      </div>
    </section>
  );
};

export default HeaderPage;
