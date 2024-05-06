import Accordion from "@/app/components/Accordion";
import HeaderFilter from "@/app/components/HeaderFilter";
import { Container } from "@/app/components/container";
import ProductCard from "@/app/components/productCard";
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";

const Home = () => {
  const products = [
    { image: product1, title: "PPXOC Milkyway dress in pressed flowers", newProduct: true, stock: 3, like: false },
    { image: product2, title: "PPXOC Milkyway dress in pressed flowers", newProduct: false, stock: 0, like: false },
    { image: product3, title: "Product Name", newProduct: false, stock: 3, like: true },
    { image: product1, title: "PPXOC Milkyway dress in pressed flowers", newProduct: false, stock: 3, like: false  },
    { image: product2, title: "PPXOC Milkyway dress in pressed flowers", newProduct: false, stock: 3, like: false  },
    { image: product3, title: "Product Name", newProduct: false, stock: 3, like: false  },
    { image: product1, title: "PPXOC Milkyway dress in pressed flowers", newProduct: false, stock: 3, like: false  },
    { image: product2, title: "PPXOC Milkyway dress in pressed flowers", newProduct: false, stock: 3, like: false  },
    { image: product3, title: "Product Name", newProduct: false, stock: 3, like: false  },
  ];
  return (
    <div className="pb-10">
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
        <div className="border-t-[1px] border-b-[1px] border-[#E5E5E5] py-6 mb-6">
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
          <div className="w-[28%]">
            <div>

            </div>
            <Accordion title="IDEAL FOR">test</Accordion>
            <Accordion title="occasion">test</Accordion>
            <Accordion title="work">test</Accordion>
            <Accordion title="fabric">test</Accordion>
            <Accordion title="segment">test</Accordion>
            <Accordion title="suitable for">test</Accordion>
            <Accordion title="raw materials">test</Accordion>
            <Accordion title="Pattern">test</Accordion>
          </div>

          <div className=" grid grid-cols-3 gap-x-3 gap-y-6">
            {products.map((db) => (
              <ProductCard image={db.image} title={db.title} newProduct={db.newProduct} stock={db.stock} like={db.like}  />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
