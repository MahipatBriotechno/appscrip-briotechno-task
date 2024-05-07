"use client"
import Image from "next/image";
import React from "react";
import heart from "../../assets/svg/heart.svg";
import heartRed from "../../assets/svg/heart-red.svg";
import WishlistHeartButton from "../WishlistHeartButton";

interface ProductCardProps {
  image: any; // Path to the image
  title: string; // Product title
  newProduct: boolean; // Whether the product is new
  stock: number; // Stock quantity
  like: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  newProduct,
  stock,
  like,
}) => {
  return (
    <div className="w-full group">
      
      {" "}
      {/* 'group' is needed for nested hover effects */}
      <div
        className={`mb-4 relative ${
          stock === 0 ? "opacity-45" : "opacity-100"
        }`}
      >
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
            <div className="text-xs lg:text-sm font-bold absolute top-2 left-2 bg-white px-2 rounded">
              NEW PRODUCT
            </div>
          )}

          {stock === 0 && (
            <div className=" text-xl text-center font-bold absolute top-[40%] bg-white h-[70px] w-full flex justify-center items-center">
              OUT OF STOCK
            </div>
          )}
        </div>
      </div>
      <div>
        <h4 className="text-sm lg:text-lg font-bold leading-5 line-clamp-1 mb-2">
          {title}
        </h4>
        <div className="flex items-center justify-between gap-2">
          <h6 className="text-gray-600 text-[10px] lg:text-sm font-normal">
            Sign in or Create an account to see pricing
          </h6>
          {/* {like ? <Image src={heartRed} alt="" /> : <Image src={heart} alt="" />} */}
          <WishlistHeartButton/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
