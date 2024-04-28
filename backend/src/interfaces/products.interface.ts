export default interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  stockQuantity: number;
  minStockQuantity: number;
  userId: string;
}