import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './productss';

@Injectable({
  providedIn: 'root'
})
export class ProductssService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products?sort=desc');
  }

  addEditModal(postData:any, selects:any){
    if(selects) {
      return this.http.post('https://fakestoreapi.com/products',postData);
    } else {
      return this.http.put(`https://fakestoreapi.com/products/${selects.id}`,postData);
    }
  }

  delete(productId: number){
    return this.http.delete(`https://fakestoreapi.com/products/${productId}`);
  }
}
