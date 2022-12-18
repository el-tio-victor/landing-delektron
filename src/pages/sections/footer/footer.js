
import * as React from "react";
import Container from "react-bootstrap/Container";
import "./style.scss";

const Footer= ()=>{
  return(
    <footer>
      <Container className="p-5 pb-1">
        <div className="wrapper-footer d-flex 
        flex-column align-items-center justify-content-center">
          <div className="d-flex cont-text">
            <div className="col-6">
              <span className="d-block"> pinos N. 9 secc 10 <br />
                San Miguel Canoa Puebla 72900 
              </span>
              <span className="d-block pt-2">
                servicio@delektron.com
              </span>
              <span className="d-block">
                administracion@delektron.com
              </span>
            </div>
            <div className="col-6 d-flex flex-column 
            justify-content-start align-items-center">
              <span className="d-block">
                222 291 0516
              </span>
              <span className="d-block">
                221 203 1172
              </span>
              <span className="d-block">
                221 435 1109
              </span>

            </div>
          </div>
          <div 
          className=" p-3 pb-0 d-flex justify-content-center
          align-items-center flex-column">
            DELEKTRON
            <small>
              ELÉCTRONICA INDUSTRIAL
            </small>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
