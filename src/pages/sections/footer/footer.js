
import * as React from "react";
import Container from "react-bootstrap/Container";
import "./style.scss";
import IconDownload from 
"../../../images/download.svg"
import Phone from "../../../images/phone.svg";
import WhatsIcon from "../../../images/whats.svg";

const Footer= ()=>{
  return(
    <footer 
    className=" d-flex justify-content-center 
    align-items-center  flex-column  footer-main">
      <header>
        <h2 className="download-title">
          <IconDownload className="icon-download">
          </IconDownload>
          descarga nuestro catalogo
        </h2>
      </header>
      <Container className="p-5 pb-1">
        <div className="wrapper-footer d-flex 
        flex-column align-items-center justify-content-center">
          <div className="d-flex cont-text">
            <div className="col-6">
              <span className="d-block"> pinos N. 9 secc 10 <br />
                San Miguel Canoa Puebla 72900 
              </span>
            </div>
            <div className="col-6 d-flex flex-column 
            justify-content-start align-items-center
            phones-info">
              <span className="d-block info">
                <WhatsIcon  className="icon-whats"/>
                <small className="">
                  222 291 0516
                </small>
              </span>
              <span className="d-block info">
                <WhatsIcon  className="icon-whats "/>
                <small className="">221 203 1172</small>
              </span>
              <span className="d-block info">
                <Phone className="icon-phone me-2"/>
                <small className="">
                221 435 1109
                </small>
              </span>

            </div>
          </div>
        </div>
        <div 
          className=" p-3 pb-0 d-flex justify-content-center
          align-items-center flex-column">
          <div className="text-center mail-section">
              <span className="d-block pt-2">
                servicio@delektron.com
              </span>
              <span className="d-block">
                administracion@delektron.com
              </span>
          </div>
        </div>
      </Container>
      <div className="text-center delektron">
            DELEKTRON <br />
            <small>
              ELÉCTRONICA INDUSTRIAL
            </small>
      </div>
    </footer>
  );
};
export default Footer;
