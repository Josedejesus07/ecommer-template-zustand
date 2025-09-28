"use client";
import { useRouter } from "next/navigation";
import { Iconcustom } from "../Iconcustom/Iconcustom";
import { useProduct } from "@/app/zustand/add-product-store";
import { useState } from "react";

export const Searchproduct = () => {
  const router = useRouter();
  const { searchProduct, userTextsearh } = useProduct();
  const [Datasearch, setDatasearch] = useState(userTextsearh || "");

  const setNameuser = (e: any) => {
    const searchproduct = e.target.value;
    setDatasearch(searchproduct);
  };
  const redirectUser = () => {
    searchProduct(Datasearch);
    router.push("/product/explore");
  };
  return (
    <>
      <div className="w-[577px] h-[66px] flex justify-center items-center rounded-[40px] bg-white">
        <input
          type="text"
          name="product-finder"
          id="buscador-producto"
          onChange={setNameuser}
          className="w-[90%] h-[85%] text-[16px] rounded-[40px] p-2 text-black focus:outline-0"
          placeholder="Search for a product here...."
        />
        <button onClick={redirectUser} className="cursor-pointer">
          <Iconcustom
            classStyle="text-black w-[30px] h-[30px]"
            iconName="lucide:search"
          />
        </button>
      </div>
    </>
  );
};
