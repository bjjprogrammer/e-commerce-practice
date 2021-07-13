import axios from 'axios';


export const getProducts = async(url) => {
    const products = await axios.get(url);
    return products;
}

export const createProduct = async(url, payload) => {
    const response = await axios.post(url,payload);
    return response;
}