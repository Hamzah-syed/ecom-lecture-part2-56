import React from "react";
import { Product } from "./products-card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface IProps {
  product: Product;
}

const SingleProductCard = ({ product }: IProps) => {
  return (
    <div>
      {/* Image */}
      <div>
        <Image 
        width={312}
        height={400}
        src={ urlFor(product.productImage).url() } alt={product.productName} />

        <h3>{product.productName}</h3>
        <h3>{product.price}</h3>
      </div>
      {/* Content */}
    </div>
  );
};

export default SingleProductCard;
