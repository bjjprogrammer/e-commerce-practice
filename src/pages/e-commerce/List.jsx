import React, { useContext } from "react";

import ProductContext from "../../context/ProductContext";
import Product from "../../components/e-commerce/product/Product"

const List = () => {
  const { state } = useContext(ProductContext);

  return (
    <div className="List">
      <div className="container mt-5">
        <h1 className="text-center">Products</h1>
        <div className="row mt-4">
          {state.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
