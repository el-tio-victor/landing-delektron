import React from "react";
import Container from "react-bootstrap/Container";
import {StaticImage} from "gatsby-plugin-image";
import "./style.scss";
import BGcomponents from "../../../images/patern_components.svg";

const About = ()=> {

   return(
    <div>
      <section id="about" className="position-relative
      pt-5 bg-white  cont-about">
        <BGcomponents  className="patern-components"/>
        <header className="mt-0 mt-md-5 container ps-3 pt-5  ">
        <h2 
           data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
         className="mt-3 title">
          <span className="title-text">NUESTRA EMPRESA</span>
        </h2>
        </header>
        <div className="position-relative body-about pt-5 pb-5">
          <Container className="pb-5 col-12 col-md-9 container-text-about">
          <p
           data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            Somos un equipo de profesionales electrónicos con base en la ciudad 
            de puebla y servicio a todo mexico,  
            comprometidos con el mantenimiento y 
            la reparación de diversos tipos de equipo electrónico 
            industrial, mantenimiento preventivo y correctivo, 
            ademas de servicios de asistencia técnica y proyectos 
            de automatización. 
          </p>
          </Container>
          <Container className="container-about-wrapper">
            <div
             className="cont-about-wrapper">
              <div
               className="grid-area-imagen">
                <div 
                  className="wrapper-img-about">
                   <StaticImage 
                    src="../../../images/about.jpg"
                    alt="about delektron"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center 
                grid-area-texto">
                <p className="pe-5 col-6 text-compromise">
                  Nuestro compromiso es con cada uno de nuestros 
                  clientes para brindar la mayor calidad en los
                  servicio aplicado a sus equipos.
                </p>
              </div>
              <div className="grid-area-gracias">
                <h5 className="position-relative text-center thanks">
                  A cada uno de ellos gracias por su confianza
                </h5>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}; 

export default About;
