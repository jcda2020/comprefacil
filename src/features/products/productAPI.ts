import axios from "axios";

const API_URL = "/api/products"; // "http://localhost:3000/api/products"

export interface ProductInput {
  name: string;
  description: string;
  price: number;
  stock: number;
  discount?: number;
  created_at: Date;
}

export const createProduct = async (product: ProductInput) => {
 console.log("Simulando POST:", product);
  return new Promise((resolve) => setTimeout(() => resolve(product), 500));  
/*const response = await axios.post(API_URL, product);
  return response.data;*/
};

export const updateProduct = async (id: string, product: Partial<ProductInput>) => {
 console.log("Simulando PATCH:", id, product);
  return new Promise((resolve) => setTimeout(() => resolve({ id, ...product }), 500));  
/*const response = await axios.patch(`${API_URL}/${id}`, product);
  return response.data;*/
};


