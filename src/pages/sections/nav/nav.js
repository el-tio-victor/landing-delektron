
import React,{useState,useEffect,useRef} from "react";
import {Link} from "react-scroll";
import Row from 'react-bootstrap/Row';
import "./style.scss";
import Logo from 
"../../../images/simple-logo.svg";

const Nav = () => {
  return (
    <div>
    <header className=" header-mai">
        <div  
        className="m-1 p-2 pt-1 pb-1 ps-md-4 pe-md-4 d-flex
          justify-content-center justify-content-sm-between wrapper-header
          ">
          <div className="icon-cont"><Logo/></div>
          <Row className="links">
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
              <span className='ms-1 me-1'>
                <Link
                activeClass="active"
                to="about" spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                >
                nosotros
                </Link>
              </span>
              <span className='ms-1 me-1'>
                <Link
                activeClass="active"
                to="servicios" spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                >
                servicios
                </Link>
              </span>
              <span className='ms-1 me-1'>
                <Link
                activeClass="active"
                to="contacto" spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                >
                contacto
                </Link>
                
              </span>
            </nav>
          </Row>
        </div>
      </header>
    </div>
  );
}

export default Nav;

