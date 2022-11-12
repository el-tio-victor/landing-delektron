import * as React from "react";
import Container from "react-bootstrap/Container";
import "./style.css";


const About = ()=> {
  return(
    <div>
      <section id="about" className="position-relative
      pt-5 bg-white pb-5 cont-about">
        <header className="ps-3 pt-5  ">
        <h2 className="mt-3 title">
          NUESTRA 
        </h2>
        <h2 className="ps-3 title2">EMPRESA</h2>
        </header>
        <div className=" body-about pt-5 pb-5">
          <Container className="col-12 col-md-9 container-text-about">
          <p>
            Somos un equipo de profesionales electrónicos con base en la ciudad 
            de puebla y servicio a todo mexico,  
            comprometidos con el mantenimiento y 
            la reparación de diversos tipos de equipo electrónico 
            industrial, mantenimiento preventivo y correctivo, ademas de servicios de asistencia técnica y proyectos 
            de automatización. 
          </p>
          </Container>
          <Container className="position-relative">
            <div className="banner-about">
            </div>
            <div className="d-flex justify-content-end">
              <p className="pe-5 col-6 text-compromise">
               Nuestro compromiso es con cada uno de nuestros 
                clientes para brindar la mayor calidad en los
                servicio brindados a sus equipos.
              </p>
            </div>
          </Container>
        </div>
        <h5 className="position-relative text-center thanks">
            A cada uno de ellos gracias por su confianza
        </h5>
      </section>
    </div>
  );
}; 

export default About;
