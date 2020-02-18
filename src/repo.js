import axios from "axios";
const url = "http://localhost:3001";

export default function getProducts() {
  return axios.get(`${url}/products`).then(response => response.data);
}
