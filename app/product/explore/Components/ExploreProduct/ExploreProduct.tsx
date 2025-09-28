"use client";
import { Cardproduct } from "@/app/Components/Cardproduct/Cardproduct";
import { FilterProduct } from "@/app/Components/FilterProduct/FilterProduct";
import { productResponse } from "@/app/interfaces/product-interfaces";
import { useProduct } from "@/app/zustand/add-product-store";
import { Pagination } from "@heroui/react";
import { useMemo, useState } from "react";

interface proms {
  data: productResponse[];
}
export const ExploreProduct = ({ data }: proms) => {
  const { userTextsearh, categorie } = useProduct();

  const contentResult =
    userTextsearh.length >= 1
      ? data.filter((result) =>
          result.title.toLowerCase().includes(userTextsearh.toLowerCase())
        )
      : categorie === "All"
      ? data
      : data.filter(
          (result) => result.category.toLowerCase() === categorie.toLowerCase()
        );

  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const pages = Math.ceil(contentResult.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return contentResult.slice(start, end);
  }, [page, contentResult]);
  return (
    <div className="container mx-auto">
      {items && items.length >= 1 ? (
        <div className="flex flex-col gap-4 col-span-2">
          <div className="px-4 flex flex-col">
            <FilterProduct />
            <h1 className="text-[25px] text-center my-4">
              Resultados encontrados ({contentResult.length})
            </h1>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-8">
            {items.map((result: productResponse, index: number) => (
              <Cardproduct
                key={result.id}
                id={result.id}
                img={result.image}
                price={result.price}
                rating={result.rating}
                title={result.title}
              />
            ))}
          </div>
          <div className="flex justify-center p-4">
            <Pagination
              classNames={{
                cursor: "bg-foreground text-background",
              }}
              color="default"
              page={1}
              total={pages}
              onChange={setPage}
            />
          </div>
        </div>
      ) : (
        <div className="">
          <h2 className="text-[25px] text-center my-4">
            <FilterProduct />
          </h2>
        </div>
      )}
    </div>
  );
};
