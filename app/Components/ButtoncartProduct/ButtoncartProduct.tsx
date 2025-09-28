"use client";
import {
  Badge,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { Iconcustom } from "../Iconcustom/Iconcustom";
import { productResponseStore } from "../../interfaces/product-interfaces";
import { useProduct } from "@/app/zustand/add-product-store";
import Link from "next/link";

interface proms {
  data: productResponseStore[];
}
export const ButtoncartProduct = ({ data }: proms) => {
  const { removeProductall } = useProduct();

  const removeCartall = () => {
    removeProductall();
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="bg-white rounded-[10px] p-2 grid place-content-center">
          <Badge className="" content={data.length || 0}>
            <Iconcustom
              classStyle="text-black w-[20px] h-[20px]"
              iconName="mdi:cart-outline"
            />
          </Badge>
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <>
          {data
            .slice(0, 10)
            .map((result: productResponseStore, index: number) => (
              <DropdownItem key={index}>{result.title}</DropdownItem>
            ))}

          {/*
          {data.length >= 10 && (
            <DropdownItem className="bg-green-800 text-white " key={"ver todo"}>
              <div className="flex gap-2 justify-center items-center">
                <span>view all {`(${data.length})`}</span>
                <Iconcustom
                  classStyle="text-white w-[24px] h-[24px]"
                  iconName="carbon:view"
                />
              </div>
            </DropdownItem>
          )}
    {`(${data.length})`}
    */}
          {data.length >= 1 && (
            <DropdownItem className="bg-blue-600 text-white hover:bg-blue-600! hover:text-white! " key={"ver todo"}>
              <Link href={"/product/payment"}>
                <div className="flex gap-2 justify-center items-center">
                  <span>Ready to Checkout </span>
                  <Iconcustom
                    classStyle="text-white w-[24px] h-[24px]"
                    iconName="ic:outline-payment"
                  />
                </div>{" "}
              </Link>
            </DropdownItem>
          )}
          {data.length >= 1 && (
            <DropdownItem
              className="bg-red-800 text-white  hover:bg-red-800! hover:text-white! "
              onClick={removeCartall}
              key={"vaciar todo"}
            >
              <div className="flex gap-2 justify-center items-center">
                <span>Remove all</span>
                <Iconcustom
                  classStyle="text-white w-[24px] h-[24px]"
                  iconName="pajamas:remove"
                />
              </div>
            </DropdownItem>
          )}
        </>
      </DropdownMenu>
    </Dropdown>
  );
};
