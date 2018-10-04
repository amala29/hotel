import { Injectable } from '@angular/core';
import { Item } from '../cart/cart.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  orders: Order[] = [];
  constructor() {
    const orders = localStorage.getItem('orders');
    if (orders != null) {
      this.orders = JSON.parse(orders);
   }
  }

  placeOrder(cart: Item[],userId: string) {
    const orderId = new Date().getMilliseconds().toString();
    const order = {
      orderId: orderId,
      cart: cart,
      userId: userId,
      date: new Date()
    };
    this.orders.push(order);
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }
}

export interface Order {
  orderId: string;
  cart: Item[];
  userId: string;
  date: Date;
}