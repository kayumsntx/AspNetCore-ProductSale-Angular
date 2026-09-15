import { Routes } from '@angular/router';
import { DisplayProducts } from './components/display-products/display-products';
import { AddProduct } from './components/add-product/add-product';

export const routes: Routes = [
  {path: 'display-product',component: DisplayProducts},
  {path:'add-product', component:AddProduct},
   {path:'edit-product/:id', component:AddProduct},
    {path:'edit/:id', component:AddProduct},
    {path:'',redirectTo:'/display-product',pathMatch:'full'}
];
