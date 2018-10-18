import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://localhost:8080/api/products';
  // url='';
  Products: Product[] = [];
  constructor(private http: HttpClient) {

  }
  getProducts() {
    return this.http.get<Product[]>(this.url);
  }
  getProduct(){
    return this.http.get<Product[]>(this.url);
  }

}
