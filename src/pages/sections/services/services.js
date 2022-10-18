import * as React from "react";
import Container from "react-bootstrap/Container";

import "./style.scss"

const Services = ()=>{
  return (
    <section className="pb-5 cont-services">
      <div className="">
          <h2 className="p-5">Servicios</h2>
        <Container className="
        wrapper-service bg-white"
        >
          <div className="grid-services">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Services;
