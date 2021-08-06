import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import styles from "../styles/Home.module.css";

export const Hero = () => {
  const randomNumber = (min, max, floatFlag) => {
    let r = Math.random() * (max - min) + min;
    return floatFlag ? r : Math.floor(r);
  };

  const [quote, setQuote] = useState(
    '"En el año 2007, iniciamos nuestro desafío como Moreno & Asociados."'
  );

  useEffect(() => {
    const quotes = [
      '"Servicios basados en el estudio, conocimiento y experiencia previa."',
      '"Capacitados para planificar, estructurar e instrumentar los negocios planteados por nuestros clientes."',
      '"Acompañando todo el desarrollo con asesoramiento Fiscal, Laboral y Contable."',
    ];

    const randomQuote = () => {
      const ranquote = quotes[randomNumber(0, quotes.length, false)];
      return ranquote;
    };

    const interval = setInterval(() => {
      let randomAAA = randomQuote();
      setQuote(randomAAA);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Jumbotron className={styles.hero}>
        <Row className={styles.heroRow}>
          <Col
            xs={12}
            md={4}
            className={[styles.heroColumn, styles.hero__column__quote]}
          >
            <p>“El secreto para salir adelante es empezar.”</p>
          </Col>
          <Col
            xs={12}
            md={6}
            className={[
              styles.heroColumn,
              styles.hero__column__image,
              styles.hero__column__image__text,
            ]}
          >
            {<p>{quote}</p>}
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
};
