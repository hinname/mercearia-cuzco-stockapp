import { IUser, IUserCreate } from "../../interfaces";
import api from "../api";

export async function postLoginUser(email: string, password: string): Promise<string | null> {
  try {
    const response = await api.post('/users/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function getUsers(): Promise<IUser[] | null> {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function getUserById(id: string): Promise<IUser | null> {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function postUser(user: IUserCreate): Promise<IUser | null> {
  try {
    const response = await api.post('/users', user);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function putUser(id: string, user: IUserCreate): Promise<IUser | null> {
  try {
    const response = await api.put(`/users/${id}`, user);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function postSearchUser(userName: string): Promise<IUser[] | null> {
  try {
    const response = await api.post('/users/search', { userName });
    return response.data;
  } catch (error) {
    return null;
  }
}
