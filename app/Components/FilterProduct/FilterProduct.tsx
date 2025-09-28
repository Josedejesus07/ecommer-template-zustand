"use client";
import { useProduct } from "@/app/zustand/add-product-store";
import { Select, SelectItem } from "@heroui/react";
import { Key, useEffect, useState } from "react";

const contentCategories = [
  {
    key: "All",
    title: "All",
  },
  {
    key: "Men's Clothing",
    title: "Men's Clothing",
  },
  {
    key: "Women's Clothing",
    title: "Women's Clothing",
  },
  {
    key: "Jewelry",
    title: "Jewelry",
  },
  {
    key: "Electronics",
    title: "Electronics",
  },
];

export const FilterProduct = () => {
  const { categorie, changeCategorie } = useProduct();
  const [value, setValue] = useState<Key | any>(new Set([categorie]));

  useEffect(() => {
    changeCategorie(Array.from(value).toString());
  }, [value]);

  return (
    /*
       <div className="flex w-[300px] p-2 rounded-[10px] bg-[var(--color-primary)] shadow-lg m-4">
      <div className="flex flex-col gap-1">
        <span className="text-white">Filtrar por categoria</span>
        <select
          name=""
          id=""
          className="p-2 rounded-[10px] bg-[#D1D3D5]  w-[280px] max-w-[280px]"
        >
          <option value="">Men's Clothing</option>
          <option value="">Women's Clothing</option>
          <option value="">Jewelry</option>
          <option value="">Electronics</option>
        </select>
      </div>
    </div>
    */

    <div className="flex w-full max-w-xs flex-col gap-2 my-4 p-2 rounded-[10px]">
      <Select
        selectionMode="single"
        className="max-w-xs"
        label="Favorite Categories"
        placeholder="Select an categorie"
        selectedKeys={value}
        variant="bordered"
        onSelectionChange={setValue}
      >
        {contentCategories.map((item) => (
          <SelectItem key={item.key}>{item.title}</SelectItem>
        ))}
      </Select>

    </div>
  );
};
