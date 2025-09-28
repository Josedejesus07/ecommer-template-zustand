"use client";
import { useProduct } from "@/app/zustand/add-product-store";
import { Button } from "@heroui/react";
import { useEffect } from "react";

export const CardtotalProductprince = () => {
  const { totalProductprice, getTotalPrice, onOpen, product } = useProduct();

  useEffect(() => {
    getTotalPrice();
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col justify-between  gap-2 text-white rounded-[10px] bg-[var(--color-primary)] w-[300px] h-[auto] max-h-[220px] p-4">
        <p className="text-[18px] border-b-1 border-white">Cart total</p>

        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-bold">Discount code</p>
            <div className="flex gap-1 items-center justify-between">
              <input
                type="text"
                placeholder="your code"
                className="text-black p-1 text-[12px] w-[200px] h-[30px] bg-white rounded-[10px] outline-gray-400"
              />
              <button className="cursor-pointer p-2 rounded-[10px] font-bold text-[var(--color-primary)] bg-white text-[12px]">
                Apply
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[14px] font-bold">Cart total :</p>{" "}
            <p className="text-[15px]">USD {totalProductprice}</p>
          </div>
          {product && product.length >= 1 && (
            <Button
              onPress={onOpen}
              className="bg-blue-500 text-white rounded-[10px] font-bold"
            >
              Continue pay
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
