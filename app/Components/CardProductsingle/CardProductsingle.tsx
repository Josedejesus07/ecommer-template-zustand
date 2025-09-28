import { productResponse } from "@/app/interfaces/product-interfaces";
import { Iconcustom } from "../Iconcustom/Iconcustom";
import { useRouter } from "next/navigation";
import { useProduct } from "@/app/zustand/add-product-store";

export const CardProductsingle = ({
  id,
  category,
  description,
  image,
  price,
  rating,
  title,
}: productResponse) => {
  const router = useRouter();
  const { addProduct, product } = useProduct();
  const isagg = product.some((result) => result.id === id);
  const buyNow = () => {
    if (!isagg) {
      addProduct({
        id: id,
        img: image,
        title: title,
        price: price,
        count: 1,
      });
    }
    router.push("/product/payment");
  };
  return (
    <div className=" grid grid-cols-2 place-content-center place-items-center bg-[var(--color-primary)] h-[340px]   p-8 w-full">
      <div className="flex justify-center items-center w-full ">
        <img
          src={image}
          alt="imagen de un producto"
          className="w-[200px] h-[280px] object-contain"
        />
      </div>

      <div className="flex flex-col gap-1 text-white ">
        <h5 className="text-[30px] ">
          {title.length >= 50 ? `${title.slice(0, 50)}...` : title}
        </h5>
        <div className="flex">
          <p className="text-[14px] flex gap-1 items-center">
            <Iconcustom
              classStyle="text-yellow-500 w-[25px] h-[25px]"
              iconName="material-symbols:star"
            />
            {rating.rate}
          </p>
        </div>
        <p className="text-[14px] ">{description.slice(0, 200)}...</p>

        <div className="flex justify-between items-center px-2">
          <p className="text-[35px]">USD {price}</p>

          <button
            onClick={buyNow}
            className="btn-order-now bg-white text-black text-[14px] flex justify-center items-center gap-1 h-[34px] w-[136px] rounded-[10px] p-2 cursor-pointer"
          >
            Order now
            <Iconcustom
              classStyle="text-black w-[20px] h-[20px]"
              iconName="lucide:move-right"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
