import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders/orders.service';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';
import { User } from '../user';
import { CartService, Item } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Item[] = [];
  products: Product[] = [];
  currentUser: User;
  total = 0;
  orderSuccess = false;
  constructor(private cartService: CartService,
    private productService: ProductsService,
    private ordersService: OrdersService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.orderSuccess = false;
  }
  getProduct(id: string) {
    for (const product of this.products) {
      if (product.id === id) {
        return product;
      }
    }
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.cart = this.cartService.getCart();
      this.updatePrice();
    });
  }

  updatePrice() {
    this.total = 0;
    for (const item of this.cart) {
      this.total += this.getProduct(item.id).price * item.quantity;
    }
  }

  removeItem(item: Item) {
    const index = this.cart.indexOf(item);
    this.cart.splice(index, 1);
    this.updatePrice();
  }

  checkout() {
    this.ordersService.placeOrder(this.cart, this.currentUser.userId);
    this.cartService.cart = [];
    this.cart = [];
    this.orderSuccess = true;
  }

}


