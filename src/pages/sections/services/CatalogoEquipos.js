import * as React from "react";
const catalogo =[
  {
    title:"Drives AC/DC",
    description:""
  },
  {
    title:"Tarjetas de control",
    description:""
  },
  {
    title:"UPS'S y fuentes de voltaje",
    description:""
  },
  {
    title:"Servodrives",
    description:""
  },
  {
    title:"Computadoras industriales",
    description:""
  },
  {
    title:"Equipos de ultrasonido",
    description:""
  }, 
  {
    title:"Servomotores",
    description:""
  },
  {
    title:"Dispositivos de retroalimentación",
    description:""
  },
  {
    title:"Corte y soldadura",
    description:""
  },
  {
    title:"Unidades de voltaje laser",
    description:""
  },
];
const items = catalogo.map((item,index)=>
  <div key={index}
    data-sal="slide-right"
  data-sal-delay={(index+1)%2 == 0 ? 500 : 600}
    data-sal-easing="ease"
  >
    <h4 className="text-center grid-service-item-title">
      {item.title}
    </h4>
  </div>
);
const CatalogoEquipos = ()=>{
  return(
    <div className="pt-5">
      <p className="mt-4 pb-5 mb-5">
        Algo de nuestro catalogo de servicios...
      </p>
      <div className="grid-services">
        {items}
      </div>
      <div className="footer-services pt-5  mt-5">
        <h4 className="pt-5 grid-service-item-title">
          Otros...
        </h4>
        <div className="p-4 wrapper-items-otros d-flex">
          <h5 className="item-otros"> Balastros electrónicos</h5>
          <h5 className="item-otros">Equipo para instrumentación</h5>
          <h5 className="item-otros">Control de puertas</h5>
          <h5 className="item-otros">Taladros Industriales</h5>
          <h5 className="item-otros">Displays</h5>
        </div>
      </div>
      <div className="mb-5 mt-5 pt-5 pb-5 col-10  extras">
        <h3 className="title"><span className="title-txt">Y mas...</span> </h3>
        <p className="   ps-4 me-4">
          <br />
          Ademas contamos con un amplio stock en refacciones y proveedores
          nacionales e internacionales para poder brindarle una respuesta en 
          menor tiempo.
        </p>
      </div>
    </div>

  );
}

export default CatalogoEquipos;
