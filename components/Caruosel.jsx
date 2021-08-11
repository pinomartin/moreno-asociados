import React from "react";
import { Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import styles from "../styles/Home.module.css";
import { dataClients } from "../data/clients";
import Image from "next/image";

SwiperCore.use([Navigation]);

const Caruosel = () => {
  return (
    <>
      <Row className="text-center m-5">
        <Col xs={12}>
          <h1 className="text-center">Nuestros Clientes</h1>
        </Col>
      </Row>
      <Swiper
        navigation={true}
        className={styles.swiper__container}
        // autoplay={true}
        loop
        centeredSlides={true}
        centerInsufficientSlides={true}
        title={"Nuestros Clientes"}
        slidesPerView={3}
      >
        {dataClients &&
          dataClients.map((client) => (
            <SwiperSlide key={client.id} className={styles.swiper__slide}>
              <Image
                src={client.imgSrc}
                alt={client.imgAlt}
                width={client.width}
                height={client.height}
                layout="intrinsic"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Caruosel;
