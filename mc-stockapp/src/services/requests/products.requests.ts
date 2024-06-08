import { IProduct, IProductCreate } from "../../interfaces";
import api from "../api";
import getHeaders from "./headers";

export async function getProducts(): Promise<IProduct[] | null>{
  try {
    const headers = await getHeaders();
    const response = await api.get('/products', { headers: headers});
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function getProductById(id: string): Promise<IProduct | null>{
  try {
    const headers = await getHeaders();
    const response = await api.get(`/products/${id}`, {headers: headers});
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function postProduct(product: IProductCreate): Promise<string | null>{
  try {
    const headers = await getHeaders();
    const response = await api.post('/products', product, {headers: headers});
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function putProduct(id: string, product: IProductCreate): Promise<string | null>{
  try {
    const headers = await getHeaders();
    const response = await api.put(`/products/${id}`, product, {headers: headers});
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function postSearchProduct(name: string): Promise<IProduct[] | null>{
  try {
    const headers = await getHeaders();
    const response = await api.post('/products/search', { name }, {headers: headers});
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function deleteProduct(id: string): Promise<void>{
  try {
    const headers = await getHeaders();
    await api.delete(`/products/${id}`, {headers: headers});
  } catch (error) {
    return;
  }
}