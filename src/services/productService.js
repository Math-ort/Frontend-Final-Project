import axios from "axios";

const API_URL = "http://localhost:4000/api/products";

export const createProduct = (formData) => {
  return axios.post(API_URL, formData);
};