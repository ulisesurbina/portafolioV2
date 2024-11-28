import "./index.css";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

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
        modules={[Navigation, EffectCoverflow, Pagination]}
        className="mySwiperOpen">
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
        </Swiper>
        </section>
      </div>
    )
  }
  
  export default Openfinance;