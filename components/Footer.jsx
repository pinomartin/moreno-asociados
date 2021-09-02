import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";


const Footer = () => {
  return (
    <footer className={[styles.footerCustom]}>
      <Row className="justify-content-end align-items-center">
        <Col xs={12} md={6} className="text-center mt-3">
         <p className="m-0">Av. Fernando Fader 3763</p>
         <p className="m-0">1° Piso - Oficina C</p>
         <p className="m-0">Cerro de las Rosas. CP. 5009 - Córdoba - Argentina.</p>
        </Col>
        <Col xs={12} md={6} className="text-center mt-3">
         <p className="m-0">Estudio L. Felipe Moreno & Asociados. ©</p>
         <small>Todos los derechos reservados.</small> 
         <small className="d-block">2021</small> 
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
         <small>Desarrolado por<a href="https://pinomartin.netlify.app" target="_blank" rel="noreferrer" className="text-white"> MP Web Dev </a></small> 
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
