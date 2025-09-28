import { Iconcustom } from "@/app/Components/Iconcustom/Iconcustom";
import { productResponse } from "@/app/interfaces/product-interfaces";
import { Button } from "@heroui/react";

interface proms {
  data: productResponse;
  Statelike: boolean;
  islike: boolean;
  removeLike: () => void;
  addLike: () => void;
  stateButton: boolean;
  isagg: boolean;
  removeCart: () => void;
  addCart: () => void;
  buyNow: () => void;
}
export const Carddescription = ({
  Statelike,
  addCart,
  addLike,
  data,
  isagg,
  islike,
  removeCart,
  removeLike,
  stateButton,
  buyNow,
}: proms) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-center">
          <img
            className="max-w-[300px]  rounded-[10px]"
            src={data.image}
            alt="imagen del producto"
          />
        </div>
      </div>
  
        <div className="flex flex-col gap-1 items-start justify-center px-4 max-h-[auto] bg-white rounded-[10px] ">
          <div className="flex items-center justify-between w-full  ">
            <h3 className="text-[20px] font-bold">{data.title}</h3>
            <p className="text-[30px] font-bold">${data.price}</p>
          </div>
          <div className="flex items-center">
            <Iconcustom
              classStyle="text-yellow-500 w-[25px] h-[25px]"
              iconName="material-symbols:star"
            />
            {`(${data.rating.rate})`}
          </div>
          <p className="text-[16px] font-bold">Product description</p>
          <p className="text-[14px] text-justify">{data.description}</p>

          <div className="flex py-4 gap-2">
            <Button
              onPress={buyNow}
              className="text-white bg-[var(--color-primary)] w-[200px] "
            >
              Buy now
            </Button>

            {Statelike && islike ? (
              <button
                className="bg-[var(--color-primary)] rounded-[10px] p-2 grid place-content-center"
                onClick={removeLike}
              >
                <Iconcustom
                  classStyle=" text-red-500 w-[25px] h-[25px] cursor-pointer"
                  iconName="mingcute:heart-fill"
                />
              </button>
            ) : (
              <button
                className="bg-[var(--color-primary)] rounded-[10px] p-2 grid place-content-center"
                onClick={addLike}
              >
                <Iconcustom
                  classStyle=" text-white w-[25px] h-[25px] cursor-pointer"
                  iconName="mingcute:heart-line"
                />
              </button>
            )}
            {stateButton && isagg ? (
              <button
                onClick={removeCart}
                className="rounded-[10px] p-2 grid place-content-center bg-[var(--color-primary)] cursor-pointer"
              >
                <Iconcustom
                  classStyle="text-white w-[24px] h-[24px]"
                  iconName="mdi:cart"
                />
              </button>
            ) : (
              <button
                onClick={addCart}
                className="rounded-[10px] p-2 grid place-content-center bg-[var(--color-primary)] cursor-pointer"
              >
                <Iconcustom
                  classStyle="text-white w-[24px] h-[24px]"
                  iconName="mdi:cart-outline"
                />
              </button>
            )}
          </div>
        </div>

    </div>
  );
};
