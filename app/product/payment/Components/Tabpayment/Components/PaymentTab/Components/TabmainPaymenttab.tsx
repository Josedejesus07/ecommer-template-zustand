"use client";
import { Iconcustom } from "@/app/Components/Iconcustom/Iconcustom";
import { Button, Card, CardBody, Tab, Tabs } from "@heroui/react";
import { Key, useState } from "react";
import { FormCreditcard } from "./FormCreditcard/FormCreditcard";

export const TabmainPaymenttab = () => {
  const [selected, setSelected] = useState<Key>("paypal");
  return (
    <div className="flex w-full flex-col">
      <Tabs
        selectedKey={selected.toString()}
        onSelectionChange={(key: Key) => setSelected(key)}
        classNames={{
          cursor: "bg-[#B7CEF0] text-white",
          tabContent: "text-white ",
          tabList: "bg-[#101010] w-[100%] overflow-x-auto ",
        }}
        aria-label="Options"
      >
        <Tab
          key="paypal"
          title={
            <div className="flex items-center space-x-2">
              <Iconcustom
                classStyle=" text-black w-[25px] h-[25px] cursor-pointer"
                iconName="logos:paypal"
              />
              <span>Paypal</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <div className="flex justify-center">
                <Button className="bg-blue-600 text-white">
                  Pagar con paypal
                </Button>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="shipping"
          title={
            <div className="flex items-center space-x-2">
              <Iconcustom
                classStyle=" text-black w-[25px] h-[25px] cursor-pointer"
                iconName="fluent-emoji-flat:credit-card"
              />
              <span>Credit card</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <FormCreditcard />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};
