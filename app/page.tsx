import { productAll } from "./Api/Solicitudes";
import { Header } from "./Layout/Header/Header";
import { Section1 } from "./Sections/Section1/Section1";
import { Section2 } from "./Sections/Section2/Section2";
import { Section3 } from "./Sections/Section3/Section3";

export default async function Home() {
  const products = await productAll();
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Section1 data={products} />
        <Section2 />
        <Section3 data={products} />
      </main>
    </>
  );
}
