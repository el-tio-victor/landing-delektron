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
  opacity: .4!important;
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
    <section className="pb-5 cont-services">
     <BGImageServices1 Tag="div" id="contBgServices" fluid={imageDataServ} />
        <div className="pt-5 ps-5 pe-5 position-relative 
         wrapper-services">
          <h2 className="title p-5">Servicios</h2>
          <p className="col-11 col-md-8 m-auto mb-5  ">
            Nuestro compromiso y experiencia nos permiten brindarle
            las siguientes soluciones enfocadas a mantener el correcto
            funcionamiento de sus equipos electrónicos y con ello
            sus procesos.
          </p>
          <Container className="mb-5 all-services">
            <div className="d-flex all-service-wrapper">
              <div className=" col-4 p-4 all-service-item">
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
              <div className=" col-4 p-4 all-service-item">
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
              <div className=" col-4 p-4 all-service-item">
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
        <Container className="
        wrapper-catalogo-equipos "
        >
          <CatalogoEquipos/>
        </Container>
      </div>
      <div className=" m-auto">
        <Container>
        <p>Gracias a nuestros clientes por su confianza...</p>
        </Container>
        <div className="d-flex justify-content-around wrapper-clientes">
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
