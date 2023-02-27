import React,{useEffect,useRef} from "react";
import Snap from "snapsvg-cjs"
import Delektorn from "../../../images/logo.svg";
import Wave from 
"../../../images/wave.svg";
import {
  path_wave_up,
  path_top, 
  path_bottom,
  path_wave_down,
} from "../../../resources/paths"
import "./style.scss";

const container_intro ={
  position: "relative",
  backgroundColor: "#3a86ff",
  background: "rgb(255,255,255)",
  background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(102,180,213,1) 39%, rgba(52,72,131,1) 100%)",
  height: "100vh",
  overflow: 'hidden',
}

function  disableScroll(){
  window.scrollTo(0,0);
}

let SnapJs = () => {
  const Container_intro = useRef(null);
  useEffect(()=>{
    console.log('use efect')


  var s = Snap("#path_top");
  var s_b = Snap("#path_bottom");
  let letra_d = Snap('#letra_d');
  let matrix_d = new Snap.matrix(); 
  matrix_d.translate(-32,0);

  let svg_wave = Snap("#wave");
  let path_wave = svg_wave.select('path');


    let anim_letras = ()=>{
            setTimeout(function(){

              path_wave.animate(
                {
                  d: path_wave_up
                },
                400,
                ()=>{

                  path_wave.animate({
                    d: path_wave_down
                  },300)
                }
            );
            Container_intro.current
            .classList.add('anim-out');
              /*document.getElementsByTagName("body")[0]
                .style.overflowY ="scroll";
            document.getElementsByTagName("html")[0]
                .style.overflowY ="scroll";*/
              //window.onscroll = null;
            },2000)
    }

  setTimeout(function(){
    anim_letras(  ) 
    
   },2000);
   
  })
  return (
    <div ref={Container_intro} 
    className="d-flex justify-content-center
    align-items-center " style={container_intro}>
      <Delektorn/>
      <Wave/>
  </div>
  );
}

export default SnapJs;


