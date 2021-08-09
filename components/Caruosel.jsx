import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import styles from "../styles/Home.module.css";
import { dataClients } from '../data/clients'

SwiperCore.use([Navigation]);

const Caruosel = () => {
  return (
    
      <Swiper navigation={true} className={styles.swiper__container} autoplay={true} loop slidesPerView={3}>
        {
          
          dataClients && dataClients.map( client => (
            <SwiperSlide key={client.id} className={styles.swiper__slide}><img src={client.imgSrc} alt={client.imgAlt} /></SwiperSlide>
            ))
        }
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
