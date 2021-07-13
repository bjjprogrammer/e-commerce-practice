import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom"

import FormCreate from "../../../components/admin/product/Form";
import ProductContext from "../../../context/ProductContext";

const Create = () => {
  const { addProduct } = useContext(ProductContext);
  const history = useHistory();
  const form = useRef(null)

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const product = {
      'name':formData.get('name'),
      'price':formData.get('price'),
    }
    addProduct(product)
    history.push("/admin/list-products");
  }

  return (
    <div className="Create__product">
      <div className="container mt-5">
        <div className="row">
          <FormCreate form={form} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Create;
