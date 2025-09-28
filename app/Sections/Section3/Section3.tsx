"use client";
import { CardProductsingle } from "@/app/Components/CardProductsingle/CardProductsingle";
import { Reactswiper } from "@/app/Components/Reactswiper/Reactswiper";
import { productResponse } from "@/app/interfaces/product-interfaces";
import { SwiperSlide } from "swiper/react";

interface proms {
  data: productResponse[];
}

export const Section3 = ({ data }: proms) => {

  return (
    <div className="container  mx-auto   my-8">
      <Reactswiper
        slidesPerView={1}
        spaceBetween={1}
        grabCursor={false}
        navigation={true}
        centeredSlides={false}
        dataResultado={data.map((result: productResponse) => (
          <SwiperSlide key={result.id}>
            <CardProductsingle
              category={result.category}
              description={result.description}
              key={`card-${result.id}`}
              id={result.id}
              title={result.title}
              image={result.image}
              price={result.price}
              rating={result.rating}
            />
          </SwiperSlide>
        ))}
      />
    </div>
  );
};
