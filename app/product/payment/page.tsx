import { CardtotalProductprince } from "@/app/Components/CardtotalProductprince/CardtotalProductprince";
import { Tablepayment } from "./Components/Tablepayment/Tablepayment";
import { Modalpayment } from "./Modalpayment/Modalpayment";

export default function page() {
  return (
    <div className="container mx-auto flex flex-col">
      <Modalpayment />
      <h1 className="text-[25px] text-center my-4">Shopping bag</h1>

      <div className="p-8 gap-2 place-content-center place-items-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <Tablepayment />
        <CardtotalProductprince />
      </div>
    </div>
  );
}
