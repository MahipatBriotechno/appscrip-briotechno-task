import HeaderFilter from "@/app/components/HeaderFilter";
import { Container } from "@/app/components/container";
import React from "react";

const Home = () => {
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
    </div>
  );
};

export default Home;
