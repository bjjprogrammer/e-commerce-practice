import React from "react";

const Product = ({ product }) => {
  return (
    <div className="col-3">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">{product.name}</h5>
          <h3>{product.price}</h3>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  );
};

export default Product;