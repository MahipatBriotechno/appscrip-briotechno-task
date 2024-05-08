import Image from "next/image";
import React from "react";
import heart from "../../assets/svg/heart.svg";
import heartRed from "../../assets/svg/heart-red.svg";
import WishlistHeartButton from "../WishlistHeartButton";
import Link from "next/link";

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
    <div className="product-card">
      {" "}
      {/* 'product-card' is the custom CSS class */}
      <div
        className={`product-image ${
          stock === 0 ? "out-of-stock" : ""
        }`}
      >
        <div className="image-wrapper">
          <Image
            src={image}
            alt={title}
            className="image-transition" // Zoom effect on hover
            layout="responsive"
            width={300}
            height={300}
          />
          {newProduct && (
            <div className="new-product-badge">NEW PRODUCT</div>
          )}

          {stock === 0 && (
            <div className="out-of-stock-message">OUT OF STOCK</div>
          )}
        </div>
      </div>
      <div className="product-details">
        <div>
          <h4 className="product-title">{title}</h4>
          <h6 className="product-info">
            <Link href="#" className="product-link">Sign in</Link> or Create an account to see pricing
          </h6>
        </div>
        <WishlistHeartButton />
      </div>
    </div>
  );
};

export default ProductCard;
