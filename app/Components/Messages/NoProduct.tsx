"use client"
import { Button } from "@heroui/react";
import { Iconcustom } from "../Iconcustom/Iconcustom";
import { useRouter } from "next/navigation";


export const NoProduct = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-black  p-2 rounded-[10px] w-[400px] shadow-lg bg-white  ">
      <div className="p-2 bg-red-500  w-[50px] rounded-[10px] flex items-center justify-center">
        <Iconcustom
          classStyle="text-white w-[30px] h-[30px]"
          iconName="mdi:close-circle-outline"
        />
      </div>
      <h2 className="text-[20px] text-center">
        No se encontro ningun producto
      </h2>

      <Button
        onClick={() => router.push("/")}
        className="bg-[var(--color-primary)] text-white"
      >
        Volver al inicio
      </Button>
    </div>
  );
};
