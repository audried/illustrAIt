import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from '../../styles/Swiper.module.css';


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function SimpleSlider() {

    const srclist = [
        "https://swiperjs.com/demos/images/nature-1.jpg",
        "https://swiperjs.com/demos/images/nature-2.jpg",
        "https://swiperjs.com/demos/images/nature-3.jpg",
        "https://swiperjs.com/demos/images/nature-4.jpg",
        "https://swiperjs.com/demos/images/nature-5.jpg",
        "https://swiperjs.com/demos/images/nature-6.jpg",
        "https://swiperjs.com/demos/images/nature-7.jpg",
        "https://swiperjs.com/demos/images/nature-8.jpg",
        "https://swiperjs.com/demos/images/nature-9.jpg"

    ]
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.swiper}
      >
        {srclist.map((url) => { return(
            <SwiperSlide className={styles.swiperslide}>
                <img src={url} />
            </SwiperSlide>)
        })}

       
      </Swiper>
    </>
  );
}
