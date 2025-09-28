"use client";

import { Cardcategories } from "@/app/Components/Cardcategories/Cardcategories";
import { Iconcustom } from "@/app/Components/Iconcustom/Iconcustom";

const contentSection = [
  {
    title: "Men's Clothing",
    colorTitle: "white",
    bg: "#2C3E50",
    icon: (
      <Iconcustom
        classStyle=" text-white w-[30px] h-[30px] cursor-pointer"
        iconName="oui:sort-right"
      />
    ),
  },
  {
    title: "Women's Clothing",
    colorTitle: "white",
    bg: "#F1948A",
    icon: (
      <Iconcustom
        classStyle=" text-white w-[30px] h-[30px] cursor-pointer"
        iconName="oui:sort-right"
      />
    ),
  },
  {
    title: "Jewelry",
    colorTitle: "black",
    bg: "#F7DC6F",
    icon: (
      <Iconcustom
        classStyle=" text-black w-[30px] h-[30px] cursor-pointer"
        iconName="oui:sort-right"
      />
    ),
  },
  {
    title: "Electronics",
    colorTitle: "white",
    bg: "#95A5A6",
    icon: (
      <Iconcustom
        classStyle=" text-white w-[30px] h-[30px] cursor-pointer"
        iconName="oui:sort-right"
      />
    ),
  },
];

export const Section2 = () => {
  return (
    <div className="container mx-auto pb-8">
      <div className="grid place-content-center place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col gap-1  ">
          <h3 className="text-[32px]">Our categories</h3>
          <div className="flex flex-col gap-4">
            <p className="text-[15px]">
              Explore our categories and find exactly what you need. Each
              section is designed to make your shopping experience quick, clear,
              and visually appealing.
            </p>
            <p className="text-[15px] ">
              Click on the category that interests you most and discover
              products that fit your style, needs, and budget.
            </p>
          </div>
        </div>
        <div className="place-content-center place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {contentSection.map((result, index) => (
            <Cardcategories
              key={index}
              bg={result.bg}
              icon={result.icon}
              title={result.title}
              colorTitle={result.colorTitle}
            />
          ))}
        </div>
      </div>{" "}
    </div>
  );
};
