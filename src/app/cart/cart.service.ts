import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Item[] = [];
  constructor() { }
  addToCart(id: string, quantity: number) {
    let index = -1;
    for (const item of this.cart) {
      if (item.id === id) {
        index = this.cart.indexOf(item);
      }
    }

    if (index === -1) {
      this.cart.push({ id: id, quantity: +quantity });
    } else {
      const it = this.cart[index];
      it.quantity = it.quantity + +quantity;
    }
  }


  getCart() {
    return this.cart;
  }
}

export interface Item {
  id: string;
  quantity: number;
}