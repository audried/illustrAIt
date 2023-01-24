import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";


import styles from '../styles/Swiper.module.css';


// import required modules
import { Lazy, Autoplay, Navigation } from "swiper";

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
        '/dalle-generations/r.png',
        '/dalle-generations/s.png',
        '/dalle-generations/t.png',
        '/dalle-generations/u.png',
        '/dalle-generations/v.png',
        '/dalle-generations/w.png',
        '/dalle-generations/x.png',
        '/dalle-generations/y.png',
        '/dalle-generations/z.png',
        '/dalle-generations/aa.png',
        '/dalle-generations/bb.png',
        '/dalle-generations/cc.png',
        '/dalle-generations/dd.png',
        '/dalle-generations/ee.png',
        '/dalle-generations/ff.png',
        '/dalle-generations/gg.png',
        '/dalle-generations/hh.png',
        '/dalle-generations/ii.png',
        '/dalle-generations/jj.png',
        '/dalle-generations/kk.png',
        '/dalle-generations/ll.png',
        '/dalle-generations/mm.png',
        '/dalle-generations/nn.png',
        '/dalle-generations/oo.png',
        '/dalle-generations/pp.png',
        '/dalle-generations/qq.png',
        '/dalle-generations/rr.png',
        '/dalle-generations/ss.png',
        '/dalle-generations/tt.png',
        '/dalle-generations/uu.png',
        '/dalle-generations/vv.png',
        '/dalle-generations/ww.png'
  
    ].sort(() => (Math.random() > .5) ? 1 : -1)

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
        preloadImages={false}
    // Enable lazy loading
        lazy={true}
        // coverflowEffect={{
        //   rotate: 15,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
       
        modules={[ Lazy, Navigation, Autoplay]}
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
            <SwiperSlide className={styles.swiperslide} key={url}>
                <Image src={url} height={250} width={250} key={url} alt='image generated with DALLE-2 in a carousel'/>
            </SwiperSlide>)
        })}

       
      </Swiper>
    </>
  );
}
