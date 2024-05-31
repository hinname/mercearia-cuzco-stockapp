import { IUser, IUserCreate } from "../../interfaces";
import api from "../api";
import getHeaders from "./headers";

export async function postLoginUser(email: string, password: string): Promise<string | null> {
  try {
    const response = await api.post('/users/login', {
      email,
      password,
    });
    return response.data.token;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getUsers(): Promise<IUser[] | null> {
  try {
    const headers = await getHeaders();
    const response = await api.get('/users', { headers: headers });
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function getUserById(id: string): Promise<IUser | null> {
  try {
    const headers = await getHeaders();
    const response = await api.get(`/users/${id}`, { headers: headers });
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function postUser(user: IUserCreate): Promise<IUser | null> {
  try {
    const headers = await getHeaders();
    const response = await api.post('/users', user, { headers: headers });
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function putUser(id: string, user: IUserCreate): Promise<IUser | null> {
  try {
    const headers = await getHeaders();
    const response = await api.put(`/users/${id}`, user, { headers: headers });
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function postSearchUser(userName: string): Promise<IUser[] | null> {
  try {
    const headers = await getHeaders();
    const response = await api.post('/users/search', { userName }, { headers: headers });
    return response.data;
  } catch (error) {
    return null;
  }
}
