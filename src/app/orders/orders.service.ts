import { Injectable } from '@angular/core';
import { Item } from '../cart/cart.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Order } from './orders.component';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  // url = 'http://localhost:3000/api';
  url='https://hotel-app1.herokuapp.com/api/order';

  //url = 'http://localhost:8080/api/order';
  constructor(private http: HttpClient) {
  }

  placeOrder(cart: Item[]) {
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.post(this.url, {
      cart: cart,
      userId: user._id
    });
  }


  getOrders() {
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.post<Order[]>(this.url + '/' + user._id, {});
  }
}

