"use client";
import { contactTabProms } from "@/app/interfaces/product-interfaces";
import { useProduct } from "@/app/zustand/add-product-store";
import { Button, Form, Input } from "@heroui/react";

export const FormContact = () => {
  const { contactTab, insertContacts, changeKeytab } = useProduct();
  const { email, lastname, phone, username } = contactTab;

  const onSubmit = (e: any) => {
    e.preventDefault();
    const data: contactTabProms | any = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    insertContacts(data);
    changeKeytab("shipping");
  };

  return (
    <Form
      className="w-full max-w-full flex flex-col gap-4 "
      onSubmit={onSubmit}
    >
      <div className="place-content-center w-full gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <Input
          isClearable
          isRequired
          errorMessage="Please enter a valid username"
          label="Username"
          labelPlacement="outside"
          name="username"
          placeholder="Enter your username"
          type="text"
          defaultValue={username}
        />
        <Input
          isClearable
          isRequired
          errorMessage="Please enter a valid lastname"
          label="Lastname"
          labelPlacement="outside"
          name="lastname"
          placeholder="Enter your lastname"
          type="text"
          defaultValue={lastname}
        />
      </div>
      <div className="place-content-center w-full gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <Input
          isClearable
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
          defaultValue={email}
        />

        <Input
          isClearable
          isRequired
          errorMessage="Please enter a valid phone"
          label="phone"
          labelPlacement="outside"
          name="phone"
          placeholder="Enter your phone"
          type="text"
          defaultValue={phone}
        />
      </div>
      <div className="flex justify-end w-full">
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
