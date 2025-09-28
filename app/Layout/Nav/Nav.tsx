"use client";
import { ButtoncartProduct } from "@/app/Components/ButtoncartProduct/ButtoncartProduct";

import { useProduct } from "../../zustand/add-product-store";
import { ButtonLikeProductview } from "@/app/Components/ButtonLikeProductview/ButtonLikeProductview";
import Link from "next/link";

//bg-[var(--color-primary)]
export const Nav = () => {
  const { product, productLike } = useProduct();
  return (
    <>
      <div className=" fixed top-0 z-100 w-full p-4 bg-[var(--color-primary)] ">
        <div className="container mx-auto flex justify-between  items-center">
          <Link href={"/"}>
            <p className="text-[20px] text-white">Lunaria Market</p>
          </Link>
          <div className="flex items-center gap-2">
            <ButtonLikeProductview data={productLike || []} />
            <ButtoncartProduct data={product || []} />
          </div>{" "}
        </div>
      </div>
    </>
  );
};
