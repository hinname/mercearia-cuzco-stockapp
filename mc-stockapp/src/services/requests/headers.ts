import { getItem } from "../storage";

export default async function getHeaders() {
  const token = await getItem('token');
  return {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"};
}