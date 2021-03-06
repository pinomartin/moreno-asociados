import React from "react";
import { Col, Row, Jumbotron } from "react-bootstrap";
import styles from "../styles/Home.module.css";

const About = () => {
  const quote = `Allá por el año 2000 los integrantes originales del Estudio, estuvieron asociados a profesionales de larga trayectoria en la Provincia.`
  const quote2 = `En el año 2007, iniciamos nuestro desafío como Moreno & Asociados.`;
  const quote3 = `El objetivo es llevar adelante nuestros servicios combinando conocimiento, estudios y experiencia previa.`;
  const quote4 = `Estamos capacitados para planificar, estructurar e instrumentar, tanto en la faz patrimonial, jurídica, económica, como en la fiscal, los negocios planteados por nuestros clientes.`
    
  return (
    <section>
      <Jumbotron className={[styles.about__mainContainer]} style={{ borderRadius: 0, background: '#F0F6F6' }}>
        <Row className={[styles.about__contentContainer]} xs={1} md={2}>
          <Col
           
            className={[
              // styles.heroColumn,
              styles.about__textSmall
              
            ]}
          >
            <p>{quote}</p>
            <p>{quote2}</p>
            <p>{quote3}</p>
            <p>{quote4}</p>
          </Col>
          <Col
            // xs={12}
            // md={4}
            className={[styles.heroColumn, styles.hero__column__quote, styles.about__quote__image]}
          >
            <p className="text-right">“Más de 20 Años de Experiencia”</p>
          </Col>
        </Row>
      </Jumbotron>
    </section>
  );
};

export default About;
