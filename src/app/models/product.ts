import { Sale } from "./sale";

export interface Product {
  productId:number;
  productName:string;
  price?:number;
  size?:number;
  picture?:string;
  onSale?:boolean;
  sales?:Sale[];

}
