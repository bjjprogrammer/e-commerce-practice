import React from "react";

import productImage from '../assets/images/home-product.jpg'

const Tag = () => {
  return (
    <div className="Tag col-4">
      <div className="card">
        <img src={productImage} className="card-img-top" alt="hoodie" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  );
};

export default Tag;
