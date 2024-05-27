import { IProduct, IProductCreate } from "../../interfaces";
import api from "../api";

export async function getProducts(): Promise<IProduct[] | null>{
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function getProductById(id: string): Promise<IProduct | null>{
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function postProduct(product: IProductCreate): Promise<IProduct | null>{
  try {
    const response = await api.post('/products', product);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function putProduct(id: string, product: IProductCreate): Promise<IProduct | null>{
  try {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function postSearchProduct(name: string): Promise<IProduct[] | null>{
  try {
    const response = await api.post('/products/search', { name });
    return response.data;
  } catch (error) {
    return null;
  }
}