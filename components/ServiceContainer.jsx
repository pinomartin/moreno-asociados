import React from "react";

import { Col, Row } from "react-bootstrap";
import { dataServices } from "../data/services";
import { CardService } from "./CardService";
import { ServiceButton } from "./ServiceButton";

export const ServiceContainer = () => {
  return (
    <section>
      <Row className="text-center m-5">
        <Col xs={12}>
          <h1 id="servicios">Nuestros Servicios</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {dataServices.map(({ id, title, imgSrc, imgAlt, listItems }) => (
          <Col xs={12} sm={12} md={8} lg={4} key={id}>
            <CardService
              key={id}
              title={title}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              serviceInfo={listItems}
            />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center text-center mb-5">
        <Col xs={12} sm={12} md={8} lg={4}>
          <ServiceButton />
        </Col>
      </Row>
    </section>
  );
};
