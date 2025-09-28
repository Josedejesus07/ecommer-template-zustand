"use client";
import {
  Badge,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { Iconcustom } from "../Iconcustom/Iconcustom";
import { productLike } from "../../interfaces/product-interfaces";
import { useProduct } from "@/app/zustand/add-product-store";

interface proms {
  data: productLike[];
}
export const ButtonLikeProductview = ({ data }: proms) => {
  const { removeLikeproductAll } = useProduct();

  const removeLikeAll = () => {
    removeLikeproductAll();
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="bg-white rounded-[10px] p-2 grid place-content-center">
          <Badge className="" content={data.length || 0}>
            <Iconcustom
              classStyle=" text-red-500 w-[20px] h-[20px]"
              iconName="mingcute:heart-fill"
            />
          </Badge>
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <>
          {data.slice(0, 10).map((result: productLike, index: number) => (
            <DropdownItem key={index}>{result.title}</DropdownItem>
          ))}

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
          {data.length >= 1 && (
            <DropdownItem
              className="bg-red-800 text-white "
              onClick={removeLikeAll}
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
