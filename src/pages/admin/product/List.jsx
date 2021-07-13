import React, { useContext } from "react";

import Product from "../../../components/admin/product/Product";
import ProductContext from "../../../context/ProductContext";

const List = () => {
  const { state } = useContext(ProductContext);

  return (
    <div className="List__product">
      <div className="container mt-5">
        <div className="row">
          {state.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
