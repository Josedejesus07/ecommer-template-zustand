"use client";
import { Cardproduct } from "@/app/Components/Cardproduct/Cardproduct";
import { Iconcustom } from "@/app/Components/Iconcustom/Iconcustom";
import { Reactswiper } from "@/app/Components/Reactswiper/Reactswiper";
import { productResponse } from "@/app/interfaces/product-interfaces";
import { useRouter } from "next/navigation";
import { SwiperSlide } from "swiper/react";

interface proms {
  data: productResponse[];
}
export const Section1 = ({ data }: proms) => {
  const router = useRouter();
  const redictExploreproduct = () => {
    router.push("/product/explore");
  };
  return (
    <div className="container mx-auto flex flex-col gap-1 py-30">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-[32px]">Our main products</h2>

        <button
          onClick={redictExploreproduct}
          className="w-[123px] h-[36px] flex gap-1 justify-center items-center rounded-[20px] bg-[var(--color-primary)] text-white cursor-pointer"
        >
          Explore
          <Iconcustom
            classStyle="text-white w-[24px] h-[24px]"
            iconName="ep:right"
          />
        </button>
      </div>

      <div className="container mx-auto py-8">
        <Reactswiper
          centeredSlides={true}
          spaceBetween={5}
          slidesPerView={3}
          grabCursor={true}
          navigation={false}
          dataResultado={
            data &&
            data.map((result: productResponse) => (
              <SwiperSlide key={result.id}>
                <Cardproduct
                  key={`card-${result.id}`}
                  id={result.id}
                  title={result.title}
                  img={result.image}
                  price={result.price}
                  rating={result.rating}
                />{" "}
              </SwiperSlide>
            ))
          }
        />
      </div>
    </div>
  );
};
