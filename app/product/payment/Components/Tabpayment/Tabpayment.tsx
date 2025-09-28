import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { Iconcustom } from "@/app/Components/Iconcustom/Iconcustom";
import { PaymentTab } from "./Components/PaymentTab/PaymentTab";
import { ContactsTab } from "./Components/ContactsTab/ContactsTab";
import { ShippingTab } from "./Components/ShippingTab/ShippingTab";
import { useProduct } from "@/app/zustand/add-product-store";
export const Tabpayment = () => {
  const { keyTab } = useProduct();

  return (
    <div className="flex w-full flex-col">
      <Tabs
        classNames={{
          cursor: "bg-[#FFFFFF] text-white",
          tabContent: "text-white ",
          tabList: "bg-[#101010] w-[100%] overflow-x-auto ",
        }}
        aria-label="Options"
        selectedKey={keyTab}
      >
        <Tab
          key="contacts"
          title={
            <div className="flex items-center space-x-2">
              <Iconcustom
                classStyle=" text-black w-[25px] h-[25px] cursor-pointer"
                iconName="mdi:number-1-circle-outline"
              />
              <span>Contacts</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <ContactsTab />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="shipping"
          title={
            <div className="flex items-center space-x-2">
              <Iconcustom
                classStyle=" text-black w-[25px] h-[25px] cursor-pointer"
                iconName="mdi:number-2-circle-outline"
              />
              <span>Shipping</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <ShippingTab />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="payment"
          title={
            <div className="flex items-center space-x-2">
              <Iconcustom
                classStyle=" text-black w-[25px] h-[25px] cursor-pointer"
                iconName="mdi:number-3-circle-outline"
              />
              <span>Payment</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <PaymentTab />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};
