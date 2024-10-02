import { client } from "@/sanity/lib/client";
import React, { cache } from "react";
import { Image } from "sanity";
import SingleProductCard from "./single-product-card";

export interface Product {
  _id: string; // Unique identifier for the product
  productName: string; // Name of the product
  price: number; // Price of the product
  productImage: Image; // Product image using the Sanity image type
}

// Streaming
// caching

const ProductCards = async () => {
  let pData: Product[] = await client.fetch(
    `*[_type=="product"]{
  _id,
  productName,
  price,
  productImage,
}`,
    undefined,
    {
      cache: "no-cache",
    }
  );

  return (
    <div>
      <h2>Products</h2>
      {/* Cards */}
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pData.map((prodData) => {
          return (
            <div key={prodData._id}>
              <SingleProductCard product={prodData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCards;
