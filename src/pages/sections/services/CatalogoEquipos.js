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
const items = catalogo.map((item)=>
  <div>
    <h4 className="grid-service-item-title">
      {item.title}
    </h4>
  </div>
);
const CatalogoEquipos = ()=>{
  return(
    <div className="pt-5">
      <p>
        Algo de nuestro expertise incluye pero no se limita a los siguientes equipos...
      </p>
      <div className="grid-services">
        {items}
      </div>
      <div className="footer-services mt-5">
        <h4 className="grid-service-item-title">
          Otros...
        </h4>
        <div className="wrapper-items-otros d-flex">
          <h5 className="item-otros"> Balastros electrónicos</h5>
          <h5 className="item-otros">Equipo para instrumentación</h5>
          <h5 className="item-otros">Control de puertas</h5>
          <h5 className="item-otros">Taladros Industriales</h5>
          <h5 className="item-otros">Displays</h5>
        </div>
      </div>
      <p className="pt-5 pb-5">Y mas... 
        <br />
        Ademas contamos con un amplio stock en refacciones y proveedores
        nacionales e internacionales para poder brindarle una respuesta en menor tiempo.
      </p>
    </div>

  );
}

export default CatalogoEquipos;
