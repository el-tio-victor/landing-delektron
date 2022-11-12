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
} from "./paths.js"
import "./style.scss";

const container_intro ={
  position: "relative",
  backgroundColor: "#3a86ff",
  height: "100vh",
  overflow: 'hidden',
}

let SnapJs = () => {
  const Container_intro = useRef(null);
  useEffect(()=>{


  var s = Snap("#path_top");
  var s_b = Snap("#path_bottom");
  let letra_d = Snap('#letra_d');
  let group_electronica_industrial = Snap('#group_electronica_industrial');
  let matrix_d = new Snap.matrix(); 
  matrix_d.translate(-32,0);
  console.log('container ',group_electronica_industrial);

  let svg_wave = Snap("#wave");
  let path_wave = svg_wave.select('path');

  let group_delektron = Snap('.group-delektron');
  let letras = group_delektron.selectAll('.letras');

    let anim_letras = (letras, index)=>{
      if(letras[index]){

      let sn = Snap(letras[index].node);
        //console.log(sn);

        sn.animate(
          {
            transform:matrix_d,
            'fill': '#004a96'
          },
          150,
          ()=>{
            group_electronica_industrial.node.classList.add('group-show')
            anim_letras(letras,index+1)
          }
        )
      }else{
        s.animate(
        {'d': path_top,'fill':'#ccc'},
          600,
          (n)=>{return Math.pow(n, .48)},
          ()=>{
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
            },2000)
          }
        );
      }
      //}
    }

  s.attr({
    "fill":"#000"
  })
  setTimeout(function(){
   
      s_b.animate(
        {'d': path_bottom,'fill':'#004a96'},
        700,
        (n)=>{return Math.pow(n, .48)},
        ()=>{
          letra_d.animate(
            {transform:matrix_d,
              'fill':'#004a96'},250,
            ()=>{
              anim_letras(
                letras,0
              );
            }
          );
        },
      )
    
   },2000);
   
    //console.log('snap',path_length); 
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


