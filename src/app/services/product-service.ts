import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { UploadResponse } from '../models/upload-response';
const apiBaseUrl='http://localhost:5236';
@Service()
export class ProductService {
   
    constructor() {}
private http = inject(HttpClient)

get(): Observable<Product[]>{
 return this.http.get<Product[]>(`${apiBaseUrl}/api/Products`)
}
getWithSale():Observable<Product[]>{
  return this.http.get<Product[]>(`${apiBaseUrl}/api/Products/Sale/Include`)
}
getById(id:number):Observable<Product>{
  return this.http.get<Product>(`${apiBaseUrl}/api/Products/${id}/Include`)
}
save(data:Product):Observable<Product>{
  return this.http.post<Product>(`${apiBaseUrl}/api/Products`,data)
}
uploadImage(id:number,f:File):Observable<UploadResponse>{
  const formData= new FormData();
  formData.append('File',f);
  return this.http.post<UploadResponse>(`${apiBaseUrl}/api/Products/Upload/${id}`, formData)
}
update(data:Product):Observable<any>{
  return this.http.put<Product>(`${apiBaseUrl}/api/Products/${data.productId}`,data);
}
delete(id:number):Observable<any>{
 return this.http.delete<any>(`${apiBaseUrl}/api/Products/${id}`);
}
  }

