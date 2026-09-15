import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Sale } from '../../models/sale';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { tick } from '@angular/core/testing';
import { UploadResponse } from '../../models/upload-response';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-add-product',
  styleUrl: './add-product.css',
  templateUrl: './add-product.html',
})
export class AddProduct implements OnInit {


isEditMode:boolean=false;
productIdToEdit:number|null=null;
productObj:Product={
  productId:0,productName:'',price:0,size:0,picture:'',onSale:false,sales:[],
}
saleObj:Sale={
  saleId:0,productId:0,quantity:0,
};
saleList:Sale[]=[];
imageUrl:any=null;
selectedFile:File|null=null;
apiBaseUrl:string='http://localhost:5236';
constructor(private service:ProductService, private router:Router, private route:ActivatedRoute,private cdr:ChangeDetectorRef){} 

  ngOnInit(): void {

    this.route.paramMap.subscribe((params)=>{
      const idParam=params.get('id');
      if(idParam)
      {
        this.isEditMode=true;
this.productIdToEdit= +idParam;
      this.loadProductForEditing(this.productIdToEdit);
      }
      else{
        this.resetForm();

      }
      
    }) 
  }

  resetForm() {
    this.productObj={
     productId:0,productName:'',price:0,size:0,picture:'',onSale:false,sales:[], 
    }
    this.saleObj={
     saleId:0,productId:0,quantity:0,
    }
    this.saleList=[];
    this.selectedFile=null;
    this.imageUrl=null;
    this.isEditMode=false;
    this.productIdToEdit=null;
  }

    loadProductForEditing(productIdToEdit: number): void {
   this.service.getWithSale().subscribe({
    next:(products:Product[])=>{
      const foundProduct=products.find((p)=>p.productId===productIdToEdit);
      if(foundProduct){
        this.productObj={...foundProduct}
        this.saleList=foundProduct.sales?[...foundProduct.sales]:[];
        if(foundProduct.picture){
          this.imageUrl=`${this.apiBaseUrl}/images/${foundProduct.picture}`;
        }
        this.cdr.detectChanges();
      }
      else{
        console.error('Product not found ID:'+ productIdToEdit);
        this.router.navigate(['/display-product'])
      }
    },
    error:(err)=>{
      console.error('Failed to load product details '+err);
    }
   });

  }
 deleteSale(saleItem: Sale): void {
    const index = this.saleList.indexOf(saleItem);
    if (index > -1) {
      this.saleList.splice(index, 1);
    }
  }

  addsales(): void {
    if (this.saleObj.date !== '' && this.saleObj.quantity !== 0) {
      this.saleObj.productId = this.productObj.productId ?? 0;
      const cleanSaleObj = JSON.parse(JSON.stringify(this.saleObj));
      this.saleList.unshift(cleanSaleObj);
      this.saleObj = { saleId: 0, date: '', productId: 0, quantity: 0 };
    }
  }



onSelectedFile(event: any) {
  const file = event.target.files?.[0];
  if(file){
    this.selectedFile=file;
    const reader=new FileReader();
    reader.onload=(e:any)=>{
      this.imageUrl=e.target.result;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

}


  saveProduct(): void {
    const targetProduct: Product = {
      productId: this.productObj.productId,
      productName: this.productObj.productName,
      price: this.productObj.price,
      size: this.productObj.size,
      picture: this.productObj.picture || undefined,
      onSale: this.productObj.onSale,
      sales: this.saleList,
    };
  if (this.isEditMode) {
      this.service.update(targetProduct).subscribe({
        next: (updateResult) => {
          console.log('Product Updated Successfully', updateResult);
          
          this.HandleImageSave(this.productIdToEdit!);
        },
        error: (err) => console.error('Error updating product:', err),
      });
    } else {
      this.service.save(targetProduct).subscribe({
        next: (saveProduct) => {
          console.log('Saved successfully', saveProduct);
          this.HandleImageSave(saveProduct.productId);
        },
        error: (err) => console.error('Error saving product:', err),
      });
    }
  }
  private HandleImageSave(id: number): void {
    if (this.selectedFile) {
      this.UploadImage(id);
    } else {
      this.finishAndNavigate();
    }
  }


  


  UploadImage(id: number) {
    if (this.selectedFile) {
      this.service.uploadImage(id, this.selectedFile).subscribe({
        next: (uploadResponse: UploadResponse) => {
          console.log('Image uploaded', uploadResponse);
          this.finishAndNavigate();
        },
        error: (err) => {
          console.error('Error Uploading image:', err);
                    this.finishAndNavigate();
        },
      });
    }
  }
  
private finishAndNavigate(): void {
    this.resetForm();
    this.cdr.detectChanges(); 
    this.router.navigate(['/display-product']);
  }
    
  
  

  
  
}
