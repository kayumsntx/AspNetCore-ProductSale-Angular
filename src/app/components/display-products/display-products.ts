import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
const apiBaseUrl='http://localhost:5236';

@Component({
  imports: [RouterLink,CommonModule],
  selector: 'app-display-products',
  styleUrl: './display-products.css',
  templateUrl: './display-products.html',
})

export class DisplayProducts implements OnInit {

  products: Product[] = [];
  constructor(private service:ProductService,private router:Router,private cdr:ChangeDetectorRef){}
  ngOnInit(): void {
    this.getAllProductsWithSales();
    this.cdr.detectChanges();
  }
  // getImageUrl(fileName:string):string{
  //   return `${apiBaseUrl}/images/${fileName}`;
  // }

  getImageUrl(fileName:string):string{
    return `${apiBaseUrl}/images/${fileName}`
  }

  getAllProductsWithSales(){
    this.service.getWithSale().subscribe(
      {
        next:(data)=>{
          this.products=data;
          this.cdr.detectChanges();

        },
        error:(err)=>console.error('Error:'+err),
      }
    )
  }
  deleteProduct(productId: number) {
if(confirm('Are you sure to delete this product?')){
  this.service.delete(productId).subscribe({
    next:()=>{
      this.getAllProductsWithSales();
      this.cdr.detectChanges();
    },
     error:(err)=>console.log('Delete failed:'+err),
  })
}
  }
}
