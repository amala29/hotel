import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  [x: string]: any;
  url = "../../assets/data.json";
  Products: Product[] = [];
  constructor(private http: HttpClient) {

  }
  getProducts() {
    return this.http.get<Product[]>(this.url);
  }

}
