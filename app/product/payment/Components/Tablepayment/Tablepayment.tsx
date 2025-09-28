"use client";
import { Iconcustom } from "@/app/Components/Iconcustom/Iconcustom";
import { productResponseStore } from "@/app/interfaces/product-interfaces";
import { useProduct } from "@/app/zustand/add-product-store";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@heroui/react";
import { useMemo, useState } from "react";

export const Tablepayment = () => {
  const {
    product,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
    removeProduct,
  } = useProduct();

  const decreaseQuantityItem = (id: number) => {
    decreaseQuantity(id);
    getTotalPrice();
  };

  const increaseQuantityItem = (id: number) => {
    increaseQuantity(id);
    getTotalPrice();
  };

  const removeItemcard = (id: number) => {
    removeProduct(id);
    getTotalPrice();
  };

  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(product.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return product.slice(start, end);
  }, [page, product]);

  return (
    <Table
      aria-label="Example static collection table"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            classNames={{
              cursor: "bg-foreground text-background",
            }}
            color="default"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn>Product</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>Quantity</TableColumn>
        <TableColumn>Total price</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody>
        <>
          {items &&
            items.length >= 1 &&
            items.map((result: productResponseStore, index) => (
              <TableRow key={result.id}>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-[60px] bg-[#D1D3D5] object-contain h-[60px] rounded-[10px]"
                      src={result.img}
                      alt="imagen de un producto"
                    />
                    <div className="flex flex-col gap-1">
                      <p>{result.title}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>USD {result.price}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => decreaseQuantityItem(result.id)}
                      className="w-[30px] h-[30px] rounded-[10px] text-[20px] cursor-pointer border-1 border-[#010101] hover:bg-[#010101] hover:text-white"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      disabled
                      className=" text-center boder-1 border-red-500 w-[30px] h-[30px] rounded-[10px]"
                      value={result.count}
                    />
                    <button
                      onClick={() => increaseQuantityItem(result.id)}
                      className="w-[30px] h-[30px] rounded-[10px] text-[20px] cursor-pointer border-1 border-[#010101] hover:bg-[#010101] hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </TableCell>
                <TableCell>{result.price * result.count}</TableCell>
                <TableCell>
                  <button
                    className="cursor-pointer"
                    onClick={() => removeItemcard(result.id)}
                  >
                    <Iconcustom
                      classStyle="text-red-500 w-[20px] h-[20px]"
                      iconName="pajamas:remove"
                    />
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </>
      </TableBody>
    </Table>
  );
};
