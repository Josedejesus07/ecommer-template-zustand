import { Searchproduct } from "@/app/Components/Searchproduct/Searchproduct";

export const Header = () => {
  return (
    <div className=" text-white flex flex-col gap-[28px] justify-center items-center h-[490px]  bg-[var(--color-primary)] text-center">
      <h1 className="text-[36px] leading-[43px]">
        Your shopping universe <br />
        just a click away
      </h1>{" "}
      <p className="text-[14px]">
        Discover unique, sustainable, and stylish products. From fashion to home
        decor, Lunaria Market <br /> is your space for shopping with purpose.
      </p>
      <Searchproduct />
    </div>
  );
};
