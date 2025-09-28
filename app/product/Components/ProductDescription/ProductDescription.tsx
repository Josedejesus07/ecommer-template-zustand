"use client";
import { getProductdescriptionId } from "@/app/Api/Solicitudes";
import { productResponse } from "@/app/interfaces/product-interfaces";
import { useProduct } from "@/app/zustand/add-product-store";
import { useEffect, useState } from "react";
import { Carddescription } from "../Carddescription/Carddescription";
import { Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";

export const ProductDescription = () => {
  const router = useRouter();
  const {
    productId,
    productLike,
    addLikeproduct,
    removeLikeproduct,
    addProduct,
    removeProduct,
    product,
  } = useProduct();
  const [Dataproduct, setDataproduct] = useState<productResponse[]>([]);
  const islike = productLike.some((result) => result.id === productId);
  const isagg = product.some((result) => result.id === productId);
  const [Statelike, setStatelike] = useState(islike || false);
  const [stateButton, setstateButton] = useState(isagg || false);

  useEffect(() => {
    const getProductid = async () => {
      if (productId) {
        const data = await getProductdescriptionId(productId);
        setDataproduct([data]);
      }
    };

    getProductid();
  }, [productId]);
  const addLike = () => {
    addLikeproduct({
      id: productId,
      img: Dataproduct[0].image,
      title: Dataproduct[0].title,
    });
    setStatelike(true);
  };

  const removeLike = () => {
    removeLikeproduct(productId);
    setStatelike(false);
  };

  const addCart = () => {
    addProduct({
      id: productId,
      img: Dataproduct[0].image,
      title: Dataproduct[0].title,
      price: Dataproduct[0].price,
      count: 1,
    });
    setstateButton(true);
  };

  const removeCart = () => {
    removeProduct(productId);
    setstateButton(false);
  };

  const buyNow = () => {
    if (!isagg) {
      addProduct({
        id: productId,
        img: Dataproduct[0].image,
        title: Dataproduct[0].title,
        price: Dataproduct[0].price,
        count: 1,
      });
    }
    router.push("/product/payment");
  };
  return (
    <>
      <div className="flex p-4 justify-center  items-center w-full min-h-[100vh]">
        {Dataproduct && Dataproduct.length >= 1 ? (
          <Carddescription
            buyNow={buyNow}
            Statelike={Statelike}
            addCart={addCart}
            stateButton={stateButton}
            addLike={addLike}
            data={Dataproduct[0]}
            isagg={isagg}
            islike={islike}
            removeCart={removeCart}
            removeLike={removeLike}
          />
        ) : (
          <Spinner size="lg" />
        )}
      </div>
    </>
  );
};
