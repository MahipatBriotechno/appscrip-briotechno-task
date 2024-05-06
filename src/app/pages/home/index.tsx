import HeaderFilter from "@/app/components/HeaderFilter";
import { Container } from "@/app/components/container";
import ProductCard from "@/app/components/productCard";
import React from "react";
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";

const Home = () => {
  const products = [
    { image: product1, title: "PPXOC Milkyway dress in pressed flowers" },
    { image: product2, title: "PPXOC Milkyway dress in pressed flowers" },
    { image: product3, title: "Product Name" },
    { image: product1, title: "PPXOC Milkyway dress in pressed flowers" },
    { image: product2, title: "PPXOC Milkyway dress in pressed flowers" },
    { image: product3, title: "Product Name" },
    { image: product1, title: "PPXOC Milkyway dress in pressed flowers" },
    { image: product2, title: "PPXOC Milkyway dress in pressed flowers" },
    { image: product3, title: "Product Name" },
  ];
  return (
    <div>
      <div className="max-w-[840px] mx-auto text-center py-12">
        <h1 className="font-normal text-[60px] mb-5 leading-[72px] font-simplon">
          DISCOVER OUR PRODUCTS
        </h1>
        <h2 className="font-normal text-[22px] leading-10 font-simplon">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </h2>
      </div>
      {/* Header Filter  */}
      <Container>
        <div className="border-t-[1px] border-b-[1px] border-[#E5E5E5] py-6">
          <HeaderFilter
            items={[
              { label: "3425 Items", href: "" },
              { label: "HIDE FILTER", href: "" },
            ]}
          />
        </div>
      </Container>
      <Container>
        <div className=" flex gap-5">
          {/* Filter  */}
          <div className="w-[300px]"></div>
          <div className=" grid grid-cols-3 gap-x-3 gap-y-6">
            {products.map((db) => (
              <ProductCard image={db.image} title={db.title} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
