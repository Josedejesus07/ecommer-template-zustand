"use client";
import { getAllcountry } from "@/app/Api/Solicitudes";
import {
  countryType,
  shippingProms,
} from "@/app/interfaces/product-interfaces";
import { useProduct } from "@/app/zustand/add-product-store";
import { Button, Form, Input, Select, SelectItem } from "@heroui/react";
import { useEffect, useState } from "react";

export const Formshipping = () => {
  const { insertShipping, changeKeytab, shippingTab } = useProduct();
  const [Datacountry, setDatacountry] = useState<countryType[]>([]);
  const { city, country, postcode, streetAdress } = shippingTab;

  const onSubmit = (e: any) => {
    e.preventDefault();
    const data: shippingProms | any = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    insertShipping(data);
    changeKeytab("payment");
  };

  useEffect(() => {
    const getCountry = async () => {
      const data = await getAllcountry();
      setDatacountry(data);
    };
    getCountry();
  }, []);
  const [value, setValue] = useState<any>(new Set([country]));
  return (
    <Form
      className="w-full max-w-full flex flex-col gap-4 "
      onSubmit={onSubmit}
    >
      <div className="place-content-center w-full gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <Input
          isClearable
          isRequired
          errorMessage="Please enter a valid city"
          label="City"
          labelPlacement="outside"
          name="city"
          placeholder="Enter your city"
          type="text"
          defaultValue={city}
        />
        <Input
          isClearable
          isRequired
          errorMessage="Please enter a valid street adress"
          label="Street adress"
          labelPlacement="outside"
          name="streetAdress"
          placeholder="Enter your street adress"
          type="text"
          defaultValue={streetAdress}
        />
      </div>
      <div className="place-content-center w-full gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {/*
               <Input
          isRequired
          errorMessage="Please enter a valid country"
          label="Country"
          labelPlacement="outside"
          name="country"
          placeholder="Enter your country"
          type="text"
          defaultValue={country}
        />
            */}

        <Select
          isRequired
          errorMessage="Please enter a valid country"
          className="max-w-xs"
          name="country"
          label="Select an country"
          selectedKeys={value}
          onSelectionChange={setValue}
        >
          {Datacountry &&
            Datacountry.map((country: countryType) => (
              <SelectItem key={country.name.common}>
                {country.name.official}
              </SelectItem>
            ))}
        </Select>
        <Input
          isClearable
          isRequired
          errorMessage="Please enter a postcode"
          label="Postcode"
          labelPlacement="outside"
          name="postcode"
          placeholder="Enter your postcode"
          type="text"
          defaultValue={postcode}
        />
      </div>
      <div className="flex justify-between px-2 w-full">
        <Button
          type="button"
          className="w-[200px] p-1 bg-[var(--color-primary)] text-white"
          onPress={() => changeKeytab("contacts")}
        >
          Back
        </Button>
        <Button
          type="submit"
          className="w-[200px] p-1 bg-[var(--color-primary)] text-white"
        >
          Next
        </Button>
      </div>
    </Form>
  );
};
