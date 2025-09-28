import { productAll } from "@/app/Api/Solicitudes";
import { ExploreProduct } from "./Components/ExploreProduct/ExploreProduct";

export default async function page() {
  const data = await productAll();

  return (
    <>
      <ExploreProduct data={data} />
    </>
  );
}
