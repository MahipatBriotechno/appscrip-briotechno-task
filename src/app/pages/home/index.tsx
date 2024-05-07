"use client";

import Accordion from "@/app/components/Accordion";
import HeaderFilter from "@/app/components/HeaderFilter";
import { Container } from "@/app/components/container";
import ProductCard from "@/app/components/productCard";
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";
import CheckboxWithLabel from "@/app/components/Checkbox";
import DropdownMenu from "@/app/components/shared/DropdownMenu";
import { useState } from "react";
import NormalLabel from "@/app/components/Checkbox/NormalLabel";
import FilterDrawer from "@/app/components/FilterDrawer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    {
      image: product1,
      title: "PPXOC Milkyway dress in pressed flowers",
      newProduct: true,
      stock: 3,
      like: false,
    },
    {
      image: product2,
      title: "PPXOC Milkyway dress in pressed flowers",
      newProduct: false,
      stock: 0,
      like: false,
    },
    {
      image: product3,
      title: "Product Name",
      newProduct: false,
      stock: 3,
      like: true,
    },
    {
      image: product1,
      title: "PPXOC Milkyway dress in pressed flowers",
      newProduct: false,
      stock: 3,
      like: false,
    },
    {
      image: product2,
      title: "PPXOC Milkyway dress in pressed flowers",
      newProduct: false,
      stock: 3,
      like: false,
    },
    {
      image: product3,
      title: "Product Name",
      newProduct: false,
      stock: 3,
      like: false,
    },
    {
      image: product1,
      title: "PPXOC Milkyway dress in pressed flowers",
      newProduct: false,
      stock: 3,
      like: false,
    },
    {
      image: product2,
      title: "PPXOC Milkyway dress in pressed flowers",
      newProduct: false,
      stock: 3,
      like: false,
    },
    {
      image: product3,
      title: "Product Name",
      newProduct: false,
      stock: 3,
      like: false,
    },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("RECOMMENDED");

  const languages = [
    { code: "re", label: "RECOMMENDED" },
    { code: "re", label: "Newest first" },
    { code: "re", label: "popular" },
    { code: "re", label: "Price : high to low" },
    { code: "re", label: "Price : low to high" },
  ];

  const handleLanguageChange = (event: any) => {
    const selectedCode = event.target.value;
    setSelectedLanguage(selectedCode);
  };

  const FilterContent = () => {
    return (
      <div>
        <div>
          <CheckboxWithLabel id="test" label="Customizble" />
        </div>
        <Accordion title="IDEAL FOR" isShow="true">
          <div className="flex flex-col gap-4">
            <span className="text-base font-normal text-[#BFC8CD] underline font-simplon">
              Unselect all
            </span>
            <div>
              <NormalLabel id="men" label="Men" />
              <NormalLabel id="men" label="Women" />
              <NormalLabel id="men" label="Baby & Kids" />
            </div>
          </div>
        </Accordion>
        <Accordion title="occasion" isShow="true">
          {" "}
          <div className="flex flex-col gap-4">
            <span className="text-base font-normal text-[#BFC8CD] underline font-simplon">
              Unselect all
            </span>
            <div>
              <NormalLabel id="men" label="Men" />
              <NormalLabel id="men" label="Women" />
              <NormalLabel id="men" label="Baby & Kids" />
            </div>
          </div>
        </Accordion>
        <Accordion title="work" isShow="true">
          test
        </Accordion>
        <Accordion title="fabric" isShow="true">
          test
        </Accordion>
        <Accordion title="segment" isShow="true">
          test
        </Accordion>
        <Accordion title="suitable for" isShow="true">
          test
        </Accordion>
        <Accordion title="raw materials" isShow="true">
          test
        </Accordion>
        <Accordion title="Pattern" isShow="true">
          test
        </Accordion>
      </div>
    );
  };
  return (
    <div className="pb-10">
      <Container>
        <div className="max-w-[748px] mx-auto text-center py-12">
          <h1 className="font-normal text-2xl leading-7 lg:text-[60px] mb-5 lg:leading-[72px] font-simplon">
            DISCOVER OUR PRODUCTS
          </h1>
          <h2 className="font-normal text-base leading-[22px] lg:text-[22px] lg:leading-10 font-simplon">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </h2>
        </div>
      </Container>
      {/* Header Filter  */}
      <Container>
        <div className="flex justify-around border-t-[1px] border-b-[1px] border-[#E5E5E5] py-2  lg:py-6 mb-6">
          <div className="hidden lg:block">
            <HeaderFilter
              items={[
                { label: "3425 Items", href: "" },
                { label: "HIDE FILTER", href: "" },
              ]}
            />
          </div>
          <div
            className="lg:hidden w-[40%] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h2 className=" text-sm font-bold">FILTER</h2>
          </div>
          <div className="border-r-[1px]" />
          <DropdownMenu
            selectedOption={selectedLanguage}
            options={languages}
            handleChange={handleLanguageChange}
          />
        </div>
      </Container>
      <Container>
        <div className=" flex gap-5">
          {/* Filter  */}
          <div className="w-[28%] xs:hidden  sm:hidden md:hidden ">
            <FilterContent />
          </div>

          <div className=" grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6">
            {products.map((db, index) => (
              <ProductCard
                image={db.image}
                title={db.title}
                newProduct={db.newProduct}
                stock={db.stock}
                like={db.like}
                key={index}
              />
            ))}
          </div>
        </div>
      </Container>

      <FilterDrawer
        content={<FilterContent />}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default Home;
