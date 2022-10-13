
import * as React from "react";
import Container from 'react-bootstrap/Container';
import {Link} from "react-scroll";
import Row from 'react-bootstrap/Row';

import "./style.css";
const HeaderPage = () => {
  return (
    <section id="intro" className=" 
    d-flex flex-column
      justify-content-between
      align-items-center
    cont-intro">
    <header className="bg-white header-main">
        <div  
        className="p-3 d-flex
          justify-content-between
          wrapper-header">
          <div className="icon-cont">icon</div>
          <Row >
            <nav className="d-flex">
              <strong className='ms-1 me-1'>
                <Link
                activeClass="active"
                to="intro" spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >
                  inicio
                </Link>
              </strong>
              <strong className='ms-1 me-1'>
                <Link
                activeClass="active"
                to="about" spy={true}
                nosotrod
                n estaba
                smooth={true}
                offset={-100}
                duration={500}
                >
                nosotros
                </Link>
              </strong>
              <strong className='ms-1 me-1'>
                servicios
              </strong>
              <strong className='ms-1 me-1'>
                contacto</strong>
            </nav>
          </Row>
        </div>
      </header>
      <div className="wrapper-intro">
      <Container 
      >
      <h1 className='text-center'>
        DELEKTRON
      </h1>
      <h4 className='text-center'>
        Mantenimiento y reparación equipo electrónico industrial 
      </h4>
    </Container>
      </div>
    </section>
  );
};

export default HeaderPage;
