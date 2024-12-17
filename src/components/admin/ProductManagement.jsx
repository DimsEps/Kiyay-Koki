import React from "react";
import ProductCard from "./ProductCard";
import "../../App.css";

const ProductManagement = ({ product }) => {
  return (
    <div className="cards-admin">
      {product.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            nama={product.nama}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
            star={product.star}
            image={product.image}
            jumlahUlasan={product.jumlahUlasan}
          />
        );
      })}
    </div>
  );
};

export default ProductManagement;
