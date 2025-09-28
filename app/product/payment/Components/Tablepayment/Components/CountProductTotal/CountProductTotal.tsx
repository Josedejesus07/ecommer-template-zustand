"use client";
import { TableCell, TableRow } from "@heroui/react";
import { useState } from "react";

interface proms {
  id: number;
  img: string;
  price: number;
}
export const CountProductTotal = ({ id, img, price }: proms) => {
  const [inputValue, setinputValue] = useState<number>(1);

  const addCountproduct = () => {
    setinputValue(inputValue + 1);
  };
  return (
    <TableRow key={id}>
      <TableCell>
        <img
          className="w-[50px] h-[50px] rounded-[10px]"
          src={img}
          alt="imagen de un producto"
        />
      </TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>
        <div className="flex items-center justify-center">
          <button className="w-[30px] h-[30px] rounded-[10px] text-[20px] cursor-pointer border-1 border-[#010101] hover:bg-[#010101] hover:text-white">
            -
          </button>
          <input
            type="text"
            disabled
            className=" text-center boder-1 border-red-500 w-[30px] h-[30px] rounded-[10px]"
            value={inputValue}
          />
          <button
            onClick={addCountproduct}
            className="w-[30px] h-[30px] rounded-[10px] text-[20px] cursor-pointer border-1 border-[#010101] hover:bg-[#010101] hover:text-white"
          >
            +
          </button>
        </div>
      </TableCell>
      <TableCell>{inputValue * price}</TableCell>
    </TableRow>
  );
};
