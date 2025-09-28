"use client";
import { useProduct } from "@/app/zustand/add-product-store";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";

interface proms {
  title: string;
  bg: string;
  icon: ReactElement;
  colorTitle: string;
}

export const Cardcategories = ({ bg, icon, title, colorTitle }: proms) => {
  const { changeCategorie } = useProduct();
  const router = useRouter();
  
  const getCategorie = () => {
    changeCategorie(title);
    router.push("/product/explore");
  };
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`w-[180px] h-[140px] flex justify-center items-center rounded-[10px] `}
    >
      <div className="flex items-center justify-between px-4 gap-1">
        <p style={{ color: colorTitle }} className="text-[20px] ">
          {title}
        </p>{" "}
        <button onClick={getCategorie}>{icon}</button>
      </div>
    </div>
  );
};
