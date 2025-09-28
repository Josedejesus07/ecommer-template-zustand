"use client";
import { cardCreditproms } from "@/app/interfaces/product-interfaces";
import { useProduct } from "@/app/zustand/add-product-store";
import { Button, Form, Input } from "@heroui/react";
import Swal from "sweetalert2";

export const FormCreditcard = () => {
  const { changeKeytab, insertCreditcard, creditCard, removeAll } =
    useProduct();

  const { CVC, cardNumber, cardholder, validDate } = creditCard;
  const onSubmit = (e: any) => {
    e.preventDefault();
    const data: cardCreditproms | any = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    insertCreditcard(data);
    //changeKeytab("shipping");
    //contactTabProms |
    removeAll();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Pago realizado exitosamente",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <>
      <Form
        className="w-full max-w-full flex flex-col gap-4 "
        onSubmit={onSubmit}
      >
        <div className="place-content-center w-full gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <Input
            isClearable
            isRequired
            errorMessage="Please enter a valid username Cardholder"
            label="username Cardholder"
            labelPlacement="outside"
            name="cardholder"
            placeholder="Enter your username Cardholder"
            type="text"
            defaultValue={cardholder}
          />{" "}
          <Input
            isClearable
            isRequired
            errorMessage="Please enter a valid card number"
            label="Card number"
            labelPlacement="outside"
            name="cardNumber"
            placeholder="xxxx xxxx xxxx xxxx"
            type="text"
            defaultValue={cardNumber}
          />
        </div>
        <div className="place-content-center w-full gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <Input
            isClearable
            isRequired
            errorMessage="Please enter a valid date"
            label="Valid date"
            labelPlacement="outside"
            name="validDate"
            placeholder="02/2029"
            type="text"
            defaultValue={validDate}
          />
          <Input
            isClearable
            isRequired
            errorMessage="Please enter a valid CVC/CVV"
            label="CVC/CVV"
            labelPlacement="outside"
            name="CVC"
            placeholder="111"
            type="text"
            defaultValue={CVC}
          />
        </div>
        <div className="flex justify-between w-full">
          <Button
            className="w-[200px] p-1 bg-[var(--color-primary)] text-white"
            onPress={() => changeKeytab("shipping")}
          >
            Back
          </Button>
          <Button
            type="submit"
            className="w-[200px] p-1 bg-blue-600 text-white"
          >
            Pay now
          </Button>
        </div>
      </Form>
    </>
  );
};
