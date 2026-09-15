import { Product } from "./product";

export interface Sale {
  saleId?:number;
  productId?:number;
  date?:Date|string;
  quantity?:number;
  product?:Product
}
