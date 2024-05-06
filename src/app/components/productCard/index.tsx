import Image from "next/image";
import React from "react";

interface ProductCardProps {
  image: any;
  title: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title }) => {
  return (
    <div className="w-full">
      <div>
        <Image src={image} alt="" />
      </div>
      <div>
        <h4>{title}</h4>
        <h6>Sign in or Create an account to see pricing</h6>
      </div>
    </div>
  );
};

export default ProductCard;
