import "./index.css";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import open0 from "./images/open0.webp"
import open1 from "./images/open1.webp"
import open2 from "./images/open2.webp"
import open3 from "./images/open3.webp"
import open4 from "./images/open4.webp"
import open5 from "./images/open5.webp"
import open6 from "./images/open6.webp"
import open7 from "./images/open7.webp"
import open8 from "./images/open8.webp"


function Openfinance() {

    return (
      <div className="ContainerOpen">
        <h2>OpenFinance2050.com</h2>
        <h3>
            Desarrollo, actualizo y rediseño con el apoyo de las áreas de Contenido, Diseño y Marketing la página de <a href="https://www.openfinance2050.com/" target="_blank">https://www.openfinance2050.com</a>
        </h3>
        <section className="ContainerGalleryOpen">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
            clickable: true,
        }}
        modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
        className="mySwiperOpen">
            <SwiperSlide>
            <img src={open0} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={open1} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={open2} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={open3} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={open4} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={open5} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={open6} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={open7} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={open8} />
            </SwiperSlide>
        </Swiper>
        </section>
      </div>
    )
  }
  
  export default Openfinance;