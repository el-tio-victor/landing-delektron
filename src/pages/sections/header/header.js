
import React,{useState,useEffect,useRef} from "react";
import Container from 'react-bootstrap/Container';
import {Link} from "react-scroll";
import Row from 'react-bootstrap/Row';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from "styled-components";

import "./style.scss";

const StyledBackgroundImage = styled(BackgroundImage)`
  top: 40px;
  opacity: 0!important;

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
  const data =  useStaticQuery(
    graphql`
      query{
	file(relativePath: { eq: "driveheader.jpg" }) {
          childImageSharp {
            fluid {
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
  const [y,setY] = useState();
  
  const imageData = data.file.childImageSharp.fluid;

  const get_position = ()=>{
    let y = control_scroll.current.offsetTop;
    setY(y)
    if(y == 0){
      
      //control_scroll.current.querySelector('.header-main').classList.add('show')
    }
    console.log('y',control_scroll.current.getBoundingClientRect().top)
  }

  const observable = new  ResizeObserver(
    (entries)=>{
      let y = control_scroll.current.getBoundingClientRect().top;
      if(y == 0){
        control_scroll.current.querySelector('.header-main').classList.add('show')
        control_scroll.current.querySelector('#bg-header-intro').classList.add('show')
      }
    }
  );

  useEffect (()=>{
    get_position()
  })
  useEffect (()=>{
    window.addEventListener("scroll",()=>{

      control_scroll.current.querySelector('.header-main')
      .style.position="sticky";
    })
  })
  observable.observe(document.body);

  return (
    <section id="intro" ref={control_scroll} className=" 
    d-flex flex-column
      justify-content-between
      align-items-center
    cont-intro">
    <header className="text-white header-main">
        <div  
        className="m-1 border-bottom p-2 d-flex
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
              <span className='ms-1 me-1'>
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
              </span>
              <span className='ms-1 me-1'>
                servicios
              </span>
              <span className='ms-1 me-1'>
                contacto</span>
            </nav>
          </Row>
        </div>
      </header>
       <StyledBackgroundImage
     Tag="div"
       id="bg-header-intro"
      fluid={imageData}
    />
      <div className="col-12 mb-3 wrapper-intro">
      <Row  className="m-3 m-md-5 justify-content-start row-intro"
      >
      <h1 className='text-center'>
        DELEKTRON
      </h1>
      <h5 className='text-white text-center'>
        Mantenimiento y reparación equipo electrónico industrial 
      </h5>
    </Row>
      </div>
    </section>
  );
};

export default HeaderPage;
