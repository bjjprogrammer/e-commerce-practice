import { useState, useEffect } from "react";

import { createProduct, getProducts } from "../services/ProductService";

const initialState = {
  products: [],
  categories: [],
  cart: [],
};

const URL = "http://localhost:3001/products";

const useStateProduct = () => {
  const [state, setState] = useState(initialState);


  useEffect(() => {
    getProducts(URL)
    .then((response) => {
      setState({
        ...state,
        products:[...response.data]
      })
    })
  },[]);

  const addProduct = (payload) => {
    createProduct(URL, payload)
      .then((response) => {
        setState({
          ...state,
          products: [...state.products, response.data],
        });
      })
      .catch((error) => console.log(error));
  };

  return {
    state,
    addProduct,
    // allProducts,
  };
};

export default useStateProduct;
