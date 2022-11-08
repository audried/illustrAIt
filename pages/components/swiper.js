import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


import styles from '../../styles/Swiper.module.css';


// import required modules
import { Autoplay, Navigation } from "swiper";

export default function PhotoSwiper() {

    const srclist=[
        '/dalle-generations/a.png',
        '/dalle-generations/b.png',
        '/dalle-generations/c.png',
        '/dalle-generations/d.png',
        '/dalle-generations/e.png',
        '/dalle-generations/f.png',
        '/dalle-generations/g.png',
        '/dalle-generations/h.png',
        '/dalle-generations/i.png',
        '/dalle-generations/j.png',
        '/dalle-generations/k.png',
        '/dalle-generations/l.png',
        '/dalle-generations/m.png',
        '/dalle-generations/n.png',
        '/dalle-generations/o.png',
        '/dalle-generations/p.png',
        '/dalle-generations/q.png',
    ]
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // coverflowEffect={{
        //   rotate: 15,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
       
        modules={[ Navigation, Autoplay]}
        //navigation={true}
        className={styles.swiper}
        // breakpoints={{
        //   500: {
        //     slidesPerView: 1,
        //   },
        //   1024: {
        //     slidesPerView:'auto'
        //   },
        // }
        // }
      >
        {srclist.map((url) => { return(
            <SwiperSlide className={styles.swiperslide}>
                <Image src={url} height={250} width={250}/>
            </SwiperSlide>)
        })}

       
      </Swiper>
    </>
  );
}
