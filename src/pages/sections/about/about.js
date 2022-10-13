import * as React from "react";
import Container from "react-bootstrap/Container";
import "./style.css";


const About = ()=> {
  return(
    <div>
      <section id="about" className="cont-about">
        <header className="ps-3">
        <h2 className="title">
          NUESTRA 
        </h2>
        &nbsp;
        <h2 className="title2">EMPRESA</h2>
        </header>
        <div className=" body-about pt-5 pb-5">
          <Container>
          <p>
            Somos una empresa poblana dedicana al mantenimiento y 
            reparación de diversos tipos de equipo electónico 
            industrial, mantenimiento preventivo y coorectivo ademas de 
            servicios de asistencia técnica y proyectos 
            de automatización. 
          </p>
          </Container>
          <Container>
            <div className="d-flex justify-content-end">
              <p className="col-6">
               Nuestro compromiso es con cada uno de nuestros 
                clientes para brindar la mayor calidad en el servicio
                de sus equipos.
              </p>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}; 

export default About;
