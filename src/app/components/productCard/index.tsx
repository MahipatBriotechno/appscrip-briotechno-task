"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import WishlistHeartButton from "../WishlistHeartButton";
import "./Product.css";
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
        className={`product-wrp ${
          stock === 0 ? "opacity-45" : "opacity-100"
        }`}
      >
        <div className="product-image">
          <Image
            src={image}
            alt={title}
            className="image-transiation inner-img" // Zoom effect on hover
            layout="responsive"
            width={300}
            height={300}
          />
          {newProduct && (
            <div className="new-product">
              NEW PRODUCT
            </div>
          )}

          {stock === 0 && (
            <div className=" out-of-stock">
              OUT OF STOCK
            </div>
          )}
        </div>
      </div>
      <div className="product-content-wrp">
        <div>
          <h4 className="product-title">
            {title}
          </h4>
          <h6 className="product-text">
            <Link href="#" className="underline">
              Sign in
            </Link>{" "}
            or Create an account to see pricing
          </h6>
          {/* {like ? <Image src={heartRed} alt="" /> : <Image src={heart} alt="" />} */}
        </div>
        <WishlistHeartButton />
      </div>
    </div>
  );
};

export default ProductCard;
