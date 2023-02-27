import React,{ useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './general-style.scss';

import Snap from "snapsvg-cjs"
//import {Link} from "react-scroll";
import Row from 'react-bootstrap/Row';
import Nav from "./sections/nav/nav";
import HeaderPage from "./sections/header/header";
import About from "./sections/about/about";
import Services from "./sections/services/services";
import Footer from "./sections/footer/footer";
import SnapJs from "./sections/intro/intro";
//import {SEO} from "./seo";
const pageStyles = {
  color: "#232129",
};
  const SEO = {
    title: "DELEKTRON ",
    description:"Mantenimiento y reparación de equipo electónico industrial, drives, servodrives, tarjetas de control servomotores etc.",
    kw1:"Reparacion equipo electónico",
    kw2:"Servomotore",
    kw3:"Servo drives",
    kw4:"Tarjetas electrónicas",
  }

const IndexPage = () => {

 let paths = [
    "m 328.0838,187.32838 c 0,0 28.47303,-1.55303 92.63979,-1.97662 63.85196,-0.42151 148.28285,0.55539 223.24923,0.38865 69.85202,-0.15537 59.73263,0.0768 98.47848,0.004 37.91456,-0.071 44.16166,0.42639 70.45562,-0.0734 25.8239,-0.49084 58.68992,-2.08906 58.68992,-2.08906 l 0.0167,3.74619 z",
   "m 328.0838,187.32838 c 0,0 33.7475,2.75119 91.44959,-24.59324 57.7021,-27.34442 154.8909,31.96002 222.80516,15.62045 67.91427,-16.33957 58.76516,-14.30166 96.0591,-21.13403 37.29394,-6.83237 50.00688,21.41292 75.59228,17.87708 25.5854,-3.53584 57.62361,-31.95965 57.62361,-31.95965 l 0,44.18939 z" 
  ]

  const [scrollPosition, setScrollPosition] = useState(0);
  let transistores, resistencias, condensador, condensador_electrolitico;
  let posY = 0;



  const handleScroll = ()=>{
    const position  = window.pageYOffset;
    setScrollPosition(position);
    if( isInviewPort("#about") ){
      let snap = Snap("#svg-weave");
      let path = snap.select('path');
      path.animate(
        {d: paths[1]},
          600,
          (n)=>{return Math.pow(n, .48)},
      );
      movItems(resistencias)
      movItems(condensador)
      movItems(condensador_electrolitico)
      movItems(transistores)
    }
  }

   async function  movItems(element){
    for (let index = 0; index < element.length; index++) {
      console.log('pos y', posY)
      const mov_random = Math.random() * (.9 - .1) + .1;
      const mov_random_x = Math.random() * (.1 - .8) + .1;
      let el = element[index];
      let matrix = new DOMMatrix(
        window.getComputedStyle(el).transform 
      );
      let ty =  matrix.m42; 
      let tx =  matrix.m41; 
      
      //ty= ty - (posY * mov_random / 100);
      //tx= tx - (posY * mov_random_x / 100);
      //el.transform.baseVal.getItem(0).setTranslate(tx,ty)
    }
  }

  function isInviewPort(element){
    let limit_tolerance = (window.innerHeight ||
      document.documentElement.clientHeight) * 25 /100;
    let limit_top_anim = document.querySelector("#intro").offsetHeight;
    let start_anim = limit_top_anim - limit_tolerance;
    let end_anim = 0 -limit_top_anim + limit_tolerance;

    const rect = document.querySelector("#about").getBoundingClientRect();
    posY = rect.top;

    return (
      rect.top  <= start_anim &&
      rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
    );
  }


  const observable = new ResizeObserver((entries) => {

  });
  useEffect(()=>{
    console.log('lol')
    window.scrollTo(0,0);
    //document.getElementsByTgName("body")[0].style.overflowY ="hidden";
    //if(document.readyState == 'complete'){
    window.addEventListener('scroll', handleScroll, {passive:true});
    transistores =document.querySelectorAll(".component.transistor");
    resistencias =document.querySelectorAll(".component.resistencia");
    condensador_electrolitico =document.querySelectorAll(
      ".component.condensador-electrolitico"
    );
    condensador =document.querySelectorAll(
      ".component.condensador"
    );
      console.log('use efect')
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
      //}
  }},[]);
  
  observable.observe(document.body);


  return (
    <div>
      <SnapJs></SnapJs>
    <main style={pageStyles}>
      <Nav/>
      <HeaderPage/>
      <About/>
      <Services/>
      <Footer/>
    </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => (
  <>
  <title>{SEO.title}</title>
  <meta name="description" content={SEO.description} />
  <meta name="keywords" content={`${SEO.kw1},${SEO.kw2},${SEO.kw3},${SEO.kw4}`} />
  </>
  );
