"use client";

import Accordion from "@/app/components/Accordion";
import CheckboxWithLabel from "@/app/components/Checkbox";
import NormalLabel from "@/app/components/Checkbox/NormalLabel";
import HeaderFilter from "@/app/components/HeaderFilter";
import { Container } from "@/app/components/container";
import ProductCard from "@/app/components/productCard";
import SelectPopover from "@/app/components/shared/Select";
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";
import { useState } from "react";
import FilterDrawer from "@/app/components/FilterDrawer";
import Breadcrumbs from "@/app/components/Breadcrumbs";

const Home = () => {
  const [isshow, setShow] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);

  const [isCheck, setCheck] = useState(false);
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

  const breadcrumbItems = [
    { label: "HOME", href: "/" },
    { label: "SHOP", href: "/shop" },
  ];

  const options = [
    { label: "RECOMMENDED", value: "RECOMMENDED" },
    { label: "Newest first", value: "Newest first" },
    { label: "popular", value: "popular" },
    { label: "Price : high to low", value: "Price : high to low" },
    { label: "Price : low to high", value: "Price : low to high" },
  ];
  const handleSelect = (option: any) => {
    console.log("Selected option:", option);
    // Do something with the selected option
  };

  // Filter Content
  const FilterContent = () => {
    return (
      <div>
        <div>
          <CheckboxWithLabel id="test" label="Customizble" />
        </div>
        <Accordion title="IDEAL FOR" isShow="true" isFooter={false} >
          <div className="flex flex-col gap-4">
            <span className="text-base font-normal text-[#BFC8CD] underline font-simplon">
              Unselect all
            </span>

            <div>
              <NormalLabel id="men" label="Men" />
              <NormalLabel id="Women" label="Women" />
              <NormalLabel id="Baby & Kids" label="Baby & Kids" />
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
        <div className="lg:hidden pt-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <div className="max-w-[748px] mx-auto text-center pb-6 lg:py-12">
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
        <div className="flex justify-between border-t-[1px] border-b-[1px] border-[#E5E5E5] py-2 lg:py-6 mb-6">
          <div className="hidden lg:block">
            <HeaderFilter
              items={[
                { label: "3425 Items", href: "" },
                { label: isshow ? "HIDE FILTER" : "SHOW FILTER", href: "" },
              ]}
              clickFilter={() => setShow(!isshow)}
            />
          </div>
          <div
            className="lg:hidden w-[40%] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h2 className=" text-sm font-bold">FILTER</h2>
          </div>
          <div className="border-r-[1px]" />
          <SelectPopover
            options={options}
            onSelect={handleSelect}
            className={" lg:w-[200px]"}
          />
          {/* <DropdownMenu
            selectedOption={selectedLanguage}
            options={languages}
            handleChange={handleLanguageChange}
          /> */}
        </div>
      </Container>
      <Container>
        <div className=" flex gap-5">
          {/* Filter  */}

          {isshow && (
            <div className="w-[28%] xs:hidden  sm:hidden md:hidden ">
              <FilterContent />
            </div>
          )}

          {/* {isshow && (
            <div className="w-[28%]">
              <div>
                <CheckboxWithLabel id="test" label="Customizble" />
              </div>
              <Accordion title="IDEAL FOR">
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
              <Accordion title="occasion">
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
              <Accordion title="work">test</Accordion>
              <Accordion title="fabric">test</Accordion>
              <Accordion title="segment">test</Accordion>
              <Accordion title="suitable for">test</Accordion>
              <Accordion title="raw materials">test</Accordion>
              <Accordion title="Pattern">test</Accordion>
            </div>
          )} */}

          <div
            className={`grid ${
              isshow
                ? "grid-cols-2 lg:grid-cols-3"
                : "grid-cols-2 lg:grid-cols-4"
            } gap-x-3 gap-y-6`}
          >
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
