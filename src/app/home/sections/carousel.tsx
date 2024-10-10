/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; 
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination"; // Import pagination styles
// import "../../../App.css"; // Import custom styles
import SendMoney from "../components/send-money";
import RecievePayment from "../components/recieve-payment";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

type SwiperType = any;

const Carouselg = ({ deviceType }: any) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.autoplay.start(); // Start autoplay
    }
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Autoplay, EffectFade, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      effect="fade"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      fadeEffect={{ crossFade: true }}
      pagination={{
        clickable: true,
        renderBullet: (index: number, className: any) => {
          const color = index === 0 ? "#009FDD" : "#027A48";
          return `<span class="${className}" style="background-color: ${color}; width: 20px; border-radius: 15%;"></span>`;
        },
      }}
      
      style={{ backgroundColor: "#000"  }}
    >
      <SwiperSlide>
        <SendMoney deviceType={deviceType} />
      </SwiperSlide>
      <SwiperSlide>
        <RecievePayment deviceType={deviceType} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carouselg;
