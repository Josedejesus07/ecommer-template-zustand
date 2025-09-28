"use client";
import { Swiper } from "swiper/react";
import "swiper/css";
import "./css/reactswiper.css";
//navigation css
import "swiper/css/navigation";


//import "swiper/css/effect-coverflow";
import { Navigation } from "swiper/modules";
interface Props {
  dataResultado: React.ReactNode[];
  slidesPerView: number | "auto";
  spaceBetween: number;
  centeredSlides: boolean;
  navigation?:boolean
  grabCursor?:boolean
}

export const Reactswiper = ({
  dataResultado,
  slidesPerView,
  spaceBetween,
  centeredSlides,
  navigation,
  grabCursor
}: Props) => {
  return (
    <Swiper
      className="mySwiper"
      navigation={navigation||false}
      modules={[Navigation]}
      spaceBetween={spaceBetween || 5}
      slidesPerView={slidesPerView}
      centeredSlides={centeredSlides || true}
      //   effect={"coverflow"}
      grabCursor={grabCursor||false}
      /*  coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}*/
      //  modules={[EffectCoverflow]}
      breakpoints={{
        1024: {
          slidesPerView: slidesPerView,
          spaceBetween: 5,
          centeredSlides: true,
        },
        768: {
          slidesPerView: slidesPerView === 1 ? 1 : 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 1,
          centeredSlides: true,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {dataResultado}
    </Swiper>
  );
};
