
import { Component } from '@angular/core';
import { CartService } from './cart/cart.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cart: CartService;
  currentUser: User = null;
  constructor( cart: CartService) {
    this.cart = cart;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
  }



  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

}

