import Image from "next/image";
import React from "react";

interface ProductCardProps {
  image: any; // Path to the image
  title: string; // Product title
  newProduct: boolean; // Whether the product is new
  stock: number; // Stock quantity
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  newProduct,
  stock,
}) => {
  return (
    <div className="w-full group"> {/* 'group' is needed for nested hover effects */}
      <div className={`mb-4 relative ${stock === 0 ? 'opacity-45' : 'opacity-100'}`}>
        <div className="overflow-hidden relative">
          <Image
            src={image}
            alt={title}
            className="transition-transform duration-300 group-hover:scale-110" // Zoom effect on hover
            layout="responsive"
            width={300}
            height={300}
          />
          {newProduct && (
            <div className="text-sm font-bold absolute top-2 left-2 bg-white px-2 rounded">
              NEW PRODUCT
            </div>
          )}
          {stock === 0 && (
            <div className="text-xl text-center font-bold absolute top-[40%] bg-white h-[70px] w-full flex justify-center items-center">
              OUT OF STOCK
            </div>
          )}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold leading-5 line-clamp-1 mb-2">
          {title}
        </h4>
        <h6 className="text-gray-600 text-sm font-normal">
          Sign in or Create an account to see pricing
        </h6>
      </div>
    </div>
  );
};

export default ProductCard;
