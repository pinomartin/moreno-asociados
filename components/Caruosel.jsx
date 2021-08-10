import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import styles from "../styles/Home.module.css";
import { dataClients } from "../data/clients";
import Image from "next/image";

SwiperCore.use([Navigation]);

const Caruosel = () => {
  return (
    <Swiper
      navigation={true}
      className={styles.swiper__container}
      autoplay={true}
      loop
      centeredSlides={true}
      centerInsufficientSlides={true}
      title={'Nuestros Clientes'}
      slidesPerView={'auto'}
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
      {/* <SwiperSlide className={styles.swiper__slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>Slide 9</SwiperSlide> */}
    </Swiper>
  );
};

export default Caruosel;
