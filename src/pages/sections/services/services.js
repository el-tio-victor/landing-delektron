import * as React from "react";
import Container from "react-bootstrap/Container";
import CatalogoEquipos from "./CatalogoEquipos";
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge"
import styled from "styled-components";
import BentelerLogo from 
"../../../images/benteler.svg";
import SimecLogo from 
"../../../images/simec.svg";
import MotzoLogo from 
"../../../images/motzo.svg";
import MondelezLogo from 
"../../../images/mondelez.svg";

import "./style.scss"


const BGImageServices1 = styled(BackgroundImage)`
  top: 0px;
  opacity: .67!important;
  position: sticky!important;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;
const Services = ()=>{

  const data_image =  useStaticQuery(
    graphql`
      query{
        file(relativePath: { eq: "bg-services1.jpg" }) {
          childImageSharp {
            fluid {
              base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            },
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
      	}
      }
    `
  );
  const image = getImage(data_image);
  const bgImage =  convertToBgImage(image);

  const imageDataServ = data_image.file.childImageSharp.fluid;
  return (
    <section id="servicios" className=" cont-services">
     <BGImageServices1 Tag="div" id="contBgServices" fluid={imageDataServ} />
        <div className="pt-5 ps-3 ps-sm-1 pe-3 pe-sm-1 ps-lg-5 pe-lg-5 position-relative 
         wrapper-services">
        <h2   
           data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
        className="title ps-0 p-5">
          <span className="title-text">SERVICIOS</span></h2>
        <p  
           data-sal="slide-up"
            data-sal-delay="300"
          data-sal-easing="ease"
          className="col-11 col-md-8 m-auto pb-4 pt-4 mt-5  mb-5  ">
            Nuestro compromiso y experiencia nos permiten brindarle
            las siguientes soluciones enfocadas a mantener el correcto
            funcionamiento de sus equipos electrónicos y con ello
            sus procesos.
          </p>
          <Container 
          className="mb-0 mb-md-5 ms-auto me-auto text-center all-services">
            <div className="d-flex flex-column flex-lg-row flex-wrap-no-wrap all-service-wrapper">
              <div 
              data-sal="slide-right"
            
              data-sal-easing="ease"
              className=" col-lg-4 ps-4 pe-4 all-service-item">
                <h5 className="item-service-title">
                  Mantenimiento preventivo y correctivo
                </h5>
                <div>
                  <p>
                    Mantenimiento preventivo para el optimo 
                    funcionamiento de su equipo electrónico, que a largo plazo 
                    prolongará su tiempo de vida. Y mantenimiento correctivo 
                    para cuando su equipo ya presenta un fallo.
                  </p>
                </div>
              </div>
              <div 
                data-sal="slide-right"
                data-sal-delay="50"
                data-sal-easing="ease"
              className=" col-md-lg-4 ps-4 pe-4 all-service-item">
                <h5 className="item-service-title">
                  Asistencia técnica en planta
                </h5>
                <div>
                  <p>
                    Brindamos soluciones y/o alternativas para el correcto
                    funcionamiento de su proceso con nuestra asistencia 
                    técnica.
                  </p>
                </div>
              </div>
              <div 
                data-sal="slide-right"
                data-sal-delay="50"
                data-sal-easing="ease"
              className=" col-lg-4 ps-4 pe-4 all-service-item">
                <h5 className="item-service-title">
                  Proyectos de automatización
                </h5>
                <div>
                  <p>
                    Elaboramos propuestas para su proyecto de automatización 
                    que se adaptan completamante a sus necesidades.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        <div className="
        wrapper-catalogo-equipos "
        >
          <CatalogoEquipos/>
        </div>
      </div>
      <div className="clientes m-auto">
        <Container>
        <p className="text-white">Gracias a nuestros clientes por su confianza...</p>
        </Container>
        <div className=" pb-4 pt-5 d-flex flex-column flex-md-row 
          justify-content-around align-items-center wrapper-clientes">
          <BentelerLogo/>
          <MondelezLogo/>
          <MotzoLogo/>
          <SimecLogo/>
        </div>
      </div>
    </section>
  );
};

export default Services;
