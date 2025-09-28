"use client";

import { useRouter } from "next/navigation";
import { useProduct } from "../../zustand/add-product-store";
import { Iconcustom } from "../Iconcustom/Iconcustom";
import { useState } from "react";
import { Tooltip } from "@heroui/react";

interface promsRating {
  rate: number;
  count: number;
}
interface proms {
  id: number;
  img: string;
  title: string;
  price: number;
  rating: promsRating;
}

export const Cardproduct = ({ id, img, title, price, rating }: proms) => {
  const router = useRouter();
  const {
    addProduct,
    removeProduct,
    product,
    productLike,
    addLikeproduct,
    removeLikeproduct,
    addProductid,
  } = useProduct();
  const isagg = product.some((result) => result.id === id);
  const islike = productLike.some((result) => result.id === id);
  const [stateButton, setstateButton] = useState(isagg || false);
  const [Statelike, setStatelike] = useState(islike || false);

  const addCart = () => {
    addProduct({ id, img, title, price, count: 1 });
    setstateButton(true);
  };

  const removeCart = () => {
    removeProduct(id);
    setstateButton(false);
  };

  const addLike = () => {
    addLikeproduct({ id, img, title });
    setStatelike(true);
  };

  const removeLike = () => {
    removeLikeproduct(id);
    setStatelike(false);
  };

  const getPageproduct = () => {
    router.push("/product");
    addProductid(id);
  };
  return (
    <div className="w-[237px] h-[311px] flex flex-col gap-1 rounded-[10px] shadow-lg bg-[#FFFFFF]">
      <div className="relative">
        <img
          src={img}
          alt="imagen de un producto"
          className="w-[237px] h-[167px] object-contain rounded-[10px] bg-[#CCCCCC] "
        />
        {Statelike && islike ? (
          <button className="absolute top-0 right-0 m-2 " onClick={removeLike}>
            <Iconcustom
              classStyle=" text-red-500 w-[25px] h-[25px] cursor-pointer"
              iconName="mingcute:heart-fill"
            />
          </button>
        ) : (
          <button className="absolute top-0 right-0 m-2 " onClick={addLike}>
            <Iconcustom
              classStyle=" text-white w-[25px] h-[25px] cursor-pointer"
              iconName="mingcute:heart-line"
            />
          </button>
        )}
      </div>

      <div className="flex flex-col gap-1 px-2">
        <Tooltip content={title}>
          <p onClick={getPageproduct} className=" text-[20px] cursor-pointer">
            {title.length >= 15 ? `${title.slice(0, 15)}...` : title}
          </p>
        </Tooltip>

        <p className="text-[18px]">USD {price}</p>
        <p className="text-[14px] flex gap-1 items-center">
          <Iconcustom
            classStyle="text-yellow-500 w-[25px] h-[25px]"
            iconName="material-symbols:star"
          />
          {rating.rate}
        </p>
      </div>
      {stateButton && isagg ? (
        <div className="flex justify-center">
          <button
            onClick={removeCart}
            className="flex items-center justify-center gap-2 w-[224px] h-[40px] rounded-[50px] bg-red-500 text-white cursor-pointer"
          >
            Remove item{" "}
            <Iconcustom
              classStyle="text-white w-[24px] h-[24px]"
              iconName="pajamas:remove"
            />
          </button>{" "}
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            onClick={addCart}
            className="flex items-center justify-center gap-2 w-[224px] h-[40px] rounded-[50px] bg-[var(--color-primary)] text-white cursor-pointer"
          >
            Add a cart{" "}
            <Iconcustom
              classStyle="text-white w-[24px] h-[24px]"
              iconName="ic:baseline-add"
            />
          </button>
        </div>
      )}
    </div>
  );
};
