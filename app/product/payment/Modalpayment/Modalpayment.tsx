"use client";
import { useProduct } from "@/app/zustand/add-product-store";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { Tabpayment } from "../Components/Tabpayment/Tabpayment";
export const Modalpayment = () => {
  const { onOpen, onClosed, modalPaymentstate } = useProduct();
  return (
    <>
      <Modal size="5xl" hideCloseButton={false} isOpen={modalPaymentstate}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Chekout</ModalHeader>
              <ModalBody>
                <Tabpayment />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClosed}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
